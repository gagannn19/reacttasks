import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Provide a global loading indicator that any component can trigger via Context.";

const requirements = [
  "LoaderContext exposes isLoading and show/hide functions",
  "A demo component triggers show() before a fake async action and hide() after",
  "A global overlay/spinner renders whenever isLoading is true"
];
import { LoaderProvider, useLoaderContext } from '../../context/LoaderContext.jsx';

function Demo() {
  // TODO: consume useLoaderContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function GlobalLoader() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Global Loader"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/global-loader.jsx","src/context/LoaderContext.jsx"]}
      />
      <div className="task-workspace">
        <LoaderProvider>
          <Demo />
        </LoaderProvider>
      </div>
    </div>
  );
}
