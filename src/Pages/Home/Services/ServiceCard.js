import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({service}) => {
    const {img, price, title} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
            <figure><img src={img} alt="Shoes" className='p-5 rounded-3xl'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="text-orange-600 text-4xl"><BsArrowRight></BsArrowRight></button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;