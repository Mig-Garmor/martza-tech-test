export const getProducts = async (rowsPerPage, skipNumber) => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${rowsPerPage}&skip=${skipNumber}`
  );
  const result = await response.json();
  return result;
};

export const getProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await response.json();
  return result;
};

export const getUserAuth = async () => {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
    }),
  }).then((res) => res.json());
};

export const getDataBySearch = async (text) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${text}&limit=10`
  );
  const result = await response.json();
  return result;
};

export const getProductCategories = async () => {
  const response = await fetch(`https://dummyjson.com/products/categories`);
  const result = await response.json();
  return result;
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const result = await response.json();
  return result;
};
