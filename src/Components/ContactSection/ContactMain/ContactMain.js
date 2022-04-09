import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import handShak from '../../../asset/handShak.jpg';
import './ContactMain.css'
import Faq from './Faqs/Faq';
import FbMsgChat from '../../Shared/FbMessengerChat/FbMsgChat';
const ContactMain = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
            <NavBars/>
            <div className='contactBanner'>   
                  <p>Contact Us <br /></p>          
           </div>
           {/*========================================================== map// */}
           <div className='mapSection-wraper'>
                <div className='map-left'>
                    <h1
                    style={{
                        color:' #003a71',
                        fontWeight:'700',
                    }}
                    >KEEP IN TOUCH   </h1><br /> <br />
                    
                    <div className='contact-location'>
                    <p><i class="fa-solid fa-location-dot"></i>  Rangs Babylonia, Level 9, 246, Bir Uttam Mir Shawkat Road, Tejgaon I/A, Dhaka-1208</p>

                    <p><i class="fa-solid fa-phone"></i>  +88017 59 59 59 73</p>

                    <p><i class="fa-solid fa-envelope"></i> hello@edisonrealestatebd.com</p> 
                    </div>
                  
                    <br />
                    <p
                    style={{
                        color:'#000'
                    }}>

                    </p>
                </div>
            <div className='map-right'>
               <iframe 
                className='contact-map'
                   loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.654953271773!2d90.4025746150671!3d23.795298384567346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e58231045d%3A0x207b1dae7bff2d69!2sDomicile%20Design%20%26%20Builders%20Ltd.!5e0!3m2!1sen!2sbd!4v1648866995296!5m2!1sen!2sbd"
                    >

               </iframe>
            </div>
        </div>
          {/*========================================================== FAQs // */}
        <Container>
        <Faq/>
        </Container>

        <div className='joint-venture-contact-container'>
            <Container>
            <h1
                    style={{
                        color:' #003a71',
                        fontWeight:'800',
                        textAlign:'start',
                        paddingTop:'50px',
                        marginBottom:'-50px'
                    }}
                    >Contact Us </h1><br /> <br />
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
        <FbMsgChat/>
        </div>
    );
};

export default ContactMain;