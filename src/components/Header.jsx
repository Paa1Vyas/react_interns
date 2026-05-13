function Header({ name, location }) {

  return (

    <div className="zp-header">

      <h1 className="zp-name">
        {name}
      </h1>

      <p className="zp-location">
        {location}
      </p>

    </div>
  )
}

export default Header