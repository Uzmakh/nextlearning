import React from 'react'
import { useState } from 'react';

const FormEvents = () => {
    const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`)
  }
  return (
    <div>
       {/* Form Event */}
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} placeholder="Enter your name"
            onChange={(e)=>setInputValue(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormEvents
