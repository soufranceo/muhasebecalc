import React from 'react';

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export function NumberInput({ value, onChange, placeholder, className = "flex-1" }: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    // Replace comma with period for decimal numbers
    newValue = newValue.replace(',', '.');
    
    // Validate if it's a valid number
    if (newValue === '' || !isNaN(Number(newValue))) {
      onChange(newValue);
    }
  };

  // Format display value (replace period with comma for display)
  const displayValue = value.replace('.', ',');

  return (
    <input
      type="text"
      inputMode="decimal"
      value={displayValue}
      onChange={handleChange}
      className={`calculator-input hover:shadow-md ${className}`}
      placeholder={placeholder}
      style={{ animation: `fadeIn 0.3s ease-out` }}
    />
  );
}