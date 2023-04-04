import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1>Welcome to nextPage!</h1> */}
      <Outlet />
    </div>
  );
}

export default App;
