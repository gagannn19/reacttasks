import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, TASKS } from '../data/tasks.js';

export default function Home() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TASKS;
    return TASKS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q),
    );
  }, [query]);

  const byCategory = useMemo(() => {
    const map = new Map();
    for (const task of filtered) {
      if (!map.has(task.category)) map.set(task.category, []);
      map.get(task.category).push(task);
    }
    return map;
  }, [filtered]);

  return (
    <div className="home">
      <div className="home-header">
        <h1>React Practice Tasks</h1>
        <p>{TASKS.length} hands-on tasks across {CATEGORIES.length} categories. Pick one below to see its brief and starter code.</p>
      </div>

      <input
        className="home-search"
        type="text"
        placeholder="Search tasks (e.g. 'form', 'hook', 'clone')..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length === 0 && <p className="no-results">No tasks match "{query}".</p>}

      {CATEGORIES.filter((c) => byCategory.has(c.name)).map((category) => (
        <section className="category-section" key={category.slug}>
          <h2 className="category-title">{category.label}</h2>
          <div className="task-grid">
            {byCategory.get(category.name).map((task) => (
              <Link key={task.path} className="task-card" to={task.path}>
                {task.title}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
