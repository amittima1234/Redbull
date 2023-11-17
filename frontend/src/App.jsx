import "./App.css";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import CreateTool from "./components/CreateTool";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Table /> */}
      <CreateTool dir="rtl"/>
    </div>
  );
}

export default App;
