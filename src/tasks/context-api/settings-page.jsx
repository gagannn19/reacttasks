import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Share app-wide settings (e.g. notifications on/off, font size) via Context.";

const requirements = [
  "SettingsContext exposes a settings object and an updateSetting function",
  "A settings form updates values through context, not local state",
  "Another component reflects a setting's current value"
];
import { SettingsProvider, useSettingsContext } from '../../context/SettingsContext.jsx';

function Demo() {
  // TODO: consume useSettingsContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function SettingsPage() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Settings Page"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/settings-page.jsx","src/context/SettingsContext.jsx"]}
      />
      <div className="task-workspace">
        <SettingsProvider>
          <Demo />
        </SettingsProvider>
      </div>
    </div>
  );
}
