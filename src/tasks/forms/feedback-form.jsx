import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Collect a star/number rating plus optional comments from the user.";

const requirements = [
  "A rating control (e.g. 1-5 buttons or stars)",
  "An optional comment textarea",
  "Display a summary of the submitted feedback"
];
import { useState } from 'react';

export default function FeedbackForm() {
  // TODO: add one useState per field this form needs (or a single formData object)
  const [formData, setFormData] = useState({
    rating : "",
    comment : ""
  });

  const [submit, setSubmit] = useState(null)

  const stars = [1,2,3,4,5];

  function handleRating(key) {
    const newFormData = {
      ...formData,
      rating:key
    }
    setFormData(newFormData);
    console.log(newFormData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    // TODO: update formData for this field
    const newFormData = {
      ...formData,
      [name] : value
    }
    setFormData(newFormData);
    console.log(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: validate and handle the submitted data
    setSubmit(formData);
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Feedback Form"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/feedback-form.jsx"]}
      />
      <div className="task-workspace">
        <form className="stack" onSubmit={handleSubmit}>
          {/* TODO: add labeled <input> fields, wiring value+onChange to formData */}

          <div>

            {stars.map((star)=>{
              return (<img name="rating" key={star} src='https://img.magnific.com/free-vector/3d-metal-star-isolated_1308-117760.jpg?semt=ais_hybrid&w=740&q=80' style={{height:"30px", width:"30px", margin:"2px"}} onClick={()=>handleRating(star)}></img>)
            })}

          </div>

          <textarea name='comment' value={formData.comment} onChange={handleChange}></textarea>

          <p>Rating :- {formData.rating}/5</p>

          <button className="btn primary" type="submit">
            Submit
          </button>

          {submit && (
            <>
              <h3>Feedback Form Summary :- </h3>
              <p>Rating :- {submit.rating}</p>
              <p>Comment :- {submit.comment}</p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
