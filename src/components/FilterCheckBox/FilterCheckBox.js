import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input class="filter-checkbox__invisible" type="checkbox" />
        <span class="filter-checkbox__slider" />
      </label>
      <p className="filter-checkbox__description">Короткометражки</p>
    </div>
  );
}

export default FilterCheckBox;
