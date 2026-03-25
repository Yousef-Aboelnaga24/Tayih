import React from "react";

const InputField = ({ label, type = "text", value, onChange, placeholder, maxLength, required }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      required={required}
    />
  </div>
);

export default InputField;