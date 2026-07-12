import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Build an image carousel with next/prev controls and slide indicators.";

const requirements = [
  "Next/prev buttons move through a set of images",
  "Indicator dots show the current slide and are clickable",
  "Wrap around at the start/end (bonus)"
];
import { useState } from 'react';

export default function ImageCarousel() {
  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);
  return (
    <div className="task-page">
      <TaskInfo
        title="Image Carousel"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/advanced-react/image-carousel.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build the interactive pattern for "Image Carousel" */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
