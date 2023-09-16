import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox() {
  return (
    <form className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input className="filter-checkbox__invisible" type="checkbox" />
        <span className="filter-checkbox__slider" />
      </label>
      <p className="filter-checkbox__description">Короткометражки</p>
    </form>
  );
}

export default FilterCheckBox;
