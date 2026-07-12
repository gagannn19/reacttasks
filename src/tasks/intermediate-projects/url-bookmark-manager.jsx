import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Save, tag, and organize bookmarked URLs.";

const requirements = [
  "Add a bookmark with a URL, title, and tags",
  "Filter bookmarks by tag",
  "Delete a bookmark",
  "Consider BookmarkForm + BookmarkList + TagFilter components"
];
import { useState } from 'react';

export default function URLBookmarkManager() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="URL Bookmark Manager"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/url-bookmark-manager.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "URL Bookmark Manager" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
