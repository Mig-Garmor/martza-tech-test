export const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "brand", label: "Brand", minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "rating",
    label: "Rating",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "stock",
    label: "Stock",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
