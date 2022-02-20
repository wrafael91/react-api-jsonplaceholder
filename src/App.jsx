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

  return <div>
    <div>filter goes here</div>
    <div><Datatable data={data}/></div>
  </div>;
}
