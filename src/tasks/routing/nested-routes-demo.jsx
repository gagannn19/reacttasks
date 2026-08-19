import TaskInfo from '../../components/TaskInfo.jsx';
import { useState } from 'react';

const description =
  "Simulate nested navigation, e.g. a Settings page with Profile/Security sub-sections.";

const requirements = [
  "A top-level page with its own sub-navigation",
  "Sub-navigation switches nested content without leaving the parent page",
  "Track both the parent and child selection in state"
];

export default function NestedRoutesDemo() {

  const [parent, setParent] = useState('settings');


  const [child, setChild] = useState('');

  const handleChildChange = (section) => {
    setParent('settings');
    setChild(section);
  };

  let display;

  if (child === 'profile') {
    display = (
      <div>
        <h3>This is Profile page</h3>
        <p>Name: Gagan</p>
      </div>
    );
  } else if (child === 'security') {
    display = (
      <div>
        <h3>This is Security page</h3>
        <p>System is secured</p>
      </div>
    );
  } else {
    display = <p>Select a section</p>;
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Nested Routes Demo"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/nested-routes-demo.jsx"]}
      />

      <div className="task-workspace">
        <div className="stack">


          {parent === 'settings' && (
            <>
              <h1>Settings</h1>


              <button onClick={() => handleChildChange('profile')}>
                Profile
              </button>

              <button onClick={() => handleChildChange('security')}>
                Security
              </button>


              {display}
            </>
          )}

        </div>
      </div>
    </div>
  );
}