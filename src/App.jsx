import {useEffect, useState} from "react"
// import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Data} from "./data/data"
// import Sdata from "./data/Sdata"
import Index from "./pages/Index"
// import product from "./data/data"
import Shop from "./pages/Shop"
import Header from "./components/Header"
import ProductDetails from "./pages/ProductDetails"
import toast from 'react-hot-toast';
// import Home from "./pages/Home"

function App() {
  const { productItems } = Data
  
  // const { shopItems } = Sdata
  const [CartItem, setCartItem] = useState([]);
  const [RetrieveItem, setRetrieveItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {

    
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.map((item) => item.id === product.id)
    
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      // const listItems = CartItem.map((item) => (item.id === productExit.id ? { ...productExit, qty: product.qty + 1 } : item))
      // localStorage.setItem('cart', JSON.stringify(listItems));
      toast.success(`Item QTY Increased`)
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      const listItems = [...CartItem, { ...product, qty: 1 }]
      localStorage.setItem('cart', JSON.stringify(listItems));
      toast.success(`${product.title} added to cart`)
    }

    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('cart'))

    //   if (items) {
    //     setCartItem(items)
    //   }
    // }, [items])
    


  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <Router>
    <Header CartItem={CartItem}/>
      <Routes>
        <Route exact path='/'  element={<Index productItems={productItems} addToCart={addToCart} CartItem={CartItem}/>} />
        <Route path='/products' element={<Shop  />} />
        <Route path='/products/:id' element={<ProductDetails  />} />
      </Routes>
    </Router>
  )
}

export default App
