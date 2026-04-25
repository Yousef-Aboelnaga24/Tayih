const inputClasses =
  "w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors outline-none shadow-sm";

const labelClasses = "block mb-2 text-sm font-bold text-gray-700";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  maxLength,
  minLength,
  dir,
  required = false,
  className = "",
  extraClass = "",
  id,
}) => (
  <div className={`mb-4 ${className}`}>
    {label && <label htmlFor={id || name} className={labelClasses}>{label}</label>}
    <input
      id={id || name}
      name={name}
      type={type}
      className={`${inputClasses} ${extraClass}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      dir={dir}
    />
  </div>
);

export default InputField;