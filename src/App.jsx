import AllProducts from "./Components/All Products/AllProducts"
import CartContainer from "./Components/CartContainer"
import Footer from "./Components/Footer"
import Header from "./Components/Header"


function App() {


  return (
    <div className="max-w-screen-lg mx-auto">

      {/* Navbar */}
      <Header></Header>
     {/*  */}
     <div className="flex justify-around">
     <AllProducts></AllProducts>
     <CartContainer></CartContainer>
     </div>
     


    </div>
  )
}

export default App
