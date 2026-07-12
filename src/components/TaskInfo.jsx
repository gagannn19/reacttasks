import { Link } from 'react-router-dom';

export default function TaskInfo({ title, description, requirements, filePaths }) {
  return (
    <div className="task-info">
      <Link className="back-link" to="/">
        ← Back to all tasks
      </Link>
      <h1>{title}</h1>
      <p className="task-description">{description}</p>
      {requirements?.length > 0 && (
        <ul className="requirements">
          {requirements.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ul>
      )}
      {filePaths?.length > 0 && (
        <div className="file-paths">
          <span className="file-paths-label">
            {filePaths.length > 1 ? 'Edit these files:' : 'Edit this file:'}
          </span>
          <ul>
            {filePaths.map((filePath) => (
              <li key={filePath}>
                <code>{filePath}</code>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
