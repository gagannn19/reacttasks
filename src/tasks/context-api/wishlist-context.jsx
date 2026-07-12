import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Share a wishlist of items (add/remove/check) across components using Context.";

const requirements = [
  "WishlistContext exposes the wishlist plus add/remove/toggle functions",
  "A demo lists sample products with an add-to-wishlist button",
  "Show the current wishlist count somewhere else in the tree"
];
import { WishlistProvider, useWishlistContext } from '../../context/WishlistContext.jsx';

function Demo() {
  // TODO: consume useWishlistContext() here and build the UI
  return <p>Your code here.</p>;
}

export default function WishlistContext() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Wishlist Context"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/context-api/wishlist-context.jsx","src/context/WishlistContext.jsx"]}
      />
      <div className="task-workspace">
        <WishlistProvider>
          <Demo />
        </WishlistProvider>
      </div>
    </div>
  );
}
