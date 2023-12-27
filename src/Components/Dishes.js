import { ListItem } from '@mui/material';
import React, { useState } from 'react'

const Dishes = () => {


    const [search,setSearch] = useState("");
    console.log(search);


    const [buyCart,setBuyCart] = useState([]);


    const handleClick = (data) =>{

        buyCart.push(data);
        setBuyCart(buyCart);
        console.log(buyCart);
       

    }








    const foodOptions = [

        {
            index: 1,
            foodTitle: "Butter Chicken",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 10.99
        },

        
        {
            index: 2,
            foodTitle: "Biryani",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>, 
            price: 7.99
        },
        
        {
            index: 3,
            foodTitle: "Kimchi",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 5.99
        },
        
        {
            index: 4,
            foodTitle: "Ramen",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 20.99             
        },
        
        {
            index: 5,
            foodTitle: "Korean BBQ",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 30.99
        },
        {
            index: 6,
            foodTitle: "Sushi",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 15.99
        },
        {
            index: 7,
            foodTitle: "Kofta",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 5.00
        },
        {
            index: 8,
            foodTitle: "Pani Puri",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>, 
            price: 10.00
        },
        {
            index: 9,
            foodTitle: "Kebab",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 10.00
        },
        
        {
            index: 10,
            foodTitle: "Fish & Chips",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 7.00
        },
        
        {
            index: 11,
            foodTitle: "Tandoori Chicken",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 13.99
        },
        {
            index: 12,
            foodTitle: "Pho",
            foodDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            foodImage: <img src='https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'/>,
            price: 12.99
        }
    ];





  return (
    <div>

        <svg className='blob3' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FE9E0D" d="M31.8,-54.2C36,-52.7,30.5,-33.6,34.7,-21.6C39,-9.6,53,-4.8,58.3,3.1C63.6,10.9,60.2,21.9,55,32.2C49.8,42.5,42.7,52.1,33.2,61.8C23.8,71.6,11.9,81.4,-1.8,84.5C-15.4,87.6,-30.9,83.9,-36.3,71.9C-41.8,59.8,-37.3,39.4,-42.7,26C-48.2,12.6,-63.6,6.3,-70.1,-3.8C-76.6,-13.8,-74.2,-27.6,-68,-39.7C-61.8,-51.7,-51.8,-62,-39.8,-59C-27.8,-56,-13.9,-39.8,0,-39.7C13.8,-39.6,27.6,-55.7,31.8,-54.2Z" transform="translate(100 100)" />
        </svg>

        <img className='pizza' src='https://png.pngtree.com/png-clipart/20230914/ourmid/pngtree-sausage-cheese-pizza-slice-three-dimensional-3d-gourmet-food-fast-food-png-image_10116852.png'/>

        <svg className ='blob'viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FE9E0D" d="M38.4,-29.2C49.7,-16.5,58.6,-0.5,58.9,19.5C59.2,39.6,50.8,63.8,36.1,68.2C21.5,72.7,0.6,57.5,-21.6,46.3C-43.8,35.1,-67.3,27.9,-72.5,14C-77.7,0.1,-64.6,-20.5,-49.5,-34.1C-34.4,-47.8,-17.2,-54.4,-1.8,-53C13.6,-51.5,27.1,-42,38.4,-29.2Z" transform="translate(100 100)" />
        </svg>

        <h1 className='dishesTitle'>Try all our Dishes !</h1>
        <div className="search-form-container">
            <input onChange={(e) => setSearch(e.target.value) } type="text" placeholder="What food would you like" />
            <button onClick={() => (search) } className="secondary-button">Search</button>
        </div>


    <div className='dishesContainer'>
        {foodOptions.filter((data) =>{
            return search.toLowerCase() === '' || search.toUpperCase() === ''  ? data 
            : data.foodTitle.toLowerCase().includes(search) || data.foodTitle.toUpperCase().includes(search)   
        }).map((data) =>(
            <body className='bodyTitle' key = {data.index} handleClick={()=>handleClick(data)}>   
            <h1 className='Title'>
                {data.foodTitle}
            </h1>
            <h1 className='FoodImage'>
            {data.foodImage}            
            </h1>

            <h1 className='price'>
                £ {data.price}
            </h1>

            <h2 className='FoodDescription'>
                {data.foodDescription}
            </h2>
            <button className='secondary-button' onClick={()=> handleClick(data.price)}>Add to Cart</button>
            </body>
          

        
        ))};
        </div>

        <svg  className = 'blob2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FE9E0D" d="M43.4,-11.2C51.7,11.2,50.5,39.6,32.1,55.7C13.6,71.8,-22.1,75.7,-39.5,61.4C-56.8,47.1,-55.9,14.6,-46.3,-9.8C-36.6,-34.1,-18.3,-50.4,-0.4,-50.3C17.6,-50.1,35.2,-33.7,43.4,-11.2Z" transform="translate(100 100)" />
        </svg>
    </div>
  )
}

export default Dishes
