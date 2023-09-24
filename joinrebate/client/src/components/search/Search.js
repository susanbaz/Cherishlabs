import React, { useState } from 'react';

function Search() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchProducts = (query) => {
    fetch(`/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response data is an array of products
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error searching products:', error);
      });
  };

  const handleSearchButtonClick = () => {
    searchProducts(searchQuery);
  };

  return (
    <div className="widget widget_product_search">
      <form className="hb_product_search">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search.."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <button className="hb_btn" onClick={handleSearchButtonClick}>
          <i className="flaticon-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
