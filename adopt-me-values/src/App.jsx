import TradeContainer from "./TradeContainer";
import "./App.css";
import Create from "./admin/Create";
import { useEffect, useState } from "react";

function App() {
  const [leftVal, setLeftVal] = useState(0);
  const [rightVal, setRightVal] = useState(0);
  const [difference, setDifference] = useState(0);
  const [pets, setPets] = useState([]);
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("All Pets: ", data);
        setPets(data);
        setAllPets(data);
      });
  }, [setPets]);

  useEffect(() => {
    setDifference(rightVal - leftVal);
  }, [leftVal, rightVal]);

  useEffect(() => {
    console.log(difference);
  }, [difference]);

  if (window.location.pathname === "/create") {
    return (
      <Create
        pets={pets}
        setPets={setPets}
        allPets={allPets}
        setAllPets={setAllPets}
      />
    );
  } else {
    return (
      <>
        <progress className="progress-bar" value={0.2} max={1}></progress>
        <div className="main">
          <div className="trade-container">
            <div className="total-value-left">{leftVal.toFixed(2)}</div>
            <TradeContainer
              value={leftVal}
              setValue={setLeftVal}
              pets={pets}
              setPets={setPets}
              allPets={allPets}
              setAllPets={setAllPets}
            />
          </div>
          <div className="difference">{difference.toFixed(2)}</div>

          <div className="trade-container">
            <div className="total-value-right">{rightVal.toFixed(2)}</div>
            <TradeContainer
              value={rightVal}
              setValue={setRightVal}
              pets={pets}
              setPets={setPets}
              allPets={allPets}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
