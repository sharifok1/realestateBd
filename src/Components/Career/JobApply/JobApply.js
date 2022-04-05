import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import applyImg from '../../../asset/applyImg.jpg'

const JobApply = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log('resume',data);
    return (
        <div className='text-dark'>
          
          <div className='joint-venture-contact-container'>
            <Container>
                <h1 className='joint-contact-heading'>Apply Now</h1>
            <div className='jointVentureContuct'>
                <div className='left'>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className='venture-contactUs-wraper'>
                   <input className='venture-contactUs-field' {...register("fullName")} placeholder="Full Name" required/>
                    <input className='venture-contactUs-field' {...register("phoneNumber")} placeholder="Phone Number" required/>
                    <input className='venture-contactUs-field' {...register("email")} placeholder="Email Address" required/>
                    <input className='venture-contactUs-field' {...register("applyForThePosition")} placeholder="Apply For The Position" required/>
                    <input className='venture-contactUs-field' {...register("expYear")}  placeholder="Year of Experience" required/>
                   <div
                   style={{
                       textAlign:'left',
                       marginLeft:'-28%',
                       paddingTop:'20px',
                       marginBottom:"-15px"

                   }}
                   >Upload your upadated resume</div>
                    <input className='venture-contactUs-field' {...register("resume")} type='file' id="file" name="file" required/>
                    <input className='venture-contactUs-btn'  type="submit" />
                  
                   </div>
            
                    
                </form>

                </div>

                <div className='right'>
                    <img className='img-fluid' src={applyImg} alt="" />
                </div>
           </div>
            </Container>
            </div>
        </div>
    );
};

export default JobApply;