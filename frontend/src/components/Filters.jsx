// src/components/Filters.jsx
import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <h3>Категории</h3>
      <div className="filter-group">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Смесители
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Душевые системы
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Раковины
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Санфаянс
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Ванны
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Аксессуары
        </label>
      </div>

      <h3>Бренды</h3>
      <div className="filter-group">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Grohe
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Hansgrohe
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Idro
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Vidima
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Lemark
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Jacob
        </label>

        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Oras
        </label>
      </div>
    </div>
  );
};

export default Filters;