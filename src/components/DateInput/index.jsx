import { useState, useEffect } from "react";
import './dateInput.css';

const DateInput = ({
  label = 'Select Date',
  minDate = '',
  maxDate = '',
  onDateChange,
  value
}) => {
  const [date, setDate] = useState("");

  const convertToDisplayDate = (inputDate) => {
    const [day, month, year] = inputDate.split("-");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if(value) {
      setDate(convertToDisplayDate(value));
    }
  }, [value]);

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    const formattedDate = convertToDisplayDate(inputDate);
    setDate(inputDate);
    if(onDateChange) {
      onDateChange(formattedDate);
    }
  };

  return (
    <div className="date-input-container">
      {label && <label className="date-label">{label}</label>}
      <input 
        type="date"
        className="date-input"
        value={date}
        onChange={handleDateChange}
        min={minDate}
        max={maxDate}
      />
    </div>
  )
};

export default DateInput;