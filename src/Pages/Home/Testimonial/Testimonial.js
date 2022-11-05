import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import me from '../.././../assets/images/features/Ellipse 2.png'
import me2 from '../.././../assets/images/features/Ellipse 2 (1).png'
import quote from '../.././../assets/images/features/quote 1.png'

const Testimonial = () => {
    return (
        <section className='mb-14 mt-20'>
            <div className='text-center mb-5 mt-8'>
                <p className="text-2xl font-bold text-orange-600">Testimonial</p>
                <h2 className="text-5xl font-semibold">What Customer Says</h2>
                <p className='mt-3'>the majority have suffered alteration in some form, by injected humour, or randomizes <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-14'>
                <div className='p-5'>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <img src={me} alt="me" />
                            </div>
                            <div>
                                <h3 className='text-2xl bold'>Awlad Hossain</h3>
                                <h5 className='text-gray-500'>Businessman</h5>
                            </div>
                        </div>
                        <div>
                            <img src={quote} alt="icon" />
                        </div>
                    </div>
                    <div className='p-5'>
                        <p className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <h4 className='flex mt-3 gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                    </div>
                </div>
                <div className='p-5'>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <img src={me2} alt="me" />
                            </div>
                            <div>
                                <h3 className='text-2xl bold'>Sabbir Hossain</h3>
                                <h5 className='text-gray-500'>Businessman</h5>
                            </div>
                        </div>
                        <div>
                            <img src={quote} alt="icon" />
                        </div>
                    </div>
                    <div className='p-5'>
                        <p className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <h4 className='flex mt-3 gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;