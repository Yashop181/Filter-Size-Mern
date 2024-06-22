import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import AddProduct from "./pages/AddProduct"
import ProductDisplay from "./components/ProductDisplay"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<AddProduct/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/product-display" element={<ProductDisplay/>} /> 
        </Route>
      </Routes>
    </div>
  )
}

export default App
