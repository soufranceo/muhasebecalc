import React from 'react';
import { CalculatorHeader } from './components/CalculatorHeader';
import { KdvCalculator } from './components/KdvCalculator';
import { PercentageCalculator } from './components/PercentageCalculator';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 animate-[neonPulse_4s_ease-in-out_infinite]" />
      <div className="relative max-w-3xl mx-auto w-full p-6">
        <CalculatorHeader />
        <KdvCalculator />
        <PercentageCalculator />
      </div>
      <Footer />
    </div>
  );
}