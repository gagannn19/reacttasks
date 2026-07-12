import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Convert an amount between two currencies using live (or mocked) exchange rates.";

const requirements = [
  "Fetch/derive exchange rates for the selected currencies",
  "Recalculate the converted amount when amount or currencies change",
  "Handle the loading/error state for the rate fetch"
];
import { useEffect, useState } from 'react';

export default function CurrencyConverter() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: run the side effect this task needs (timer, fetch, subscription...)
    // Remember to return a cleanup function if you start an interval/timeout/subscription.

    return () => {
      // TODO: cleanup here if needed
    };
  }, []);
  return (
    <div className="task-page">
      <TaskInfo
        title="Currency Converter"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/use-effect/currency-converter.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          {/* TODO: render `data` / loading / error states */}
          <p>Your code here.</p>
        </div>
      </div>
    </div>
  );
}
