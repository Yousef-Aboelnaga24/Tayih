const inputClasses =
  "w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors outline-none shadow-sm";

const labelClasses = "block mb-2 text-sm font-bold text-gray-700";

const SelectField = ({ label, value, onChange, options, required }) => (
  <div className="mb-3">
    <label className={labelClasses}>{label}</label>
    <select className={inputClasses} value={value} onChange={onChange} required={required}>
      <option value="">اختر {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default SelectField;