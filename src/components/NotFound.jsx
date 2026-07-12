import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 — Page Not Found</h1>
      <p>That task doesn't exist (yet).</p>
      <Link to="/">← Back to all tasks</Link>
    </div>
  );
}
