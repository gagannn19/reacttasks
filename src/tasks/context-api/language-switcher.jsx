import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Share the selected UI language across components using Context.";

const requirements = [
  "LanguageContext exposes the current language and a setter",
  "At least two components render text that depends on the language",
  "Switching updates all consumers immediately"
];
import { LanguageProvider, useLanguageContext } from '../../context/LanguageContext.jsx';

function Demo() {
  // TODO: consume useLanguageContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function LanguageSwitcher() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Language Switcher"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/language-switcher.jsx","src/context/LanguageContext.jsx"]}
      />
      <div className="task-workspace">
        <LanguageProvider>
          <Demo />
        </LanguageProvider>
      </div>
    </div>
  );
}
