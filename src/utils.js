const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (value) => currencyFormatter.format(value);

export const tipOptions = [5, 10, 15, 25, 50];
