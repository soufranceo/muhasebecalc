import React, { useState } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { NumberInput } from './NumberInput';
import { ResultDisplay } from './ResultDisplay';
import { calculateKdvAmount, calculateWithKdv, calculateWithoutKdv } from '../utils/kdvCalculations';

export function KdvCalculator() {
  const [price, setPrice] = useState('');
  const [kdvRate, setKdvRate] = useState('18');

  const kdvAmount = calculateKdvAmount(price, kdvRate);
  const totalWithKdv = calculateWithKdv(price, kdvRate);
  const priceWithoutKdv = calculateWithoutKdv(price, kdvRate);

  return (
    <CalculatorSection title="KDV Hesaplama">
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <NumberInput
            value={price}
            onChange={setPrice}
            placeholder="Tutar"
          />
          <NumberInput
            value={kdvRate}
            onChange={setKdvRate}
            placeholder="KDV %"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ResultDisplay label="KDV Tutarı" value={kdvAmount} suffix=" ₺" />
          <ResultDisplay label="KDV Dahil" value={totalWithKdv} suffix=" ₺" />
          <ResultDisplay label="KDV Hariç" value={priceWithoutKdv} suffix=" ₺" />
        </div>
      </div>
    </CalculatorSection>
  );
}