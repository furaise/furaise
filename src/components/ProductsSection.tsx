import { useState } from "react";
import { products, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, Search, ExternalLink } from "lucide-react";
import ProductDetail from "./ProductDetail";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const [qty, setQty] = useState(10);
  const { addToCart } = useCart();
  const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();

  const isBasmati1121 = product.id === "basmati-rice";

  return (
    <>
      <div className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        <button onClick={() => setShowDetail(true)} className="w-full text-left cursor-pointer">
          <div className="h-56 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </button>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <button onClick={() => setShowDetail(true)} className="text-left">
              <h3 className="font-heading text-lg font-semibold text-foreground leading-tight hover:text-primary transition-colors">
                {product.name}
              </h3>
            </button>
            <span className="bg-primary/10 text-primary text-xs font-body font-bold px-2 py-1 rounded uppercase flex-shrink-0">
              {product.category}
            </span>
          </div>
          <p className="font-body text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>

          {/* Price */}
          <div className="mb-3">
            <span className="font-heading text-xl font-bold text-foreground">{product.price}</span>
            <span className="font-body text-muted-foreground text-xs ml-2">/ {product.unit}</span>
          </div>

          <p className="font-body text-xs text-muted-foreground mb-4">Min. Order: {product.minOrder}</p>

          {/* Quantity selector */}
          <div className="flex items-center gap-3 mb-4 mt-auto">
            <span className="font-body text-sm text-muted-foreground">Qty (MTN):</span>
            <div className="flex items-center border border-border rounded-md">
              <button
                onClick={() => setQty(Math.max(10, qty - 5))}
                className="p-2 hover:bg-muted transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={qty}
                onChange={(e) => {
                  const v = parseInt(e.target.value);
                  if (!isNaN(v) && v >= 10) setQty(v);
                }}
                className="w-16 text-center font-body text-sm bg-transparent border-x border-border py-2 focus:outline-none"
                min={10}
              />
              <button
                onClick={() => setQty(qty + 5)}
                className="p-2 hover:bg-muted transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, unit: product.unit }, qty)}
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </button>

          {/* View All Grades — only for Basmati 1121, below Add to Cart */}
          {isBasmati1121 && (
            <button
              onClick={() => navigate("/basmati-1121")}
              className="w-full mt-2 flex items-center justify-center gap-2 border-2 border-primary text-primary py-2.5 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ExternalLink className="w-4 h-4" /> View All Grades & Details
            </button>
          )}
        </div>
      </div>

      {showDetail && (
        <ProductDetail product={product} onClose={() => setShowDetail(false)} />
      )}
    </>
  );
};

const ProductsSection = () => {
  const [filter, setFilter] = useState<"all" | "turmeric" | "rice">("all");
  const [search, setSearch] = useState("");

  // Only show main products (not the individual basmati-1121 grades)
  const mainProducts = products.filter(p => !p.id.startsWith("basmati-1121-"));

  const filtered = mainProducts
    .filter((p) => filter === "all" || p.category === filter)
    .filter((p) => search.trim() === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id="products" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-center font-body text-muted-foreground mb-10 max-w-2xl mx-auto">
          Premium turmeric & rice — FOB pricing, minimum order 10 MTN
        </p>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              id="product-search"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {(["all", "turmeric", "rice"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-body text-sm font-bold uppercase tracking-wider transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border hover:bg-primary/10"
              }`}
            >
              {f === "all" ? "All Products" : f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="font-body text-muted-foreground">No products found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
