import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A social-media style like button that toggles liked state and updates a like count.";

const requirements = [
  "Clicking toggles between liked/unliked",
  "Like count increases/decreases accordingly",
  "Button style changes when liked"
];
import { useState } from 'react';

function Likebutton(){
  const [count, setCount] = useState(10);
  const [like, setLike] = useState(true);
  const [image, setImage] = useState('https://img.magnific.com/free-vector/like-button-thumbs-up-cartoon-style_78370-1159.jpg?semt=ais_hybrid&w=740&q=80');
  const [para, setPara] = useState('Like');

  function changeimage() {
    if(like === true) {
      setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs663qRZga8f4CYxPRtH6QjJmiH0zmu3GYG59HLHaNwFipSOVHj1Uq8nnq&s=10");
    }
    else {
      setImage("https://img.magnific.com/free-vector/like-button-thumbs-up-cartoon-style_78370-1159.jpg?semt=ais_hybrid&w=740&q=80");
    }
  }

  function changepara() {
    if(like === true) {
      setPara("Liked");
    }
    else {
      setPara("Like");
    }
  }

  function changecount() {
    if(like=== true) {
      setCount(11);
    }
    else{
      setCount(10);
    }
  }

  function changeclick() {
    if(like === true) {
      setLike(false);
    }
    else {
      setLike(true);
    }
    changeimage();
    changepara();
    changecount();
  }

  return(
    <span style={{display:"inline-block"}}>
      <button onClick={changeclick}>
        <img id='image' src={image} height={30}></img>
      </button>
      <span id='para' style={{fontSize:"30px", marginLeft:"10px"}}>{count}{para}</span>
    </span>
  );
}

export default function LikeButton() {
  return (
    <div className="task-page">
      <TaskInfo
        title="Like Button"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-state/like-button.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <Likebutton />
        </div>
      </div>
    </div>
  );
}
