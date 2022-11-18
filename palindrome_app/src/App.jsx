import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Palindrome from "./components/palindrome";

function App() {
    return (
        <div className="App">
            <h1>Palindrome App</h1>
            <Palindrome />
        </div>
    );
}

export default App;
