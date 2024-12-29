import React, { useState } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { NumberInput } from './NumberInput';
import { ResultDisplay } from './ResultDisplay';
import {
  calculatePercentageOf,
  calculateWhatPercentage,
  calculatePercentageChange,
  calculateIncreaseDecrease,
} from '../utils/calculations';

export function PercentageCalculator() {
  const [percentageOf, setPercentageOf] = useState({ number: '', percentage: '' });
  const [whatPercentage, setWhatPercentage] = useState({ number1: '', number2: '' });
  const [percentageChange, setPercentageChange] = useState({ from: '', to: '' });
  const [increaseDecrease, setIncreaseDecrease] = useState({ 
    number: '', 
    percentage: '', 
    operation: 'increase' as const 
  });

  return (
    <div className="space-y-6">
      <CalculatorSection title="Bir Sayının Yüzdesini Hesapla">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <NumberInput
            value={percentageOf.number}
            onChange={(value) => setPercentageOf({ ...percentageOf, number: value })}
            placeholder="Sayı"
          />
          <NumberInput
            value={percentageOf.percentage}
            onChange={(value) => setPercentageOf({ ...percentageOf, percentage: value })}
            placeholder="%"
          />
          <ResultDisplay 
            label="Sonuç"
            value={calculatePercentageOf(percentageOf.number, percentageOf.percentage)} 
          />
        </div>
      </CalculatorSection>

      <CalculatorSection title="Yüzde Oranı Hesapla">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <NumberInput
            value={whatPercentage.number1}
            onChange={(value) => setWhatPercentage({ ...whatPercentage, number1: value })}
            placeholder="1. Sayı"
          />
          <NumberInput
            value={whatPercentage.number2}
            onChange={(value) => setWhatPercentage({ ...whatPercentage, number2: value })}
            placeholder="2. Sayı"
          />
          <ResultDisplay 
            label="Sonuç"
            value={calculateWhatPercentage(whatPercentage.number1, whatPercentage.number2)} 
            suffix="%" 
          />
        </div>
      </CalculatorSection>

      <CalculatorSection title="Yüzde Değişimi">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <NumberInput
            value={percentageChange.from}
            onChange={(value) => setPercentageChange({ ...percentageChange, from: value })}
            placeholder="İlk değer"
          />
          <NumberInput
            value={percentageChange.to}
            onChange={(value) => setPercentageChange({ ...percentageChange, to: value })}
            placeholder="Son değer"
          />
          <ResultDisplay 
            label="Değişim"
            value={calculatePercentageChange(percentageChange.from, percentageChange.to)} 
            suffix="%" 
          />
        </div>
      </CalculatorSection>

      <CalculatorSection title="Artır/Azalt">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
          <NumberInput
            value={increaseDecrease.number}
            onChange={(value) => setIncreaseDecrease({ ...increaseDecrease, number: value })}
            placeholder="Sayı"
          />
          <NumberInput
            value={increaseDecrease.percentage}
            onChange={(value) => setIncreaseDecrease({ ...increaseDecrease, percentage: value })}
            placeholder="%"
          />
          <select
            value={increaseDecrease.operation}
            onChange={(e) => setIncreaseDecrease({ 
              ...increaseDecrease, 
              operation: e.target.value as 'increase' | 'decrease' 
            })}
            className="p-3 border border-blue-200 rounded-lg bg-white/80 
                     focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none
                     transition-all duration-200"
          >
            <option value="increase">Artır</option>
            <option value="decrease">Azalt</option>
          </select>
          <ResultDisplay 
            label="Sonuç"
            value={calculateIncreaseDecrease(
              increaseDecrease.number, 
              increaseDecrease.percentage, 
              increaseDecrease.operation
            )} 
          />
        </div>
      </CalculatorSection>
    </div>
  );
}