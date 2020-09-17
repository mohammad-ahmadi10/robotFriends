import React from 'react';

const SearchBox = ({onSearchChange}) => {

    return (
        <div>
            <input 
            className="i ba tc b-green pa3 bg-light-blue " 
            type="search" 
            placeholder="search your Robot" 
            onChange={onSearchChange}/>

        </div>
    );
}


export default SearchBox
