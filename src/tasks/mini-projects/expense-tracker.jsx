import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Track income/expenses with a running balance and a transaction list.";

const requirements = [
  "Add a transaction with a description, amount, and type (income/expense)",
  "Show a running total/balance",
  "Remove a transaction",
  "Consider splitting into TransactionForm + TransactionList + Balance components"
];
import { useState } from 'react';

export default function ExpenseTracker() {
  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)
  return (
    <div className="task-page">
      <TaskInfo
        title="Expense Tracker"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/mini-projects/expense-tracker.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: build "Expense Tracker" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
