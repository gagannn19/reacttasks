import TaskInfo from '../../components/TaskInfo.jsx';
import { useMemo, useState } from 'react';

const description = "Combine a search box and a sort control operating on the same list.";

const requirements = [
  "Filtering and sorting both apply to the same source array",
  "Order of operations should not matter (filter then sort)",
  "Use useMemo to avoid recomputing needlessly (bonus)"
];

export default function SearchSortCombined() {

  const productsList = [
    "Pen",
    "Copy",
    "Jeans",
    "Bat",
    "Protein",
    "Creatine"
  ];

  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("As it is");

  const copyList = useMemo(() => {

    let result = productsList.filter(product =>
      product.toLowerCase().includes(search.toLowerCase())
    );

    if (sorting === "Ascending") {
      result = [...result].sort((a, b) =>
        a.localeCompare(b)
      );
    }
    else if (sorting === "Descending") {
      result = [...result].sort((a, b) =>
        b.localeCompare(a)
      );
    }

    return result;

  }, [search, sorting]);

  return (
    <div className="task-page">
      <TaskInfo
        title="Search + Sort Combined"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/search-sort-combined.jsx"]}
      />

      <div className="task-workspace">

        <label style={{ margin: "10px" }}>
          Search Your Product :-
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <label style={{ margin: "10px" }}>
          Choose Sorting :-
          <select
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
          >
            <option>As it is</option>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </label>

        <div
          style={{
            border: "1px solid white",
            margin: "20px",
            padding: "25px"
          }}
        >
          {copyList.map((product, index) => (
            <p key={index}>{product}</p>
          ))}
        </div>

      </div>
    </div>
  );
}