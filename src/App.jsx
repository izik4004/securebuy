import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Data from "./data/data2"
import Sdata from "./data/Sdata"
import Index from "./pages/Index"
// import Home from "./pages/Home"

function App() {
  const { productItems } = Data
  // const { shopItems } = Sdata


  return (
    // <div className="App">
    //  <Home/>
    // </div>
    <>
    <Router>
      {/* <Header  /> */}
      <Routes>
        {/* <Route path='/' element={<Home productItems={productItems}  />} /> */}
        <Route path='/' element={<Index productItems={productItems}  />} />
     
        {/* <Route path='/cart' exact> */}
          {/* <Cart CartItem={CartItem}  /> */}
        {/* </Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  </>
  )
}

export default App
