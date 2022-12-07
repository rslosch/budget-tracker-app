import { Route, Routes } from 'react-router-dom'
import Signup from "./Signup";
import Login from "./Login";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
