const RadioField = ({ label, name, options, selected, onChange }) => {
    return (
        <div className="mb-3">
            <span className="form-label d-block">{label}</span>

            {options.map((opt, index) => {
                const id = `${name}-${index}`;
                const isChecked = selected === opt.value;

                return (
                    <div className="form-check form-check-inline" key={opt.value}>
                        <input
                            id={id}
                            className="form-check-input"
                            type="radio"
                            name={name}
                            value={opt.value}
                            checked={isChecked}
                            onChange={() => onChange(opt.value)}
                        />

                        <label htmlFor={id} className="form-check-label">
                            {opt.label}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default RadioField;