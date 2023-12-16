import React from 'react';
import Title from './Title';
import { services } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <>
        <div className="section-title">
            <Title title='our' subTitle='services' />    
        </div>
        <section className="section services" id="services">
            <div className='section-center services-center'>
            {services.map((service) => {
               return (
                  <Service key={service.id} {...service} />
                )
            })}           
            </div>  
        </section>
    </>
  )
}

export default Services