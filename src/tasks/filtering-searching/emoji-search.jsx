import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search a small emoji dataset by name/keyword.";

const requirements = [
  "Seed an array of {emoji, name, keywords}",
  "Filter by matching the query against name or keywords",
  "Render matching emoji in a grid"
];
import { useMemo, useState } from 'react';

export default function EmojiSearch() {

  const emojis = [
    {
      emoji: "😀",
      name: "Grinning Face",
      keywords: ["happy", "smile", "joy", "face"]
    },
    {
      emoji: "😂",
      name: "Face with Tears of Joy",
      keywords: ["laugh", "funny", "cry", "happy"]
    },
    {
      emoji: "😍",
      name: "Smiling Face with Heart Eyes",
      keywords: ["love", "crush", "heart", "happy"]
    },
    {
      emoji: "😎",
      name: "Smiling Face with Sunglasses",
      keywords: ["cool", "style", "awesome", "summer"]
    },
    {
      emoji: "🥳",
      name: "Partying Face",
      keywords: ["party", "celebration", "birthday", "fun"]
    },
    {
      emoji: "😭",
      name: "Loudly Crying Face",
      keywords: ["sad", "cry", "tears", "upset"]
    },
    {
      emoji: "❤️",
      name: "Red Heart",
      keywords: ["love", "heart", "romance", "like"]
    },
    {
      emoji: "🔥",
      name: "Fire",
      keywords: ["hot", "burn", "lit", "trend"]
    },
    {
      emoji: "⭐",
      name: "Star",
      keywords: ["favorite", "night", "shine", "rating"]
    },
    {
      emoji: "🌍",
      name: "Globe",
      keywords: ["earth", "world", "planet", "travel"]
    },
    {
      emoji: "🍕",
      name: "Pizza",
      keywords: ["food", "cheese", "italian", "dinner"]
    },
    {
      emoji: "🍔",
      name: "Burger",
      keywords: ["food", "fastfood", "meal", "lunch"]
    },
    {
      emoji: "🍎",
      name: "Apple",
      keywords: ["fruit", "healthy", "food", "red"]
    },
    {
      emoji: "☕",
      name: "Coffee",
      keywords: ["drink", "tea", "morning", "cafe"]
    },
    {
      emoji: "⚽",
      name: "Soccer Ball",
      keywords: ["football", "sport", "game", "player"]
    },
    {
      emoji: "🏀",
      name: "Basketball",
      keywords: ["sport", "game", "ball", "nba"]
    },
    {
      emoji: "🚗",
      name: "Car",
      keywords: ["vehicle", "drive", "transport", "road"]
    },
    {
      emoji: "✈️",
      name: "Airplane",
      keywords: ["flight", "travel", "sky", "vacation"]
    },
    {
      emoji: "📚",
      name: "Books",
      keywords: ["study", "education", "library", "learning"]
    },
    {
      emoji: "💻",
      name: "Laptop",
      keywords: ["computer", "coding", "work", "technology"]
    }
  ];
  const [copyEmojis, setCopyEmojis] = useState(emojis);
  const [search, setSearch] = useState("");
  
  function changeSearch(event) {
    const val = event.target.value.toLowerCase();
    setSearch(event.target.value);

    const matchedEmoji = emojis.filter((emoji) => {
      const matchName = emoji.name.toLowerCase().includes(val);

      const matchKeyword = emoji.keywords.some((keyword) =>
        keyword.toLowerCase().includes(val)
      );

      return matchName || matchKeyword;
    });

    setCopyEmojis(matchedEmoji);
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Emoji Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/emoji-search.jsx"]}
      />
      <div className="task-workspace">

        <label>
          Search Emoji By Name :-
          <input name='search' value={search} onChange={changeSearch}></input>
        </label>

        <div style={{display:"grid", gridTemplateColumns : "repeat(4,1fr)", gap:"1px", width:"100px"}}>
          {copyEmojis.map((emoji,index)=>(
            <p key={index} style={{display:"inline", margin:"0px", padding:"0px", width:"0px", height:"25px"}}>{emoji.emoji}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
