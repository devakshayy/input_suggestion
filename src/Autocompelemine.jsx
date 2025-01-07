import React, { useState } from 'react'

const Autocompelemine = ({suggestions}) => {

    const [inputValue, setInputValue] = useState('');
    const [fileredSuggestions, setFilteredSuggestions] = useState([])

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        
        if (!value.trim()) {
            setFilteredSuggestions([]);
            return;
          }

        console.log(inputValue);
       
        const fileredSuggestions = suggestions.filter(suggestion =>
         suggestion.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredSuggestions(fileredSuggestions);
        
    }
    const handleSelect = (value) => {
        setInputValue(value)
        setFilteredSuggestions([])
    }
  
  return (
    <div className='flex flex-col items-center gap-5 w-screen p-4 h-screen bg-gray-400'>
         <h1 className='text-3xl'>Autocomplete Example</h1>
          <div className='relative'>
             <input
                 value={inputValue}
                 onChange={handleChange}
                 className='p-1 rounded-md outline-none'
                 placeholder='Search items....'
                 type="text" 
                 />
            <ul className='w-[100%] bg-white absolute rounded-md '>
               {fileredSuggestions.map((suggestion,idx) => (
                 <li key={idx} onClick={() => handleSelect(suggestion)} className='p-1 border rounded-md' >{suggestion}</li>
               ))}
            </ul>
          </div>
    </div>
  )
}

export default Autocompelemine
