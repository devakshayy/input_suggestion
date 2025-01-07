import React, { useState } from 'react';
import './style.css';

const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Filter suggestions based on input value
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
  };

  return (
    <div className="autocomplete-container">
      <input
        className="autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      <ul className="autocomplete-suggestions">
        {filteredSuggestions.map((filteredSuggestion, index) => (
          <li key={index} className="autocomplete-suggestion" onClick={() => handleSelect(filteredSuggestion)}>
            {filteredSuggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;