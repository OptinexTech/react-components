import './radioGroup.css';

const RadioGroup = ({
  options,
  name,
  selectedValue,
  onChange,
  direction = 'vertical',
  color = '#333',
  fontSize = '16px',
  radioColor = '#3171DE',
  radioSize = '16px'
}) => {
  return (
    <div className={`radio-group ${direction}`}>
      {options.map((option, index) => (
        <label key={index} className='radio-label' style={{ fontSize, color }}>
          <input 
            type='radio'
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            style={{
              width: radioSize,
              height: radioSize,
              accentColor: radioColor
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  )
};

export default RadioGroup;