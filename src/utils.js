export const formatCurrency = (value, currency) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return currencyFormatter.format(value);
};

export const tipOptions = [5, 10, 15, 25, 50];

export const currencyOptions = ["USD", "CAD", "EUR"];
