import "./App.css";
import Display from "./component/Display";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Display />} exact />
        <Route  path="/Disp/:id" element={<Display/>} exact/>
        <Route path="*" element={<Display />} exact />
      </Routes>
    </>
  );
}

export default App;
