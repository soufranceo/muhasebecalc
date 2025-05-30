import React from 'react';

interface ResultDisplayProps {
  label: string;
  value: string;
  suffix?: string;
}

export function ResultDisplay({ label, value, suffix = '' }: ResultDisplayProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 hover:shadow-md transition-all duration-300" style={{ animation: 'slideIn 0.3s ease-out' }}>
      <p className="text-sm text-blue-700 mb-1">{label}</p>
      <p className="text-lg font-semibold text-right">
        {value}{suffix}
      </p>
    </div>
  );
}