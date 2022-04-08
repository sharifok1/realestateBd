import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import './ContactLandowoner.css'
const ContactLandowoner = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <NavBars/>
            <div className='landWoner'>   
                  <p>LANDOWNER <br /></p>          
           </div>

           <div className='contact-topbanner'> 
               <div className='landwoner-top-left'>
                   <h1>BUILD YOUR SANCTUARY WITH CREDIBILITY</h1>
                   <p>
                     Integrity and trust are two of the most sought after attributes that landowners look for in developers. It can be quite overwhelming to entrust your years of hard work to someone you have not worked with before and look forward to the development of an enclave of discreet prestige that would resonate your distinctive identity.
                     Edison Real Estate works in close association with each and every landowner to mitigate the multifaceted problems arising from the development process and deliver affordable living and corporate spaces with supreme conveniences. We ensure integrity and effective planning through the entire construction process and offer you a place with exquisite workmanship that creates true value for your investment.
                   </p>
               </div>
               <div className='landwoner-top-right'>
                   <img src="https://edisonrealestatebd.com/admin/uploads/page/landowner/850x750/1614765883BRge2_m.jpg" alt="" />
               </div>
           </div>

           {/*====================== meet professional from */}
           <Container className='pb-5'>
               <div className='from-heading'>
               <h1>MEET THE PROFESSIONALS</h1> <br />
                <h2>Land Information</h2>
               </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className='contactUs-from-one'>
                        <input className='contactUs-field-landInfo' {...register("landInfoLoyality")} placeholder="Locality"  required/>
                        <input className='contactUs-field-landInfo' {...register("landInfoAddress")} placeholder="Address" required/>
                        <input className='contactUs-field-landInfo' {...register("landInfoSizeOfLand")} placeholder="Size Of the Land in Kathas" required/>
                        <input className='contactUs-field-landInfo' {...register("landInfoWidthRoad")} placeholder="Width Of the Road In Front(In feet)" required/>
                        <select className="contactUs-field-landInfo" {...register("landInfoCatagory")}>
                            <option value="SelectCategory">Category</option>
                            <option value="Freehold">Freehold</option>
                            <option value="Leasehold">Leasehold</option>  
                        </select>
                        <select className="contactUs-field-landInfo" {...register("landInfoFacing")}>
                            <option value="SelectFacing">Select Facing</option>
                            <option value="East">East</option>
                            <option value="West">West</option>  
                            <option value="North">North</option>  
                            <option value="South">South</option>  
                        </select>
                        <select className="contactUs-field-landInfo" {...register("landInfoAttractiveFeatures")}>
                            <option value="Attractive Features (if Any)">Attractive Features (if Any)</option>
                            <option value="LakeSide">LakeSide</option>
                            <option value="CornerPlot">CornerPlot</option>  
                            <option value="ParkView">ParkView</option>  
                            <option value="MainRoad">MainRoad</option>  
                            <option value="Others">Others</option>  
                        </select>
                   
                   
                   
                   </div>
                   <div className='heading-two'>
                       <h2>Landoweners Information</h2>
                   </div>
                   <div className='contactUs-from-one'>
                       <input className='contactUs-field-landInfo' {...register("landWonerInfoName")} placeholder="Name of Landowner"  required/>
                        <input className='contactUs-field-landInfo' {...register("landWonerInfoContactPer")} placeholder="Contact Persont (if Different From The landowner)"/>
                        <input className='contactUs-field-landInfo' {...register("landWonerInfoEmail")} placeholder="Email Id" required/>
                        <input className='contactUs-field-landInfo' {...register("landWonerInfophoneNumber")} placeholder="Contact Number" required/>
                   </div>

                   <input className='contactUs-btn-land'  type="submit" />
                </form>
           </Container>
           <Footer/>
        </div>
    );
};

export default ContactLandowoner;