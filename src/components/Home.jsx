import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Home.css"
import Products from "./Products"

function Home() {

    // all products
    const [data, setData] = useState([])
    
    // storing filtered data
    const [filtered, setFiltered] = useState([])
   
    useEffect(() => {

        const URL = "https://assessment-edvora.herokuapp.com/"
        axios.get(URL).then((res) => {
            console.log('All Data', res.data)
            setData(res.data)
        })

    }, [])

// storing the data comes from select tag
const [selectData , setselectData] = useState({
    Products:"",
    State:"",
    City:""
})    

const handleChange = (e)=>{
    setselectData({
        ...selectData,[e.target.name]:e.target.value
    })

}

// search Button function
const searchData = ()=>{
    console.log(selectData)


    setFiltered(

        data.filter(ele=>{
            if(ele.product_name == selectData.Products || ele.address.state == selectData.State || ele.address.city == selectData.City ){
                
                return ele
            }
        })

    )
   
    show()
}

// for conditional rendering
const [showProduct,SetShowProduct] = useState(false)

function show(){
   
    if(selectData.Products != "" || selectData.State != "" ||   selectData.City != ""){
        SetShowProduct(true)
    }
}



    return (
        <div className="container-fluid text-light bg-dark main-div row main-container py-5 ">

{/* ======================filter Section====================== */}
            <section className="container col-md-2">


                <div  className="  d-flex flex-column py-3 filter">
                {/* <p className="text-light border-bottom border-2" >Filters</p> */}

                       <label htmlFor="">Products</label> 
                    <select onChange={handleChange} name="Products" >
                       <option selected disabled >--Select Products--</option>
                        {
                            data.map(ele=>  <option value={ele.product_name}>{ele.product_name}</option>  )
                            
                        }
                    </select>
                        <label htmlFor="">State</label> 
                    <select onChange={handleChange} name="State" >
                        <option selected disabled >--Select State--</option>
                        {
                            data.map(ele=>  <option value={ele.address.state} >{ele.address.state}</option>  )
                            
                        }
                    </select>
                        <label htmlFor="">City</label> 
                    <select onChange={handleChange} name="City" >
                        <option selected disabled >--Select City--</option>
                        {
                            data.map(ele=>  <option value={ele.address.city} >{ele.address.city}</option>  )
                       
                        }
                    </select>

                     <button onClick={searchData} className="btn btn-outline-warning btn-sm mt-2" >Filter Products</button>   
                </div>

            </section>
{/* ======================Products Section====================== */}

            <section className="container edvora  col-md-10 pt-3 " >

                <h1>Edvora</h1>
                <h3 className="text-secondary" >Products</h3>

                <Products data={data} filtered={filtered} showProduct={showProduct} productName={selectData.Products} />
                <Products data={data} filtered={filtered} showProduct={showProduct} productName={selectData.Products}/>

            </section>

        </div>
    )
}

export default Home