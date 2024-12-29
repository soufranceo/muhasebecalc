// Calculates the percentage of a number
export const calculatePercentageOf = (number: string, percentage: string): string => {
  if (!number || !percentage) return '';
  const num = Number(number);
  const perc = Number(percentage);
  if (isNaN(num) || isNaN(perc)) return '';
  return (num * (perc / 100)).toFixed(2);
};

// Calculates what percentage one number is of another
export const calculateWhatPercentage = (number1: string, number2: string): string => {
  if (!number1 || !number2) return '';
  const num1 = Number(number1);
  const num2 = Number(number2);
  if (isNaN(num1) || isNaN(num2) || num2 === 0) return '';
  return ((num1 / num2) * 100).toFixed(2);
};

// Calculates the percentage change between two numbers
export const calculatePercentageChange = (from: string, to: string): string => {
  if (!from || !to) return '';
  const fromNum = Number(from);
  const toNum = Number(to);
  if (isNaN(fromNum) || isNaN(toNum) || fromNum === 0) return '';
  return (((toNum - fromNum) / fromNum) * 100).toFixed(2);
};

// Increases or decreases a number by a percentage
export const calculateIncreaseDecrease = (
  number: string, 
  percentage: string, 
  operation: 'increase' | 'decrease'
): string => {
  if (!number || !percentage) return '';
  const num = Number(number);
  const perc = Number(percentage);
  if (isNaN(num) || isNaN(perc)) return '';
  
  const multiplier = operation === 'increase' ? 1 + (perc / 100) : 1 - (perc / 100);
  return (num * multiplier).toFixed(2);
};