import React, { useState } from 'react';
import './Room.css'

function Room() {
    let [isLit, setLit] = useState (true);
    let [age, setAge] = useState (23);
    // const one = useState (true);
    // console.log("here");
    // console.log(one);
    
    function updateLit() {
        console.log("Button Clicked");
        setLit(!isLit);
    }
    function increaseAge() {
        console.log("Age Button Clicked");
        setAge(++age);
    }
    //<div className={"room "+(isLit?"lit":"dark")}>
    return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>

        Hammad Room is Lit : {isLit? "Lit" : "Dark"}
        <br/>
        Age:{age}
        <br/>
        <button onClick={updateLit}>Toggle Light</button>
        <br/>
        <button onClick={increaseAge}>Age ++</button>

    </div>
    );
}

export default Room;
