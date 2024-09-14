import { useEffect } from 'react';
import './toast.css';

const Toast = ({
  message,
  type,
  onClose,
  duration
}) => {
  useEffect(() => {
    //Auto-dismiss toast after specified duration
    const timer = setTimeout(() => {
      onClose();
    }, duration || 3000);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast ${type}`}>
      {message}
      <button className="toastClose" onClick={onClose}>x</button>
    </div>
  )
};

export default Toast;