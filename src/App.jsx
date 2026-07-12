import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import { TASKS } from './data/tasks.js';

const taskModules = import.meta.glob('./tasks/**/*.jsx');

function resolveComponent(task) {
  const modulePath = `./tasks/${task.categorySlug}/${task.slug}.jsx`;
  const loader = taskModules[modulePath];
  if (!loader) return null;
  return lazy(loader);
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Suspense fallback={<div className="task-page">Loading task…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {TASKS.map((task) => {
              const Component = resolveComponent(task);
              if (!Component) return null;
              return <Route key={task.path} path={task.path} element={<Component />} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
