export const formatCurrency = (value) => {
  if (!value || isNaN(value)) return "$0.00";

  return Number(value).toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
  });
};
