import React from "react";
import Home from "./components/Home/Home";
import { Provider } from "./context/theme-Context";
import "./App.scss";
import {Routes,Route} from "react-router-dom"
import About from "./components/About/About";


function App() {
  return (
    <>
      <Provider>
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/about" element={<About/>} />
        </Routes>
      </Provider>
    </>
      
  );
}

export default App;
