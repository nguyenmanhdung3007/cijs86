import React from 'react';
import './YearSelected.css';

const YearSelected = () => {
    const year = ['2020','2021','2022'];
    const changeHandler = (event) => {
        console.log('-', event.target.value) ;
    }
    return (
        <div>
            <select className='filter_select' onChange={changeHandler}>
            {year.map((option, index) => {
                return <option key={index} >
                    {option}
                </option>
            })}
            </select>
        </div>
    );
};

export default YearSelected;