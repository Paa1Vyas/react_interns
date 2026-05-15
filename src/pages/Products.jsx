import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: "1", name: "Laptop", price: "$999", description: "High-performance laptop for work and play.", rating: 4.5, stock: 12 },
    { id: "2", name: "Phone", price: "$699", description: "Latest smartphone with advanced camera features.", rating: 4.7, stock: 25 },
    { id: "3", name: "Tablet", price: "$499", description: "Versatile tablet for entertainment and productivity.", rating: 4.3, stock: 18 },
];

export default function Products() {
    return (
        <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
            <h1>📦 Product Catalog</h1>
            <p>Route: <code>/products</code></p>
            <p>Browse our collection of products. Click on any product to view detailed information.</p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "2rem",
                marginTop: "2rem"
            }}>
                {PRODUCTS.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block"
                        }}
                    >
                        <div style={{
                            border: "1px solid #eee",
                            borderRadius: "8px",
                            overflow: "hidden",
                            transition: "transform 0.2s, box-shadow 0.2s",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                        }}>
                            <div style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "#f8f9fa",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <div style={{ textAlign: "center", color: "#6c757d" }}>
                                    <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>📱</div>
                                    <p style={{ margin: "0", fontWeight: "bold" }}>{product.name}</p>
                                </div>
                            </div>

                            <div style={{ padding: "1.5rem" }}>
                                <h3 style={{ marginTop: "0", color: "#333" }}>{product.name}</h3>
                                <p style={{ color: "#666", marginBottom: "1rem" }}>{product.description}</p>

                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "1rem"
                                }}>
                                    <span style={{
                                        fontSize: "1.5rem",
                                        color: "#28a745",
                                        fontWeight: "bold"
                                    }}>
                                        {product.price}
                                    </span>
                                    <div style={{
                                        display: "flex",
                                        gap: "0.25rem"
                                    }}>
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <span
                                                key={star}
                                                style={{
                                                    color: star <= product.rating ? "#ffc107" : "#dee2e6",
                                                    fontSize: "1rem"
                                                }}
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "0.9rem",
                                    color: "#6c757d"
                                }}>
                                    <span>In Stock: {product.stock}</span>
                                    <span>Rating: {product.rating}/5</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{
                marginTop: "2rem",
                padding: "1.5rem",
                backgroundColor: "black",
                borderRadius: "8px"
            }}>
                <h2>How to Use</h2>
                <ol style={{ lineHeight: "1.6" }}>
                    <li>Browse through our product catalog above</li>
                    <li>Click on any product card to view detailed information</li>
                    <li>On the product detail page, you can see specifications, pricing, and add items to your cart</li>
                    <li>Use the navigation menu to explore other sections like your dashboard or profile</li>
                </ol>
            </div>
        </div>
    );
}