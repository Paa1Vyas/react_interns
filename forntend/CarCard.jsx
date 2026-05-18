function CarCard({ name, price, image }) {
    return (
      <div className="car-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button>Buy Now</button>
      </div>
    )
  }
  
  export default CarCard