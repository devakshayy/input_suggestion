import React, { useState } from 'react'

const Autocompelemine = ({suggestions}) => {

    const [inputValue, setInputValue] = useState('');
    const [filteredSuggest, setFilteredSuggest] = useState([]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        
        if(!inputValue.trim()){
          setFilteredSuggest([])
          return
        }
        const filteredSuggest = suggestions.filter(suggestion=> 
          suggestion.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredSuggest(filteredSuggest);
        console.log(filteredSuggest);
    }
    const handleSelect =(value) => {
       setInputValue(value);
       setFilteredSuggest([])
    }
    return( 
        <>
           <div className='bg-gray-400 h-screen w-screen flex justify-center p-10 overflow-auto' >
                <div className='relative'>
                    <input
                     value={inputValue}
                     onChange={handleChange}
                     className='p-1 text-sm outline-none rounded-md'
                     placeholder='Search items...'
                     type="text" />
                     <ul className='bg-white absolute w-full rounded-md mt-[1px] '>
                       {filteredSuggest.map((suggestion,idx) => (
                         <li 
                            onClick={()=>handleSelect(suggestion)}
                            key={idx} 
                            className='p-1 cursor-pointer border rounded-md hover:bg-slate-300'>
                              {suggestion}
                         </li>
                       ))}
                     </ul>
                </div>
           </div>
        </>
    );
}

export default Autocompelemine
