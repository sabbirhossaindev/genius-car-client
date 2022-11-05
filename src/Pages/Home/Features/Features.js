import React from 'react';
import img1 from '../.././../assets/images/features/Group 71.svg'
import img2 from '../.././../assets/images/features/Group 38729.png'
import img3 from '../.././../assets/images/features/Wrench.svg'
import img4 from '../.././../assets/images/features/Group.svg'
import img5 from '../.././../assets/images/features/Vector (1).png'
import img6 from '../.././../assets/images/features/Vector.png'



const Features = () => {
    return (
        <section className='mb-8 mt-8'>
            <div className='text-center mb-5 mt-8'>
                <p className="text-2xl font-bold text-orange-600">Core Features</p>
                <h2 className="text-5xl font-semibold">Why Choose Us</h2>
                <p className='mt-3'>the majority have suffered alteration in some form, by injected humour, or randomizes <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid gap-5 ml-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                <div>
                    <img src={img1} alt="" />
                    <h5>Expert Team</h5>
                </div>
                <div>
                    <img src={img2} alt=""  className='bg-orange-600'/>
                    <h5>Expert Team</h5>
                </div>
                <div>
                    <img src={img3} alt="" className='text-orange-500'/>
                    <h5>24/7 Support</h5>
                </div>
                <div>
                    <img src={img4} alt="" className='text-orange-500'/>
                    <h5>Best Equipment</h5>
                </div>
                <div>
                    <img src={img5} alt="" className='text-orange-500'/>
                    <h5>100% Guaranty</h5>
                </div>
                <div>
                    <img src={img6} alt="" className='text-orange-500'/>
                    <h5>Timely Delivery</h5>
                </div>
            </div>
        </section>
    );
};

export default Features;