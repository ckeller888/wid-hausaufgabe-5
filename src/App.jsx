import "./App.css";
import { useState } from "react";
import data from "./tableData.json";
import { Titelleiste } from "./Titelleiste";
import { Tabelle } from "./Tabelle";

function App() {
  const anbieter_roh = data.map((element) => element.anbieter);
  const anbieter_sort = anbieter_roh.sort();
  const anbieterOptions = [];
  for (let i = 0; i < anbieter_sort.length - 1; i++) {
    if (anbieter_sort[i] !== anbieter_sort[i - 1]) {
      anbieterOptions.push(anbieter_sort[i]);
    }
  }

  const diensteSort = data.map((element) => element.service).sort();
  const diensteOptions = [];
  for (let i = 0; i < diensteSort.length - 1; i++) {
    if (diensteSort[i] !== diensteSort[i - 1]) {
      diensteOptions.push(diensteSort[i]);
    }
  }

  const [anbieter, setAnbieter] = useState("");
  const [dienste, setDienste] = useState("");

  const incrementAnbieter = (event) => {
    setAnbieter(event.target.value);
  };

  const incrementDienste = (event) => {
    setDienste(event.target.value);
  };

  const incrementResetAnbieter = () => {
    setAnbieter("");
  };

  const incrementResetDienste = () => {
    setDienste("");
  };

  console.log("Anbieter Options: ", anbieterOptions);
  console.log("Dienste Options: ", diensteOptions);
  console.log(incrementAnbieter);
  console.log(dienste);

  const filtered_data = data
    .filter((e) => (anbieter ? e["anbieter"] === anbieter : true))
    .filter((e) => (dienste ? e["service"] === dienste : true));

  return (
    <div className="App">
      <div>
        <Titelleiste
          anbieterLabel="Alle Anbieter"
          diensteLabel="Alle Dienste"
          anbieterOptions={anbieterOptions}
          diensteOptions={diensteOptions}
          anbieterValue={anbieter}
          diensteValue={dienste}
          incrementAnbieter={incrementAnbieter}
          incrementDienste={incrementDienste}
          incrementResetAnbieter={incrementResetAnbieter}
          incrementResetDienste={incrementResetDienste}
        />
      </div>
      <div>
        <Tabelle data={filtered_data} />
      </div>
    </div>
  );
}

export default App;
