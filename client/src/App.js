import Header from "./Components/Header";
import Login from "./Components/Login";
import {Routes,Route} from "react-router-dom";
import Register from "./Components/Register";

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    </Routes>
    
    </>
  );
}

export default App;
