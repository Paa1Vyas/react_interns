import { useParams, useNavigate } from "react-router-dom";

const PRODUCTS = [
    { id: "1", name: "Laptop", price: "$999", description: "High-performance laptop for work and play.", rating: 4.5, stock: 12 },
    { id: "2", name: "Phone", price: "$699", description: "Latest smartphone with advanced camera features.", rating: 4.7, stock: 25 },
    { id: "3", name: "Tablet", price: "$499", description: "Versatile tablet for entertainment and productivity.", rating: 4.3, stock: 18 },
];

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>Product Not Found</h1>
                <p>The product you're looking for doesn't exist.</p>
                <button onClick={() => navigate("/products")} style={{ padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: "200px" }}>
                    <div style={{ 
                        width: "100%", 
                        height: "200px", 
                        backgroundColor: "#f8f9fa", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        borderRadius: "8px",
                        marginBottom: "1rem"
                    }}>
                        {/* Placeholder for product image */}
                        <div style={{ textAlign: "center", color: "#6c757d" }}>
                            <p>Product Image</p>
                            <small>{product.name}</small>
                        </div>
                    </div>
                    
                    <div style={{ 
                        display: "flex", 
                        gap: "0.5rem", 
                        marginTop: "1rem"
                    }}>
                        {[1,2,3,4,5].map(star => (
                            <span 
                                key={star} 
                                style={{ 
                                    color: star <= product.rating ? "#ffc107" : "#dee2e6", 
                                    fontSize: "1.2rem"
                                }}
                            >
                                ⭐
                            </span>
                        ))}
                        <span style={{ marginLeft: "0.5rem", color: "#6c757d" }}>
                            ({product.rating}/5)
                        </span>
                    </div>
                </div>
                
                <div style={{ flex: 2 }}>
                    <h1>{product.name}</h1>
                    <p style={{ fontSize: "1.5rem", color: "#28a745", margin: "1rem 0" }}>{product.price}</p>
                    
                    <div style={{ 
                        marginBottom: "1.5rem", 
                        padding: "1rem", 
                        backgroundColor: "#e9ecef", 
                        borderRadius: "8px"
                    }}>
                        <p>{product.description}</p>
                    </div>
                    
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label htmlFor="quantity" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            max={product.stock}
                            value="1"
                            style={{ width: "80px", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                        <span style={{ marginLeft: "1rem", color: "#6c757d" }}>
                            In stock: {product.stock}
                        </span>
                    </div>
                    
                    <button 
                        onClick={() => alert(`Added ${product.name} to cart!`)}
                        style={{ 
                            padding: "0.75rem 1.5rem", 
                            backgroundColor: "#28a745", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "4px", 
                            cursor: "pointer",
                            fontSize: "1rem"
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            
            <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                <h2>Product Details</h2>
                <p><strong>Route:</strong> <code>/products/{id}</code></p>
                <p><strong>Dynamic Routing:</strong> This page uses <code>useParams()</code> to capture the product ID from the URL.</p>
            </div>
            
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <button onClick={() => navigate("/products")} style={{ padding: "0.5rem 1rem", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    ← Back to Products
                </button>
            </div>
        </div>
    );
}