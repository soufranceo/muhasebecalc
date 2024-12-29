import React from 'react';
import { CalculatorHeader } from './components/CalculatorHeader';
import { KdvCalculator } from './components/KdvCalculator';
import { PercentageCalculator } from './components/PercentageCalculator';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <div className="max-w-3xl mx-auto w-full p-6">
        <CalculatorHeader />
        <KdvCalculator />
        <PercentageCalculator />
      </div>
      <Footer />
    </div>
  );
}