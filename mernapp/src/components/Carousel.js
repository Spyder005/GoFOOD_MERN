import React from 'react'

const Carousel = () => {
  return (
    <div>
     <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className="carousel-caption" style={{zIndex:"10"}}>

  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white" type="submit">Search</button>
    </form>
    </div>
  <div className="carousel-item active d-flex justify-content-center align-items-center h-100 w-100">
    <img src="https://images.unsplash.com/photo-1702020298840-21d8917c56c8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=300" className="img-fluid w-100 m-6" style={{filter:"brightness(30%)"}}    alt="..."/>

    </div>
    <div className="carousel-item">
    <img src="https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=" className="img-fluid w-100 m-6" style={{filter:"brightness(30%)"}}    alt="..."/>
    </div>
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
