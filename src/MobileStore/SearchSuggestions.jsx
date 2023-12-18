import React from 'react';

const SearchSuggestions = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
