import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import basmatiImg from "@/assets/basmati-rice.jpg";
import { products } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import ProductDetail from "@/components/ProductDetail";
import { type Product } from "@/data/products";

const WHATSAPP_NUMBER = "917842213679";

// Exact same ProductCard as main site
const ProductCard = ({ product, onSelect }: { product: Product; onSelect: () => void }) => {
  const [qty, setQty] = useState(10);
  const { addToCart } = useCart();

  return (
    <>
      <div className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        <button onClick={onSelect} className="w-full text-left cursor-pointer">
          <div className="h-56 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </button>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <button onClick={onSelect} className="text-left">
              <h3 className="font-heading text-lg font-semibold text-foreground leading-tight hover:text-primary transition-colors">
                {product.name}
              </h3>
            </button>
            <span className="bg-primary/10 text-primary text-xs font-body font-bold px-2 py-1 rounded uppercase flex-shrink-0">
              {product.category}
            </span>
          </div>
          <p className="font-body text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="mb-3">
            <span className="font-heading text-xl font-bold text-foreground">{product.price}</span>
            <span className="font-body text-muted-foreground text-xs ml-2">/ {product.unit}</span>
          </div>
          <p className="font-body text-xs text-muted-foreground mb-4">Min. Order: {product.minOrder}</p>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-sm text-muted-foreground">Qty (MTN):</span>
            <div className="flex items-center border border-border rounded-md">
              <button onClick={() => setQty(Math.max(10, qty - 5))} className="p-2 hover:bg-muted transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={qty}
                onChange={(e) => { const v = parseInt(e.target.value); if (!isNaN(v) && v >= 10) setQty(v); }}
                className="w-16 text-center font-body text-sm bg-transparent border-x border-border py-2 focus:outline-none"
                min={10}
              />
              <button onClick={() => setQty(qty + 5)} className="p-2 hover:bg-muted transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, unit: product.unit }, qty)}
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

const basmatiGrades = products.filter(p =>
  ["basmati-1121-white", "basmati-1121-steam", "basmati-1121-white-sella", "basmati-1121-golden"].includes(p.id)
);

const Basmati1121 = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", grade: "1121 White / Raw", quantity: "", port: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `*New Basmati 1121 Enquiry — FURAISE*%0A` +
      `------------------------------%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Company:* ${form.company || "N/A"}%0A` +
      `*Grade:* ${form.grade}%0A` +
      `*Quantity:* ${form.quantity || "N/A"}%0A` +
      `*Destination Port:* ${form.port || "N/A"}%0A` +
      `*Message:* ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        <style>{`
          .bp-hero { background: #2d5a35; padding: 64px 40px; }
          .bp-hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
          .bp-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #fff; padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
          .bp-h1 { font-size: clamp(30px,4vw,50px); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 12px; }
          .bp-h1 span { color: #a8d5b0; }
          .bp-desc { color: rgba(255,255,255,0.75); font-size: 15px; line-height: 1.7; margin-bottom: 28px; }
          .bp-stats { display: flex; gap: 36px; margin-bottom: 32px; }
          .bp-stat-num { font-size: 26px; font-weight: 800; color: #a8d5b0; }
          .bp-stat-label { font-size: 10px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 2px; }
          .bp-btn-primary { background: #fff; color: #2d5a35; padding: 12px 26px; border-radius: 6px; font-weight: 700; font-size: 14px; text-decoration: none; display: inline-block; transition: all 0.2s; }
          .bp-btn-primary:hover { background: #f0f0eb; }
          .bp-btn-secondary { border: 2px solid rgba(255,255,255,0.35); color: #fff; padding: 12px 26px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-block; margin-left: 10px; }
          .bp-btn-secondary:hover { border-color: #fff; background: rgba(255,255,255,0.1); }
          .bp-visual { border-radius: 12px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.25); position: relative; }
          .bp-visual img { width: 100%; height: 340px; object-fit: cover; display: block; transition: transform 0.5s; }
          .bp-visual:hover img { transform: scale(1.03); }
          .bp-visual-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(45,90,53,0.95), transparent); padding: 20px; }
          .bp-pill { background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-block; margin: 3px; }
          .bp-breadcrumb { background: #fff; border-bottom: 1px solid #e5e5e0; }
          .bp-breadcrumb-inner { max-width: 1200px; margin: 0 auto; padding: 12px 40px; display: flex; align-items: center; gap: 8px; font-size: 13px; color: #888; }
          .bp-breadcrumb-inner a { color: #2d5a35; text-decoration: none; font-weight: 500; }
          .bp-section { max-width: 1200px; margin: 0 auto; padding: 60px 40px; }
          .bp-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #2d5a35; margin-bottom: 8px; }
          .bp-title { font-size: clamp(22px,3vw,34px); font-weight: 700; color: #1a1a1a; margin-bottom: 10px; }
          .bp-subtitle { color: #777; font-size: 15px; max-width: 580px; margin-bottom: 40px; line-height: 1.6; }
          .bp-specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          .bp-spec-card { background: #fff; border: 1px solid #e5e5e0; border-radius: 10px; padding: 22px; transition: all 0.2s; }
          .bp-spec-card:hover { border-color: #2d5a35; box-shadow: 0 4px 16px rgba(45,90,53,0.1); }
          .bp-spec-title { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #2d5a35; margin-bottom: 14px; }
          .bp-spec-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f5f5f0; }
          .bp-spec-row:last-child { border-bottom: none; }
          .bp-spec-key { font-size: 13px; color: #888; }
          .bp-spec-val { font-size: 13px; color: #1a1a1a; font-weight: 600; }
          .bp-certs { background: #2d5a35; padding: 60px 0; }
          .bp-cert-badge { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 12px 18px; display: inline-flex; align-items: center; gap: 8px; color: #fff; font-size: 13px; margin: 5px; }
          .bp-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
          .bp-table th { background: #2d5a35; color: #fff; padding: 13px 16px; text-align: left; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
          .bp-table td { padding: 13px 16px; font-size: 13px; border-bottom: 1px solid #f0f0eb; }
          .bp-table tr:last-child td { border-bottom: none; }
          .bp-table tr:hover td { background: #f9f9f6; }
          .bp-table-price { font-weight: 700; color: #2d5a35; }
          .bp-table-tag { background: #e8f5e1; color: #2d5a35; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; }
          @media (max-width: 768px) {
            .bp-hero-inner { grid-template-columns: 1fr; padding: 40px 20px !important; }
            .bp-visual { display: none; }
            .bp-specs-grid { grid-template-columns: 1fr; }
            .bp-section { padding: 40px 20px; }
          }
        `}</style>

        {/* Breadcrumb */}
        <div className="bp-breadcrumb">
          <div className="bp-breadcrumb-inner">
            <a href="/">Home</a> <span>›</span>
            <a href="/#products">Products</a> <span>›</span>
            <span style={{ color: "#1a1a1a" }}>Basmati Rice 1121</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bp-hero">
          <div className="bp-hero-inner">
            <div>
              <div className="bp-badge">⭐ Export Grade · India Origin</div>
              <h1 className="bp-h1">Basmati 1121<br /><span>Premium Rice</span></h1>
              <p className="bp-desc">World's longest grain Basmati rice, grown in the fertile Indo-Gangetic plains. APEDA certified, FDA compliant, export-ready for USA, UAE, UK & global markets.</p>
              <div className="bp-stats">
                <div><div className="bp-stat-num">8.35mm</div><div className="bp-stat-label">Grain Length</div></div>
                <div><div className="bp-stat-num">2.5x</div><div className="bp-stat-label">Elongation</div></div>
                <div><div className="bp-stat-num">95%+</div><div className="bp-stat-label">Purity</div></div>
              </div>
              <a href="#inquiry" className="bp-btn-primary">📩 Request CIF Quote</a>
              <a href="#grades" className="bp-btn-secondary">View All Grades</a>
            </div>
            <div className="bp-visual">
              <img src={basmatiImg} alt="Basmati 1121 Premium Rice" />
              <div className="bp-visual-overlay">
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>Available Grades</p>
                <div>{["White / Raw", "Steam", "White Sella", "Golden Sella"].map(g => <span key={g} className="bp-pill">{g}</span>)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div style={{ background: "#f0f0eb" }}>
          <div className="bp-section">
            <div className="bp-label">Technical Specifications</div>
            <h2 className="bp-title">Product Specifications</h2>
            <p className="bp-subtitle">All specifications as per APEDA standards, verified by third-party labs before shipment.</p>
            <div className="bp-specs-grid">
              {[
                { title: "🌾 Physical Properties", rows: [["Average Grain Length (Raw)", "8.35 mm+"], ["Grain Length (Cooked)", "Up to 22 mm"], ["Elongation Ratio", "2.5x+"], ["Grain Type", "Extra Long, Slender"], ["Aroma", "Distinct Floral/Nutty"], ["Texture (Cooked)", "Fluffy, Non-Sticky"]] },
                { title: "🔬 Quality Parameters", rows: [["Moisture Content", "Max 12–13%"], ["Broken Grains", "Max 1–3%"], ["Purity", "95%+"], ["Foreign Matter", "Nil"], ["Chalky Grains", "Max 1%"], ["Admixture", "Max 2%"]] },
                { title: "📦 Packaging Options", rows: [["PP Bags", "5kg, 10kg, 25kg, 50kg"], ["Non-Woven Bags", "1kg to 40kg"], ["Jute Bags", "25kg, 50kg"], ["Private Label", "Available"], ["Container Load", "20–25 MT per FCL"]] },
                { title: "🚢 Shipping & Trade", rows: [["Origin", "India (Punjab/Haryana)"], ["Export Port", "Mundra / JNPT"], ["Min. Order", "1 FCL (20–25 MT)"], ["Payment Terms", "30% Advance + BL Copy"], ["Lead Time", "15–21 Days"], ["Incoterms", "FOB / CNF / CIF"]] },
              ].map(card => (
                <div key={card.title} className="bp-spec-card">
                  <div className="bp-spec-title">{card.title}</div>
                  {card.rows.map(([k, v]) => (
                    <div key={k} className="bp-spec-row">
                      <span className="bp-spec-key">{k}</span>
                      <span className="bp-spec-val">{v}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grades */}
        <section id="grades" className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Choose Your <span className="text-primary">Grade</span>
            </h2>
            <p className="text-center font-body text-muted-foreground mb-10 max-w-2xl mx-auto">
              All grades milled to export standards — FOB pricing, minimum order 1 FCL (25 MT)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {basmatiGrades.map(grade => (
                <ProductCard key={grade.id} product={grade} onSelect={() => setSelectedProduct(grade)} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <div className="bp-certs">
          <div className="bp-section" style={{ textAlign: "center" }}>
            <div className="bp-label" style={{ color: "#a8d5b0" }}>Quality Assurance</div>
            <h2 className="bp-title" style={{ color: "#fff", marginBottom: "32px" }}>Certifications & Compliance</h2>
            <div>
              {["APEDA Certified", "FSSAI Licensed", "ISO 22000:2018", "HACCP Certified", "FDA Compliant (USA)", "Halal Certified", "Phytosanitary Certificate", "GI Tagged (Indian Basmati)"].map(c => (
                <span key={c} className="bp-cert-badge">✅ {c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div style={{ background: "#f0f0eb" }}>
          <div className="bp-section">
            <div className="bp-label">Transparent Pricing</div>
            <h2 className="bp-title">FOB & CIF Price List</h2>
            <p className="bp-subtitle">Prices as of 2026. Contact us for live quotes — vary with currency & season.</p>
            <table className="bp-table">
              <thead>
                <tr>{["Grade", "Grain Length", "FOB Mundra", "CIF Miami", "Per FCL (25MT)", "Best For"].map(h => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {[
                  { grade: "1121 White/Raw", tag: "Premium", len: "8.35mm+", fob: "$1,060/MT", cif: "~$1,180/MT", fcl: "~$29,500", best: "Fine Dining, EU Retail" },
                  { grade: "1121 Steam", tag: "Most Traded", len: "8.35mm+", fob: "$1,050/MT", cif: "~$1,170/MT", fcl: "~$29,250", best: "Restaurants, Food Service" },
                  { grade: "1121 White Sella", tag: "", len: "8.35mm+", fob: "$930/MT", cif: "~$1,050/MT", fcl: "~$26,250", best: "Bulk Catering" },
                  { grade: "1121 Golden Sella", tag: "", len: "8.30mm+", fob: "$1,060/MT", cif: "~$1,180/MT", fcl: "~$29,500", best: "Middle East, Biryani" },
                ].map(r => (
                  <tr key={r.grade}>
                    <td><strong>{r.grade}</strong> {r.tag && <span className="bp-table-tag">{r.tag}</span>}</td>
                    <td>{r.len}</td>
                    <td className="bp-table-price">{r.fob}</td>
                    <td className="bp-table-price">{r.cif}</td>
                    <td className="bp-table-price">{r.fcl}</td>
                    <td>{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "12px", color: "#999", marginTop: "10px" }}>* Prices subject to change. Ocean freight India→Miami ~$100–120/MT.</p>
          </div>
        </div>

        {/* ✅ Inquiry Form — sends to WhatsApp exactly like Contact.tsx */}
        <div style={{ background: "#fff" }}>
          <div className="bp-section" id="inquiry">
            <div className="bp-label">Get A Quote</div>
            <h2 className="bp-title">Request CIF/FOB Quote</h2>
            <p style={{ color: "#777", fontSize: "15px", marginBottom: "32px" }}>
              Fill in your requirements — your message will be sent directly to our WhatsApp.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

              {/* Form */}
              {submitted ? (
                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>Enquiry Sent!</h3>
                  <p style={{ color: "#777", fontSize: "14px", marginBottom: "24px" }}>
                    Your message has been forwarded to WhatsApp. We'll respond within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", grade: "1121 White / Raw", quantity: "", port: "", message: "" }); }}
                    style={{ padding: "10px 24px", border: "2px solid #2d5a35", color: "#2d5a35", borderRadius: "8px", background: "none", cursor: "pointer", fontWeight: 600, fontSize: "14px" }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", req: true },
                    { label: "Email Address *", name: "email", type: "email", placeholder: "you@company.com", req: true },
                    { label: "Company Name", name: "company", type: "text", placeholder: "Your company (optional)", req: false },
                    { label: "Destination Port *", name: "port", type: "text", placeholder: "e.g. Miami, USA", req: true },
                    { label: "Quantity Required", name: "quantity", type: "text", placeholder: "e.g. 25 MT, 1 FCL", req: false },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888", marginBottom: "6px", letterSpacing: "0.5px" }}>{f.label}</label>
                      <input name={f.name} type={f.type} required={f.req} placeholder={f.placeholder} value={form[f.name as keyof typeof form]} onChange={handleChange}
                        style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e0e0db", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888", marginBottom: "6px" }}>Grade Required</label>
                    <select name="grade" value={form.grade} onChange={handleChange}
                      style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e0e0db", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", fontFamily: "inherit", background: "#fff" }}>
                      {["1121 White / Raw", "1121 Steam", "1121 White Sella", "1121 Golden Sella", "Multiple Grades"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888", marginBottom: "6px" }}>Message *</label>
                    <textarea name="message" required rows={4} placeholder="Tell us about packaging requirements, certifications needed, delivery timeline..." value={form.message} onChange={handleChange}
                      style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e0e0db", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} />
                  </div>
                  {/* WhatsApp submit button — same style as Contact.tsx */}
                  <button type="submit"
                    style={{ width: "100%", padding: "14px", background: "#25D366", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 700, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", fontFamily: "inherit", boxShadow: "0 4px 24px rgba(37,211,102,0.25)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.826L.057 23.427a.75.75 0 0 0 .921.921l5.624-1.464A11.945 11.945 0 0 0 12 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 22c-1.885 0-3.653-.51-5.17-1.402l-.37-.22-3.338.869.882-3.32-.24-.384A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p style={{ textAlign: "center", fontSize: "12px", color: "#999" }}>Clicking will open WhatsApp with your message pre-filled.</p>
                </form>
              )}

              {/* Contact info panel */}
              <div>
                <div style={{ background: "#f9f9f6", border: "1px solid #e5e5e0", borderRadius: "12px", padding: "24px", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>Contact Us Directly</h3>
                  {[
                    { icon: "📧", title: "Email", val: "exports@furaise.com", href: "mailto:exports@furaise.com" },
                    { icon: "💬", title: "WhatsApp", val: "+91 78422 13679", href: `https://wa.me/${WHATSAPP_NUMBER}` },
                    { icon: "📍", title: "Office", val: "Gudur, Andhra Pradesh, India", href: null },
                    { icon: "🚢", title: "Export Port", val: "Mundra / JNPT, India", href: null },
                    { icon: "⏰", title: "Response Time", val: "Within 24 hours", href: null },
                  ].map(c => (
                    <div key={c.title} style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                      <div style={{ fontSize: "18px" }}>{c.icon}</div>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: "3px" }}>{c.title}</div>
                        {c.href
                          ? <a href={c.href} style={{ fontSize: "14px", color: "#2d5a35", textDecoration: "none", fontWeight: 500 }}>{c.val}</a>
                          : <div style={{ fontSize: "14px", color: "#666" }}>{c.val}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#2d5a35", borderRadius: "12px", padding: "22px", color: "#fff" }}>
                  <h4 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "14px" }}>Why Choose Furaise?</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "9px", fontSize: "13px", color: "rgba(255,255,255,0.85)" }}>
                    {["APEDA & FSSAI certified exporter", "FDA compliant for USA market", "Competitive CIF/FOB pricing", "Flexible packaging options", "On-time delivery guarantee", "Lab test reports with every shipment"].map(item => (
                      <div key={item}>✅ {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <CartSidebar />
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
      <Footer />
    </>
  );
};

export default Basmati1121;
