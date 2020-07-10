// component ini adalah bagian dari carousel.js yang digunakan untuk menampilkan gambar portfolio

import React from 'react';


function Card(props) {

    return(
        <div className="d-inline-block g-card">
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        </div>
    );

}

export default Card;