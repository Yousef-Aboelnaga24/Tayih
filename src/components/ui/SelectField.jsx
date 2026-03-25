import React from "react";

const SelectField = ({ label, value, onChange, options, required }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <select className="form-select" value={value} onChange={onChange} required={required}>
      <option value="">اختر {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default SelectField;