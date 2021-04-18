import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './Review.css';

// const axios = require('axios');

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [imageUrl, setImageUrl] = useState(null);
    const [addReview, setAddReview] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const handleImageUrl = (event) => {
    //     const imageData = new FormData();
    //     imageData.set('key', '3c15a825f4e4ac0d0971a4c8ee8ae8b2');
    //     imageData.append('image', event.target.files[0])

    //     axios.post('https://api.imgbb.com/1/upload', 
    //         imageData)
    //       .then((response) => {
    //         setImageUrl(response.data.data.display_url);
    //         console.log(response.data.data.display_url)
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }
    const onSubmit = data => {
        const {name, companyName, description} = data;
        const serviceData = {
            name: name,
            image: loggedInUser.photo,
            companyName: companyName,
            description: description
        }

        fetch('https://morning-island-82484.herokuapp.com/AddReview', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => setAddReview("Review Added Successfully!"))

        // document.getElementById('name').value = '';
        // document.getElementById('companyName').value = '';
        // document.getElementById('description').value = '';
        // document.getElementById('image').value = '';
    }

    return (
        <div className="p-4">
            <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" id="name" {...register("name")} className="py-2 form-control" placeholder="Your Name" />
                <input type="text" id="companyName" {...register("companyName")} className="py-2 my-3 form-control" placeholder="Company's name. Designation" />
                {/* <input type="file" id="image" onChange={handleImageUrl}  className="form-control mb-3" placeholder="Company's name. Designation" /> */}
                <textarea id="description" {...register("description")}  cols="30" rows="4" className="form-control mb-3" placeholder="Description"></textarea>

                <input type="submit" value="Submit" className="btn reviewSubmit" />
            </form>
        </div>
    );
};

export default Review;