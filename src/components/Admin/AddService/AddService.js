import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const axios = require('axios');

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const [addProduct, setAddProduct] = useState('');

    const handleImageUrl = (event) => {
        const imageData = new FormData();
        imageData.set('key', '3c15a825f4e4ac0d0971a4c8ee8ae8b2');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
            imageData)
          .then((response) => {
            setImageUrl(response.data.data.display_url);
            console.log(response.data.data.display_url)
          })
          .catch((error) => {
            console.log(error);
          });
    }
    
    const onSubmit = data => {
        data && setAddProduct('');
        const {title, price, description} = data;
        const serviceData = {
            title: title,
            image: imageUrl,
            price: price,
            description: description
        }

        fetch('https://morning-island-82484.herokuapp.com/AddService', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => setAddProduct("Product Added Successfully!"))

        document.getElementById('title').value = '';
        document.getElementById('price').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image').value = '';
    }

    return (
        <div className="pt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row bg-white mb-3 me-5 ms-4 service-from d-flex">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="mb-2" htmlFor="">Service Title</label>
                            <input type="text" {...register("title")} className="form-control" placeholder="Enter title" />
                        </div>

                        <div>
                            <label className="mb-2" htmlFor="">Description</label>
                            <textarea cols="30" rows="5" {...register("description")} className="form-control" placeholder="Enter Description"></textarea>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="mb-2" htmlFor="">Price</label>
                            <input type="text" {...register("price")} placeholder="Enter Price" className="form-control" />
                        </div>

                        <div>
                            <label className="mb-2" htmlFor="">Image</label>
                            <input type="file" onChange={handleImageUrl} className="form-control" />
                        </div>
                    </div>
                </div>

                <input type="submit" value="Submit" className="btn me-5 submitBtn" />
            </form>
            {addProduct &&
                <p className="text-center text-danger py-4">{addProduct}</p>
            }
        </div>
    );
};

export default AddService;