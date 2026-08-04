import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search FAQ questions by keyword and reveal matching answers.";

const requirements = [
  "Seed an array of {question, answer}",
  "Filter questions by matching the query",
  "Clicking a question expands/collapses its answer"
];
import { useMemo, useState } from 'react';

export default function FAQSearch() {

  const reactInterviewQuestions = [
    {
      question: "Which React topics are covered in this interview set?",
      answer: [
        "React Introduction",
        "JSX",
        "Components",
        "Props",
        "State",
        "Props vs State",
        "useState",
        "State Updates",
        "Virtual DOM",
        "Lists & Keys",
        ".map()",
        "Conditional Rendering",
        "Event Handling",
        "Controlled Components",
        "Forms",
        "event.preventDefault()",
        "useEffect",
        "useMemo",
        "useCallback",
        "React Fragment",
        "Lifting State Up",
        "Prop Drilling",
        "Context API",
        "React Router",
        "Link vs <a>",
        "useRef",
        "Immutability",
        "React.memo",
        "Reconciliation",
        "Custom Hooks",
        "Rules of Hooks",
        "npm vs npx",
        "Vite"
      ]
    },
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces using reusable components. It updates the UI efficiently using a Virtual DOM."
    },
    {
      question: "What is JSX?",
      answer:
        "JSX (JavaScript XML) is a syntax that lets you write HTML-like code inside JavaScript. It is converted into React.createElement() calls."
    },
    {
      question: "What is a component?",
      answer:
        "A component is a reusable piece of UI. Components can be functional or class-based, though functional components are preferred today."
    },
    {
      question: "What are props?",
      answer:
        "Props (properties) are read-only values passed from a parent component to a child component."
    },
    {
      question: "What is state?",
      answer:
        "State is data managed inside a component. When state changes, React re-renders the component."
    },
    {
      question: "What is the difference between props and state?",
      answer:
        "Props are passed from a parent and cannot be changed by the child. State belongs to the component and can be updated using state setters."
    },
    {
      question: "What is useState?",
      answer:
        "useState is a React Hook used to add state to functional components."
    },
    {
      question: "Why shouldn't you modify state directly?",
      answer:
        "React won't know the state changed. Always use the state setter function so React can re-render the component."
    },
    {
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a lightweight copy of the real DOM. React compares changes in the Virtual DOM and updates only the necessary parts of the real DOM."
    },
    {
      question: "Why use keys in a list?",
      answer:
        "Keys help React identify which items changed, were added, or removed, making rendering more efficient."
    },
    {
      question: "Why shouldn't array indexes be used as keys?",
      answer:
        "Indexes can cause incorrect updates if items are added, removed, or reordered. Stable unique IDs are preferred."
    },
    {
      question: "What does .map() do in React?",
      answer:
        "It transforms an array into JSX elements, commonly used to render lists."
    },
    {
      question: "What is conditional rendering?",
      answer:
        "Conditional rendering means displaying different UI based on a condition using if, ternary operators, or &&."
    },
    {
      question: "What is an event handler?",
      answer:
        "An event handler is a function that runs when an event occurs, such as clicking a button or typing in an input."
    },
    {
      question: "What is a controlled component?",
      answer:
        "A controlled component stores form input values in React state and updates them through event handlers."
    },
    {
      question: "Why use event.preventDefault()?",
      answer:
        "It prevents the browser's default behavior, such as a form submission refreshing the page."
    },
    {
      question: "What is useEffect?",
      answer:
        "useEffect is a Hook used to perform side effects like fetching data, setting timers, or subscribing to events."
    },
    {
      question: "When does useEffect run?",
      answer:
        "Without a dependency array it runs after every render. With [] it runs once after the first render. With dependencies it runs whenever those values change."
    },
    {
      question: "What is useMemo?",
      answer:
        "useMemo memoizes expensive calculations so they are only recomputed when dependencies change."
    },
    {
      question: "What is useCallback?",
      answer:
        "useCallback memoizes a function so it isn't recreated on every render unless dependencies change."
    },
    {
      question: "What is React Fragment?",
      answer:
        "A Fragment lets you group multiple elements without adding an extra DOM element."
    },
    {
      question: "What is lifting state up?",
      answer:
        "Lifting state up means moving shared state to the closest common parent so multiple components can access it."
    },
    {
      question: "What is prop drilling?",
      answer:
        "Prop drilling is passing props through multiple intermediate components just to reach a deeply nested component."
    },
    {
      question: "What is Context API?",
      answer:
        "Context API allows data to be shared across components without passing props through every level."
    },
    {
      question: "What is React Router?",
      answer:
        "React Router is a library used for navigation between pages in a React application."
    },
    {
      question: "What is the difference between Link and a tag?",
      answer:
        "Link changes routes without reloading the page, while an HTML <a> tag reloads the entire page."
    },
    {
      question: "What is the purpose of useRef?",
      answer:
        "useRef stores mutable values that don't trigger re-renders and can reference DOM elements."
    },
    {
      question: "Why is immutability important in React?",
      answer:
        "Creating new objects or arrays instead of modifying existing ones helps React detect changes correctly."
    },
    {
      question: "What is React.memo?",
      answer:
        "React.memo prevents unnecessary re-renders by memoizing a functional component when its props haven't changed."
    },
    {
      question: "What is reconciliation?",
      answer:
        "Reconciliation is React's process of comparing the old Virtual DOM with the new one to update the real DOM efficiently."
    },
    {
      question: "What is a custom Hook?",
      answer:
        "A custom Hook is a reusable JavaScript function that starts with 'use' and contains React Hook logic."
    },
    {
      question: "Why must Hooks be called at the top level?",
      answer:
        "React relies on the order of Hook calls being consistent between renders."
    },
    {
      question: "Can Hooks be used inside loops or conditions?",
      answer:
        "No. Hooks must always be called at the top level of a React component or another custom Hook."
    },
    {
      question: "What is the difference between npm and npx?",
      answer:
        "npm installs packages. npx executes packages without permanently installing them."
    },
    {
      question: "What is Vite?",
      answer:
        "Vite is a fast frontend build tool used to create React projects with quick development startup and hot module replacement."
    }
  ];
  const [copyReactQuestion, setCopyReactQuestion] = useState(reactInterviewQuestions);
  const [ques, setQues] = useState("");
  const [answer, setAnswer] = useState(-1);

  function changeQues(event) {
    const question = event.target.value;
    setQues(question);
    setCopyReactQuestion(reactInterviewQuestions.filter((questionAnswer)=>(
      questionAnswer.question.toLowerCase().includes(question.toLowerCase())
    )))
  }
  function showAnswer(index) {
    if(answer != index) {
      setAnswer(index);
    }
    else if(answer === index) {
      setAnswer(-1);
    }
  }

  
  return (
    <div className="task-page">
      <TaskInfo
        title="FAQ Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/faq-search.jsx"]}
      />
      <div className="task-workspace">
        <label>
          Enter Your Question Related to React? :-
          <input type='text' name='ques' value={ques} onChange={changeQues}></input>
        </label>

        <div>
          {ques && copyReactQuestion.map((questionAnswer,index)=>(
            <div onClick={()=>showAnswer(index)} key={index}>
              <p>{questionAnswer.question}</p>
              {answer===index && <p>{questionAnswer.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
