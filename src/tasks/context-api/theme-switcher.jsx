import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Use Context to share a light/dark theme across the whole demo without prop drilling.";

const requirements = [
  "ThemeContext exposes the current theme and a toggle function",
  "At least two nested components read the theme via context",
  "Toggling updates every consumer at once"
];
import { ThemeProvider, useThemeContext } from '../../context/ThemeContext.jsx';

function Demo() {
  // TODO: consume useThemeContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function ThemeSwitcher() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Theme Switcher"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/theme-switcher.jsx","src/context/ThemeContext.jsx"]}
      />
      <div className="task-workspace">
        <ThemeProvider>
          <Demo />
        </ThemeProvider>
      </div>
    </div>
  );
}
