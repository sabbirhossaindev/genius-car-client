import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { } from "react-icons/bs";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or rand words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className='text-center mb-5 mt-8'>
                <button className="btn btn-outline text-orange-500">More Services</button>
            </div>

            {/* <div className="bg-black text-white text-center mt-5 mb-5">
                <div style={{ display: 'flex' }} className="bg-black text-white p-32 text-center"> 
                    
                    <div style={{display: 'flex'}}>
                        <div className='mt-4'>
                            <BsCalendarPlus></BsCalendarPlus>
                        </div>
                        <div className='mx-4'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <h3>764537357439</h3>
                        </div>
                    </div>

                    <div style={{display: 'flex'}}>
                        <div className='mt-4'>
                            <BsCalendarPlus></BsCalendarPlus>
                        </div>
                        <div className='mx-4'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <h3>764537357439</h3>
                        </div>
                    </div>

                    <div style={{display: 'flex'}}>
                        <div className='mt-4'>
                            <BsCalendarPlus></BsCalendarPlus>
                        </div>
                        <div className='mx-4'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <h3>764537357439</h3>
                        </div>
                    </div>

                </div>
            </div> */}
        </section>
    );
};

export default Services;