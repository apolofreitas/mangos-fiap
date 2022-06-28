export const formatNumberAsCurrency = (number: number): string => {
  const numberFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return numberFormat.format(number);
};
