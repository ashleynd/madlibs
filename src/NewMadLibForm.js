import React, { useState } from "react";
// import Madlib from "./Madlib";

const NewMadLibForm = ({ addItem }) => {
    const INITIAL_STATE = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData.noun, formData.noun2, formData.adjective, formData.color);
        setFormData(INITIAL_STATE);
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const {noun, noun2, adjective, color} = formData;
    //     alert(`The words inputted are ${noun} ${noun2} ${adjective} and ${color}`)
    //     setFormData(INITIAL_STATE);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <p>
            <label htmlFor="noun"></label>
            <input 
            id="noun"
            type="text" 
            name="noun" 
            placeholder="Noun" 
            value={formData.noun} 
            onChange={handleChange} 
            required
            />
            </p>
            <p>
            <label htmlFor="noun2"></label>
            <input 
            id="noun2"
            type="text" 
            name="noun2" 
            placeholder="Noun 2" 
            value={formData.noun2} 
            onChange={handleChange} 
            required
            />
            </p>
            <p>
            <label htmlFor="adjective"></label>
            <input 
            id="adjective"
            type="text" 
            name="adjective" 
            placeholder="Adjective" 
            value={formData.adjective} 
            onChange={handleChange} 
            required
            />
            </p>
            <p>
            <label htmlFor="color"></label>
            <input 
            id="color"
            type="text" 
            name="color" 
            placeholder="Color" 
            value={formData.color} 
            onChange={handleChange} 
            required
            />
            </p>
            
            <button>Get Story</button>
        </form>
  
    )
}

export default NewMadLibForm;

