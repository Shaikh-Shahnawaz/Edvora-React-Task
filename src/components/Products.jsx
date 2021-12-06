import React, { useEffect, useState } from 'react'

import "./Products.css"
import Slider from "react-slick";

function Products({data,filtered,showProduct,productName}) {

  // Note :- props variable meaning
  /*
  
  data ----> all data which is comming from api
  filtered -----> data which is coming from by comparing the select tag data and api data
  showProduct ----> is for conditional rendering (if filtered then show filter data or show whole api data)
  productName ------> product name which is selected in select tag

  
  */


//   React Slick Settings
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    const product = data.map(ele=>ele.product_name)

    return (
        <>

            <h5>{productName?productName:product[0]}</h5>
            <hr />

            <div className="container-fluid products">

                <Slider {...settings}>

                    {
                        showProduct ?

                        filtered.map((ele) => (

                            <div className="card bg-dark ">

                                <div style={{ marginTop: '10px' }}>

                                  
                                    <img style={{left: '270px', position: 'relative'}} height="70" width="70" src={ele.image} class="ms-2 border border-1 border-light rounded-3" alt="..." />

                                    <p className="me-2 mt-2 text-end" > 

                                    <strong>{ele.address.city }</strong> <br />
                                    <strong>{ ele.address.state }</strong>

                                    </p>
                                   
                                
                                </div>

                                <div style={{ marginTop: '-140px' }} className=" text-start ps-2 ">
                                    <h5 class="card-title">{ele.product_name}</h5>
                                    <h6 class="card-title mb-2 text-muted">{ele.brand_name}</h6>
                                    <p class="card-text"> <strong>$ {ele.price}</strong> </p>
                                    <p className="text-muted card-text" >Date: {ele.date.slice(0,10)}</p>
                                    
                                    <p className="text-muted">Description: {ele.discription}</p>

                                </div>

                            </div> 

                        ))
                        :

                        data.map((ele) => (

                            <div className="card bg-dark ">

                                <div className="text-end float-end mt-2 me-2" >

                                  
                                    <img  height="70" width="70" src={ele.image} class="ms-2 border border-1 border-light rounded-3 " />

                                    <p className=" mt-2 " > 

                                    <strong>{ele.address.city }</strong> <br />
                                    <strong>{ ele.address.state }</strong>

                                    </p>
                                   
                                
                                </div>

                                <div style={{ marginTop: '10px' }} className=" text-start ps-2 ">
                                    <h5 class="card-title">{ele.product_name}</h5>
                                    <h6 class="card-title mb-2 text-muted">{ele.brand_name}</h6>
                                    <p class="card-text"> <strong>$ {ele.price}</strong> </p>
                                    <p className="text-muted card-text" >Date: {ele.date.slice(0,10)}</p>
                                    
                                    <p className="text-muted">Description: {ele.discription}</p>

                                </div>

                            </div> 

                        ))


                    }

                </Slider>

            </div>

        </>
    )
}

export default Products
