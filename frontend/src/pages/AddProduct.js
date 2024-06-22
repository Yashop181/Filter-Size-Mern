import { useState } from "react"
import axios from "axios"
import "../Cse/AddProduct.css"
const AddProduct = () => {
    const [name,setName] = useState('');
    const [size,setSize] = useState('');
    const [image,setImage] = useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('size',size);
        formData.append('image',image);
        
        await axios.post('http://localhost:8000/api/products',formData,{
            headers:{'Content-Type': 'multipart/form-data'},
        });
        setName('');
        setSize('');
        setImage(null);
        alert("Added SuccessFully")
    }

  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Size</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        >
          <option value="">Select Size</option>
          <option value="X">X</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <label>Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Add product</button>
      </form>
    </div>
    </>
  )
}

export default AddProduct
