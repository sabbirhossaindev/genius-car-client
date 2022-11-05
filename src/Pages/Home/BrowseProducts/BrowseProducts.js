import React from 'react';
import img1 from '../.././../assets/images/products/1.png'
import img2 from '../.././../assets/images/products/2.png'
import img3 from '../.././../assets/images/products/3.png'
import img4 from '../.././../assets/images/products/4.png'
import img5 from '../.././../assets/images/products/5.png'
import img6 from '../.././../assets/images/products/6.png'
import { BsFillStarFill } from "react-icons/bs";

const BrowseProducts = () => {
    return (
        <section>
            <div className='text-center mb-5 mt-8'>
                <p className="text-2xl font-bold text-orange-600">Popular Products</p>
                <h2 className="text-5xl font-semibold">Browse Our Products</h2>
                <p className='mt-3'>the majority have suffered alteration in some form, by injected humour, or randomizes <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className='flex gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-orange-500 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className='flex gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-orange-500 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className='flex gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-orange-500 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className='flex gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-orange-500 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className='flex gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-orange-500 font-bold'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className='flex gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-orange-500 font-bold'>$20.00</p>
                    </div>
                </div>

                
                
                
                
                
                
                
            </div>

            <div className='text-center mb-5 mt-8'>
                <button className="btn btn-outline text-orange-500">More Products</button>
            </div>
        </section>
    );
};

export default BrowseProducts;