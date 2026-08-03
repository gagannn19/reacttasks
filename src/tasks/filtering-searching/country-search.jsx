import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Search a hardcoded list of countries by name.";

const requirements = [
  "Seed at least 15-20 sample countries",
  "Filter as the user types",
  "Show a flag emoji or code next to each result (bonus)"
];
import { useMemo, useState } from 'react';

export default function CountrySearch() {

  const countries = [
    { name: "India", flag: "🇮🇳", code: "IN" },
    { name: "United States", flag: "🇺🇸", code: "US" },
    { name: "Canada", flag: "🇨🇦", code: "CA" },
    { name: "United Kingdom", flag: "🇬🇧", code: "GB" },
    { name: "Australia", flag: "🇦🇺", code: "AU" },
    { name: "Germany", flag: "🇩🇪", code: "DE" },
    { name: "France", flag: "🇫🇷", code: "FR" },
    { name: "Japan", flag: "🇯🇵", code: "JP" },
    { name: "China", flag: "🇨🇳", code: "CN" },
    { name: "Brazil", flag: "🇧🇷", code: "BR" },
    { name: "Russia", flag: "🇷🇺", code: "RU" },
    { name: "South Korea", flag: "🇰🇷", code: "KR" },
    { name: "Italy", flag: "🇮🇹", code: "IT" },
    { name: "Spain", flag: "🇪🇸", code: "ES" },
    { name: "Mexico", flag: "🇲🇽", code: "MX" },
    { name: "South Africa", flag: "🇿🇦", code: "ZA" },
    { name: "New Zealand", flag: "🇳🇿", code: "NZ" },
    { name: "Singapore", flag: "🇸🇬", code: "SG" },
    { name: "United Arab Emirates", flag: "🇦🇪", code: "AE" },
    { name: "Nepal", flag: "🇳🇵", code: "NP" }
  ];
  const [countriesCopy, setCountriesCopy] = useState(countries);
  const [search, setSearch] = useState("");

  function changeSearch(event) {
    setSearch(event.target.value);
    setCountriesCopy([...countries].filter((country)=>(
      country.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    )))
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Country Search"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/filtering-searching/country-search.jsx"]}
      />
      <div className="task-workspace">

        <label>
          Search Any Country :-
          <input name='search' value={search} onChange={changeSearch}></input>
        </label>

        <div>
          {countriesCopy.map((country, index)=>(
            <div style={{display : "flex", flexDirection : "row", gap : "20px"}}>
              <p>{country.flag}</p>
              <p>{country.name}{`(${country.code})`}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
