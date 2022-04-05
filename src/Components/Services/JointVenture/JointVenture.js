import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import jointVenture from '../../../asset/jointventure.png'
import jointBanner from '../../../asset/jointBanner.jpg'
import handShak from '../../../asset/handShak.jpg'
import { useForm } from "react-hook-form";
import './JointVenture.css'
const JointVenture = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
             <NavBars/>
             <div className='team-banner'>   
                   <img style={{width:'100%',height:'100%'}} src={jointBanner} alt="" />
                  <p>JOINT VENTURE</p>          
           </div>


           <div className='wonland-section venture'>
           <Container>
                <div className='wonland-wraper joint-logo-sec'>
                    <div className='left'>
                        <img className='img-fluid' src={jointVenture} alt="" />
                    </div>
                    <div className='right'>
                        <p style={{color:'#111'}}>
                        Enjoy living in the sheltered warmth of architectural beauty, that transcends simple luxury, aesthetically built with expertise and elegance in Edison’s own land. Here, you get to experience a comfortable and relaxed living environment which you have dreamed of for all your life. <br />

                        We offer you residential and commercial spaces at premium price points on our own properties which makes way for a safe environment for investment. With Edison, you do not have to worry about your investment going in vain as we ensure optimum security and maintain confidentiality. 
                        </p>
                    </div>
                </div>
           </Container>
           </div>


            <div className='joint-venture-contact-container'>
            <Container>
                <h1 className='joint-contact-heading'>Contact Us</h1>
            <div className='jointVentureContuct'>
                <div className='left'>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className='venture-contactUs-wraper'>
                    <input className='venture-contactUs-field' {...register("landArea")} placeholder="Land Area"  required/>
                    <input className='venture-contactUs-field' {...register("numberOfLandOwner")} placeholder="Number of Land owner" required/>
                    <input className='venture-contactUs-field' {...register("fullName")} placeholder="Full Name" required/>
                    <input className='venture-contactUs-field' {...register("phoneNumber")} placeholder="Phone Number" required/>
                    <input className='venture-contactUs-field' {...register("email")}  placeholder="Email Address" required/>
                    <textarea className='venture-contactUs-field' {...register("message")} placeholder="Message" required/>
                    <input className='venture-contactUs-btn'  type="submit" />
                  
                   </div>
                   
                    
                </form>

                </div>

                <div className='right'>
                    <img className='img-fluid' src={handShak} alt="" />
                </div>
           </div>
            </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default JointVenture;