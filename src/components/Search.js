import React, {useState, useEffect} from "react";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    onSearch(query)
  };
 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
               value={searchQuery}
               onChange={handleSearch}
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
