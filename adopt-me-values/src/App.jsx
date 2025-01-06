import TradeContainer from "./TradeContainer";
import "./App.css";
import Create from "./admin/Create";
import { useEffect, useState } from "react";

function App() {
  const [leftVal, setLeftVal] = useState(0);
  const [rightVal, setRightVal] = useState(0);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    setDifference(rightVal - leftVal);
  }, [leftVal, rightVal]);

  useEffect(() => {
    console.log(difference);
  }, [difference]);

  if (window.location.pathname === "/create") {
    return <Create />;
  } else {
    return (
      <>
        <progress className="progress-bar" value={0.2} max={1}></progress>
        <div className="main">
          <div className="trade-container">
            <div className="total-value-left">{leftVal.toFixed(2)}</div>
            <TradeContainer value={leftVal} setValue={setLeftVal} />
          </div>
          <div className="difference">{difference.toFixed(2)}</div>

          <div className="trade-container">
            <div className="total-value-right">{rightVal.toFixed(2)}</div>
            <TradeContainer value={rightVal} setValue={setRightVal} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
