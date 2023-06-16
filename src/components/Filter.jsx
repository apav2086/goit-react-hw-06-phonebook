import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/slice';

const Filter = () => {
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleFilterChange = evt => {
        dispatch(changeFilter(evt.curretTarget.value));
        };

    return (
        <div>
               <input
            type="text"
            name="filter"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </div>
    )
}
export default Filter;