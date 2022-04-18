import React, { useEffect, useState } from 'react'
import Units from '../units/units';

const Search = ({ filteredUnits, setFilteredUnits, searchQuery, setSearchQuery, units }) => {
    const [ items, setItems ] = useState([]);

    const filterUnits = (event) => {
        // TODO: Add regex;
        setSearchQuery(event.target.value);
        const cleanedList = units.filter(u => u.name.toLowerCase().includes(event.target.value.toLowerCase()));
        // setFilteredUnits([]);
        setFilteredUnits(cleanedList);
    }

    useEffect(() => {
        setItems(filteredUnits)
    }, [])

  return (
      <>
        <input
            type='text'
            placeholder='search...'
            onChange={filterUnits}
            value={searchQuery}
        />
      </>
  )
}

export default Search