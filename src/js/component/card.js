import React from "react";

function Card() {
    return(
<div className="card p-3 m-2" style={{ width: '18rem' }}>
    <img src="..." className="card-img-top" alt="..." style={{ width: '100%' }} />
    <div className="card-body">
        <h5 className="card-title font-weight-bold">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
    )
}
export default Card;