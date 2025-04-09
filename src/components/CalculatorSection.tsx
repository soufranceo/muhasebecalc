import React from 'react';

interface CalculatorSectionProps {
  title: string;
  children: React.ReactNode;
}

export function CalculatorSection({ title, children }: CalculatorSectionProps) {
  return (
    <div className="calculator-section bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-blue-900 mb-4">{title}</h2>
      <div className="bg-blue-50/50 rounded-lg p-3 sm:p-4">
        {children}
      </div>
    </div>
  );
}