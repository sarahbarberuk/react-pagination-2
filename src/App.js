import React, { useState } from "react";
import Pagination from "./Pagination.js";

const App = (props) => {
  const people = ["Bob", "Lisa", "Anika", "Obi", "Sara"];
  const pageLimit = 2;
  const [pagePeople, setPagePeople] = useState([]);
  return (
    <div>
      <li>
        {pagePeople.map((person, i) => (
          <ul key={i}>{person}</ul>
        ))}
      </li>
      <Pagination
        items={people}
        pageLimit={pageLimit}
        setPageItems={setPagePeople}
      />
    </div>
  );
};

export default App;