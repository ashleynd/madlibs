import React from "react";

const Madlib = ({id, noun, noun2, adjective, color}) => {
    return (
        <div>
        <h2>The {adjective} {noun} jumped over the {color} {noun2}.</h2>
        {/* <img className="gif" alt="gif" src="https://media.giphy.com/media/fnK0jeA8vIh2QLq3IZ/giphy.gif"></img> */}
        </div>
    )
}

export default Madlib;

