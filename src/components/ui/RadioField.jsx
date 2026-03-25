import React from "react";

const RadioField = ({ label, name, options, selected, onChange }) => (
    <div className="mb-3">
        <label className="form-label d-block">{label}</label>
        {options.map((opt) => (
            <div className="form-check form-check-inline" key={opt.value}>
                <input
                    className="form-check-input"
                    type="radio"
                    name={name}
                    value={opt.value}
                    checked={selected === opt.value}
                    onChange={onChange}
                />
                <label className="form-check-label">{opt.label}</label>
            </div>
        ))}
    </div>
);

export default RadioField;