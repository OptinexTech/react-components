import './checkbox.css';

const Checkbox = ({ label, isChecked, onChange, customStyles = {} }) => {
  return (
    <label className="checkbox-container" style={customStyles.container}>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="custom-checkbox"
        style={customStyles.input}
      />
      <span className="checkmark" style={customStyles.checkmark}></span>
      {label && (
        <span className="label-text" style={customStyles.label}>{label}</span>
      )}
    </label>
  )
};

export default Checkbox;