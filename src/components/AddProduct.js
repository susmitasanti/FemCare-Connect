import React from 'react'
import { useState } from 'react';
import {
    useNavigate
} from 'react-router-dom';
function AddProduct() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ prodName: "", description: "", price: "" })
    const [selectedImage, setSelectedImage] = useState(null);

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // You can add additional checks here to validate the file type or size.
            setSelectedImage(file);
        }else{
            console.log("Not found")
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Create a FormData object
        const formData = new FormData();
        formData.append('prodName', credentials.prodName);
        formData.append('description', credentials.description);
        formData.append('price', credentials.price);
        formData.append('image', selectedImage);
    
        try {
            const response = await fetch('http://localhost:3001/addProduct', {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('token'),
                },
                body: formData, // Send the form data
            });
    
            if (response.ok) {
                const product = await response.json();
                console.log('Product created:', product);
                // Redirect to a success page or navigate as needed
                navigate('/success'); // Use history to navigate
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    


    return (
        <>

            <div className='container' style={{ margin: '100px' }}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Product name"
                        aria-label="default input example"
                        id="prodName"
                        name="prodName"
                        value={credentials.prodName}
                        onChange={onChange}
                        required
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Description"
                        aria-label="default input example"
                        id="description"
                        name="description"
                        value={credentials.description}
                        onChange={onChange}
                        required />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Price"
                        aria-label="default input example"
                        id="price"
                        name="price"
                        value={credentials.price}
                        onChange={onChange}
                        required
                    />
                    <label htmlFor="image">Product Image:</label>
                    <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />


                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>


        </>
    )
}

export default AddProduct
