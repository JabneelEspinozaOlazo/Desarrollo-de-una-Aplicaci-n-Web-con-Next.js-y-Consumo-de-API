import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";

async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=8");
    const data = await res.json();
    return data.products;
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "#productos" },
  ];
  return (
    <main>
      <Navbar title="Mi Tienda" items={navItems} />
      <section id="productos" className="product-grid">
        {products.length === 0 ? (
          <p>Error al cargar productos.</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))
        )}
      </section>
    </main>
  );
}
