import './App.css'
import CarCard from './components/CarCard'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/cars')
      .then((response) => {
        setCars(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>

      <header className="header">
        <h1>Car Shop</h1>
      </header>

      <div className="car-container">
        {
          cars.map((car) => (
            <CarCard
              key={car.id}
              name={car.name}
              price={car.price}
              image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            />
          ))
        }
      </div>

    </div>
  )
}

export default App