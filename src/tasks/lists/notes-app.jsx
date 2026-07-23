import TaskInfo from '../../components/TaskInfo.jsx';
const description = "Create, edit, and delete short text notes.";
const requirements = [
  "Add a new note with a title/body",
  "Edit an existing note in place",
  "Delete a note"
];
import { useState } from 'react';

export default function NotesApp() {

  const [noteData, setNoteData] = useState({
    title : "",
    body : ""
  })
  const [notesList, setNotesList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [buttonText, setButtonText] = useState("ADD")

  function changeNoteData(event) {
    const {name, value} = event.target;
    const newNoteData = {
      ...noteData,
      [name] : value
    }
    setNoteData(newNoteData);
  }
  function addClick() {
    if(editingIndex === null) {
      setNotesList([
        ...notesList,
        noteData
      ])
      setNoteData({
        title : "",
        body : ""
      })
    }
    else {
      const updateNotes = [...notesList]
      updateNotes[editingIndex] = noteData;
      setNotesList(updateNotes);
      setEditingIndex(null);
      setNoteData({
        title :"",
        body :""
      })
      setButtonText("ADD");

    }
    
  }
  function editClicked(index) {
      setButtonText("UPDATE");

    setEditingIndex(index);
    setNoteData(notesList[index]);

  }
  function deleteClicked(index) {
    const newNotesList = notesList.filter((notes, id) => id != index);
    setNotesList(newNotesList);
  }
  function changeValue(editingIndex) {

  }

  
  return (
    <div className="task-page">
      <TaskInfo
        title="Notes App"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/notes-app.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          
          <h2>WRITE NEW NOTE</h2>
          <label>Title :-
            <input name='title' value={noteData.title} onChange={changeNoteData}></input>
          </label>

          <label>Body :-
            <textarea name='body' value={noteData.body} onChange={changeNoteData}></textarea>
          </label>

          <button onClick={addClick}>{buttonText}</button>

          {console.log(noteData)}
          {console.log(notesList)}


          <div>
            <h2>Notes Added</h2>
            <div>
              {notesList.map((notes, index) => {
                return (
                  <div key={index}>
                    <input name='taskTitle' value={notes.title} onChange={changeValue}></input>
                    <textarea name='taskBody' value={notes.body} onChange={changeValue}></textarea>
                    <button onClick={()=>editClicked(index)}>Edit</button>
                    <button onClick={()=>deleteClicked(index)}>Delete</button>
                  </div>
                )
              })}
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
