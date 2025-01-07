import React, { useState } from 'react';

const AutocompleteExample = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // For keyboard navigation

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value.trim()) {
      setFilteredSuggestions([]);
      return;
    }

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    setActiveIndex(-1); // Reset active index
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      handleSelect(filteredSuggestions[activeIndex]);
    } else if (e.key === 'Escape') {
      setFilteredSuggestions([]);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 w-screen p-4 h-screen bg-gray-400">
      <h1 className="text-3xl">Autocomplete Example</h1>
      <div className="relative">
        <input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="p-1 rounded-md outline-none"
          placeholder="Search items..."
          type="text"
        />
        {filteredSuggestions.length > 0 && (
          <ul
            className="w-full bg-white absolute rounded-md shadow-md"
            role="listbox"
          >
            {filteredSuggestions.map((suggestion, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(suggestion)}
                className={`p-1 border rounded-md cursor-pointer ${
                  idx === activeIndex ? 'bg-gray-300' : ''
                }`}
                role="option"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutocompleteExample;
