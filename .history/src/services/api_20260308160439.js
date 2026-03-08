const BASE_URL = "https://apiqsp-production.up.railway.app";

export const getCategorias = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  if (!res.ok) throw new Error("Error al cargar categorías");
  return res.json();
};

export const getComidas = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Error al cargar comidas");
  return res.json();
};
export const getProductsByCategory = async (categoryId) => {
  const res = await fetch(`${BASE_URL}/products/category/${categoryId}`);
  if (!res.ok) throw new Error("Error al cargar productos de la categoría");
  return res.json();
};