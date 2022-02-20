import React, {useState, useEffect} from "react";
import Datatable from "./datatable/index";

require("es6-promise").polyfill();
require("isomorphic-fetch");


export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then((json) => setData(json));
  }, [])

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);    
    return rows.filter((row) =>
      columns.some(
        (column) => 
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  return (
    <div>
      <div>
        <h1>Search bar</h1>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>  
    </div>
  )
};
