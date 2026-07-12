import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Recreate the core layout of a music player UI (sidebar, track list, now-playing bar).";

const requirements = [
  "Sidebar navigation, main track/playlist list, and a persistent player bar",
  "Selecting a track updates the now-playing bar",
  "Play/pause toggle in the player bar (audio playback optional)",
  "Consider Sidebar + TrackList + PlayerBar components"
];
import { useState } from 'react';

export default function SpotifyUIClone() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Spotify UI Clone"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/intermediate-projects/spotify-ui-clone.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Spotify UI Clone" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
