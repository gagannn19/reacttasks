import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A one-time-password input made of individual digit boxes with auto-focus advance.";

const requirements = [
  "Render N separate single-character inputs",
  "Typing a digit auto-focuses the next box",
  "Backspace on an empty box focuses the previous box"
];
import { useState } from 'react';

export default function OTPInput() {

  const [otp, setOtp] = useState({
    otp1 : "",
    otp2 : "",
    otp3 : "",
    otp4 : "",
    otp5 : "",
    otp6 : ""
  })

  function changeOtp(event) {
    const {name,value} = event.target;
    if(!isNaN(value)) {
      setOtp({
        ...otp,
        [name] : value
      })
    }
  }
  function nextSibling(event) {
    if (event.target.value.length === 1 && event.target.nextElementSibling && !isNaN(event.target.value)) {
      event.target.nextElementSibling.focus();
    }
  }
  // function backSibling(event) {
  //   if(event.target.value.length === 0 && event.target.previousElementSibling) {
  //     event.target.previousElementSibling.focus();
  //   }
  // }
  
  
  return (
    <div className="task-page">
      <TaskInfo
        title="OTP Input"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/forms/otp-input.jsx"]}
      />
      <div className="task-workspace">
        <input style={{height:"50px", width:"50px", padding:"15px", margin:"10px", fontSize:"30px"}} maxLength={1} name='otp1' value={otp.otp1} onChange={(event) => {
          changeOtp(event);
          nextSibling(event);
        }} onKeyDown={(event)=>{
          if (event.key === "Backspace" && event.target.value === "") {
            event.preventDefault();
            event.target.previousElementSibling?.focus();
          }
        }}></input>
        <input style={{height:"50px", width:"50px", padding:"15px", margin:"10px", fontSize:"30px"}} maxLength={1} name='otp2' value={otp.otp2} onChange={(event) => {
          changeOtp(event);
          nextSibling(event);
        }} onKeyDown={(event)=>{
          if (event.key === "Backspace" && event.target.value === "") {
            event.preventDefault();
            event.target.previousElementSibling?.focus();
          }
        }}></input>
        <input style={{height:"50px", width:"50px", padding:"15px", margin:"10px", fontSize:"30px"}} maxLength={1} name='otp3' value={otp.otp3} onChange={(event) => {
          changeOtp(event);
          nextSibling(event);
        }} onKeyDown={(event)=>{
          if (event.key === "Backspace" && event.target.value === "") {
            event.preventDefault();
            event.target.previousElementSibling?.focus();
          }
        }}></input>
        <input style={{height:"50px", width:"50px", padding:"15px", margin:"10px", fontSize:"30px"}} maxLength={1} name='otp4' value={otp.otp4} onChange={(event) => {
          changeOtp(event);
          nextSibling(event);
        }} onKeyDown={(event)=>{
          if (event.key === "Backspace" && event.target.value === "") {
            event.preventDefault();
            event.target.previousElementSibling?.focus();
          }
        }}></input>
        <input style={{height:"50px", width:"50px", padding:"15px", margin:"10px", fontSize:"30px"}} maxLength={1} name='otp5' value={otp.otp5} onChange={(event) => {
          changeOtp(event);
          nextSibling(event);
        }} onKeyDown={(event)=>{
          if (event.key === "Backspace" && event.target.value === "") {
            event.preventDefault();
            event.target.previousElementSibling?.focus();
          }
        }}></input>
        <input style={{height:"50px", width:"50px", padding:"15px", margin:"10px", fontSize:"30px"}} maxLength={1} name='otp6' value={otp.otp6} onChange={(event) => {
          changeOtp(event);
          nextSibling(event);
        }} onKeyDown={(event)=>{
          if (event.key === "Backspace" && event.target.value === "") {
            event.preventDefault();
            event.target.previousElementSibling?.focus();
          }
        }}></input>

        <p>OTP :- {otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5 + otp.otp6}</p>

      </div>
    </div>
  );
}
