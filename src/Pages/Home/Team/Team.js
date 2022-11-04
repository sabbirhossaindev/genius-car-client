import React from 'react';
import img1 from '../.././../assets/images/team/1.jpg'
import img2 from '../.././../assets/images/team/2.jpg'
import img3 from '../.././../assets/images/team/3.jpg'

const Team = () => {
    return (
        <section className='mb-8 mt-8'>
            <div className='text-center mb-5 mt-8'>
                <p className="text-2xl font-bold text-orange-600">Team</p>
                <h2 className="text-5xl font-semibold">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomizes words which don't look even slightly believable. </p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-gray-500'>Engine Expert</p>
                        <p>icon</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-gray-500'>Engine Expert</p>
                        <p>icon</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-gray-500'>Engine Expert</p>
                        <p>icon</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;