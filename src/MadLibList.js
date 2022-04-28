import React, { useState } from "react";
// import { v4 as uuid } from 'uuid';
import Madlib from "./Madlib"
import NewMadLibForm from "./NewMadLibForm";
import './MadLibList.css';


const MadLibList = () => {
  const INITIAL_STATE = [
    // { noun: 'dog', noun2: 'cat', adjective: 'pretty', color: 'purple' }
  ]
  const [items, setItems] = useState(INITIAL_STATE);
  const addItem = (noun, noun2, adjective, color) => {
    setItems(items => [...items, { noun, noun2, adjective, color }])
  }
  return (
    <div className="card">
      <h1>Madlibs!</h1>
      <NewMadLibForm addItem={addItem} />
      <div>
        {items.map(({ noun, noun2, adjective, color }) => <Madlib noun={noun} noun2={noun2} adjective={adjective} color={color} />)}
      </div>

    </div>
  )

}

export default MadLibList;


