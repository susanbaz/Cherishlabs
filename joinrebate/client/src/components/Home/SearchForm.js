import React, { useState } from 'react';

function SearchForm() {
  // State to control the visibility of the search form
  const [showSearchForm, setShowSearchForm] = useState(false);

  // Function to toggle the visibility of the search form
  const toggleSearchForm = () => {
    setShowSearchForm(!showSearchForm);
  };

  // CSS classes to conditionally apply to elements
  const searchIconClass = `flaticon-search-2 ${showSearchForm ? 'active' : ''}`;
  const searchFormClass = `hb_search_form ${showSearchForm ? 'open_form' : ''}`;

  return (
    <li className={`hb_search_wrapper ${showSearchForm ? 'open_form' : ''}`}>
      <a href="#" className="hb_search_icon" onClick={toggleSearchForm}>
        <i className={searchIconClass}></i>
      </a>
      <div className={searchFormClass}>
        <form>
          <input
            type="text"
            className="form-control hb_search"
            placeholder="Search.."
          />
        </form>
      </div>
    </li>
  );
}

export default SearchForm;
