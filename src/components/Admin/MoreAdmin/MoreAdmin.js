import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './MoreAdmin.css';

const MoreAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [success, setSuccess] = useState('');

    const onSubmit = data => {
        fetch('https://morning-island-82484.herokuapp.com/AddAdmin', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => setSuccess('Added Successfully!'))
    }

    return (
        <div className="pt-4">
            <form className="bg-white admin-from p-4 ms-4 me-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-50 mb-3">
                    <label htmlFor="">Email</label>
                    <input type="email" {...register("email")} className="form-control mt-1" placeholder="Enter Email" />
                </div>

                <input type="submit" value="Submit" className="btn mt-3 submitAdmin" />
            </form>
            {success &&
                <p className="text-success text-center mt-5">{success}</p>
            }
        </div>
    );
};

export default MoreAdmin;