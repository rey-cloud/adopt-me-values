import TradeContainer from "./TradeContainer";
import "./App.css";
import Create from "./admin/Create";

function App() {
  if (window.location.pathname === "/create") {
    return <Create />;
  } else {
    return (
      <div className="main">
        <TradeContainer count="10" />
        <div>20</div>
        <TradeContainer />
      </div>
    );
  }
}

export default App;
