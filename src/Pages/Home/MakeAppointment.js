import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment
                })`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl'>Make an Appointment Today</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, ad. Neque expedita provident harum alias impedit omnis libero, sunt quibusdam delectus facere excepturi?</p>
            </div>
        </section>
    );
};

export default MakeAppointment;