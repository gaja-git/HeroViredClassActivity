import logo from './logo.svg';
import './App.css';
import Menuheading from './components/MenuHeading';
import Maincourse from './components/MainCourse'
import Drinks from './components/Drinks';
import CustomerForm from './components/customerform';
import Heading from './components/Heading';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Foodname from './components/Foodname';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  
  const [cartQnty, setCartQnty] = useState(0)
  const [cartValue, setCartValue] = useState(0)
  function handleClick(){
    setCartQnty(cartQnty +1)
   // setCartValue( cartValue+1)
  }
  const maincourse = [
    {
      type : "veg",
      item : "Sahi Panner",
      price: 240
    },
    {
      type : "veg",
      item: "Naan",
      price:350
    },
    {
      type : "non-veg",
      item: "Chicken Biriyani",
      price:499
    },
    {
      type : "non-veg",
      item: "Mutton Sukka",
      price:499
    }
  ]

  const drinksItem = [
    {
      item : "Cold Coffee",
      price: 20,
      type: 'cold'
    },
    {
      item: "Tea",
      price:20,
      type: 'hot'
    },
    {
      item: "Herbal",
      price:30,
      type: 'hot'
    },
    {
      item: "Lemon Tea",
      price:30,
      type: 'cold'
    }

  ]

  
  return (
    <div className='App' >
      {/* <h1>Gaja's Kitchen</h1> */}
      <Heading title="Gaja Kitchen"></Heading>
      <Heading title="Main Course"></Heading>
      {maincourse.map( a => <Menu type={a.type} item={a.item} price={a.price} cartQnty={cartQnty} handleClick={handleClick}></Menu>)}
      <Heading title="Drinks"></Heading>
      {drinksItem.map( i => <Menu type={i.type} item={i.item} price={i.price} ></Menu>)}
      <CustomerForm>CustomerForm</CustomerForm>
      <Footer name="Gaja"></Footer>
      {/* <Foodname></Foodname> */}
      <Cart cartQnty={cartQnty} cartValue ={cartValue}></Cart> 
    </div>
   
  );
}

export default App;
