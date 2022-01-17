/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'

function Card() {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="/assets/images/pizza.png" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Card
