import React from 'react';

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export function NumberInput({ value, onChange, placeholder, className = "flex-1" }: NumberInputProps) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`calculator-input ${className}`}
      placeholder={placeholder}
    />
  );
}