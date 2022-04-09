import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Fade } from 'react-reveal';
import FbMsgChat from '../../Shared/FbMessengerChat/FbMsgChat';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import './ContactBuyer.css'

const ContactBuyer = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        const url = 'http://localhost:5000/buyer'
          axios.post(url, data)
          .then(res=>{
              if(res.data.insertedId){
                alert('We recived your information. Thank you')
                  reset();
              }
          })}

    return (
        <div>
            <NavBars/>
            <div className='buyer'>   
                    <Fade>
                    <Fade left>
                       <p>Buyer <br /></p>    
                       </Fade>
                    </Fade>      
           </div>

           <div className='contact-topbanner'> 
                <div className='landwoner-top-right'>
                   <img src="https://edisonrealestatebd.com/admin/uploads/page/buyer/850x750/161476606106mi8_m.jpg" alt="" />
               </div>
               <div className='landwoner-top-left'>
                   <h1>INVEST FOR A BETTER TOMORROW</h1>
                   <p>
                    In the pursuit for an asset that epitomizes luxury and individualistic style, people opt to invest time in years of savings. This communicates a sense of value in the investment that they make for what they would call their “own”. Hence, we want to ensure your life-long saving pays off with the optimal outcome and that you find peace within the walls of your sanctuary.
                    Edison Real Estate enhances your experience of home purchase through distinguished services, unique features, unsurpassed quality in materials and fittings; and contemporary architecture and design. We put substantial emphasis on research and planning which allows us to develop spaces that properly meet market needs and pervades all elements of comfort, opulence and most importantly individualism.
                   </p>
               </div>
               
           </div>

           {/*====================== meet professional from */}
           <Container className='pb-5'>
               <div className='from-heading'>
               <h1>MEET THE PROFESSIONALS</h1> <br />
                <h2>Your Valued Interest & Preferences</h2>
               </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className='contactUs-from-one'>
                        <input className='contactUs-field-landInfo' {...register("preferredLoction")} placeholder="preferred Loction"  required/>
                        <input className='contactUs-field-landInfo' {...register("preferredSize")} placeholder="Preferred Size * (Square Feet)" required/>
                        <input className='contactUs-field-landInfo' {...register("expectedHandoverDate")} placeholder="Expected Handover Date" required/>
                        <input className='contactUs-field-landInfo' {...register("preferredFloor")} placeholder="Preferred Floor" required/>
                        <input className='contactUs-field-landInfo' {...register("numOfBedRooms")} placeholder="Minimum Number Of BedRooms" required/>
                        <select className="contactUs-field-landInfo" {...register("carParkingReq")}>
                            <option value="carParkingRequirment">Car Parking Requirment</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>  
                        </select>
                        <select className="contactUs-field-landInfo" {...register("landInfoFacing")}>
                            <option value="SelectFacing">Facing Of the Apartment</option>
                            <option value="East">East</option>
                            <option value="West">West</option>  
                            <option value="North">North</option>  
                            <option value="South">South</option>  
                        </select>
                       
                   
                   
                   
                   </div>
                   <div className='heading-two'>
                       <h2>Contact Information</h2>
                   </div>
                   <div className='contactUs-from-one'>
                       <input className='contactUs-field-landInfo' {...register("buyerName")} placeholder="Name*"  required/>
                        <input className='contactUs-field-landInfo' {...register("buyerProfession")} placeholder="Profession* " required/>
                        <input className='contactUs-field-landInfo' {...register("buyerEmail")} placeholder="Enter your Email*" required/>
                        <input className='contactUs-field-landInfo' {...register("buyerNumber")} placeholder="Contact Number*" required/>
                        <input className='contactUs-field-landInfo' {...register("MaillingAddress")} placeholder="Mailing Address*" required/>
                   </div>

                   <input className='contactUs-btn-land'  type="submit" />
                </form>
           </Container>
           <Footer/>
           <FbMsgChat/>
        </div>
    );
};

export default ContactBuyer;
