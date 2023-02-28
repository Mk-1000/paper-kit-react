import React from 'react';

const RadioInput = ({ name, value, onChange, checked, label }) => {
  return (
    <div className="form-check form-check-radio">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        All Channel
        {label}
        <span className="form-check-sign"></span>
      </label>
    </div>
  );
};

export default RadioInput;
