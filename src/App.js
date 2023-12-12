import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebLogin from "./WebLogin";
import JoinUs from "./JoinUs";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
      <Routes>
        <Route path="/WebLogin" element={<WebLogin isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}/>
        <Route path="/JoinUs" element={<JoinUs isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
