export const calculateKdvAmount = (price: string, rate: string): string => {
  if (!price || !rate) return '';
  const basePrice = Number(price);
  const kdvRate = Number(rate);
  if (isNaN(basePrice) || isNaN(kdvRate)) return '';
  return ((basePrice * kdvRate) / 100).toFixed(2);
};

export const calculateWithKdv = (price: string, rate: string): string => {
  if (!price || !rate) return '';
  const basePrice = Number(price);
  const kdvRate = Number(rate);
  if (isNaN(basePrice) || isNaN(kdvRate)) return '';
  return (basePrice * (1 + kdvRate / 100)).toFixed(2);
};

export const calculateWithoutKdv = (priceWithKdv: string, rate: string): string => {
  if (!priceWithKdv || !rate) return '';
  const totalPrice = Number(priceWithKdv);
  const kdvRate = Number(rate);
  if (isNaN(totalPrice) || isNaN(kdvRate)) return '';
  return (totalPrice / (1 + kdvRate / 100)).toFixed(2);
};