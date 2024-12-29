import React from 'react';
import { Calculator } from 'lucide-react';

export function CalculatorHeader() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <Calculator className="w-8 h-8 text-blue-600" />
      <h1 className="text-3xl font-bold text-blue-900">Yüzde Hesaplayıcı</h1>
    </div>
  );
}