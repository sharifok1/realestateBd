import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import applyImg from '../../../asset/applyImg.jpg'
import TextField from '@mui/material/TextField';
import {Input} from '@mui/material';
import Button from '@mui/material/Button';

const JobApply = () => {
    const [names, setNames] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [exp, setExp] = useState('');
    const [resume, setResume] = useState(null);
console.log(resume)
    // const { register, handleSubmit } = useForm();
    const handleSubmit = e =>{
        // e.preventDefault();
        const formData = new FormData();
        formData.append(names,'names')
        formData.append(number,'number')
        formData.append(email,'email')
        formData.append(position,'position')
        formData.append(exp,'exp')
        formData.append(resume,'resume');

        fetch('https://secure-cove-36711.herokuapp.com/application', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(result => {
            console.log('Success:', result);
          })
          .catch(error => {
            console.error('Error:', error);
          })};

    // const onSubmit = data =>setJobdata(data);
    // console.log(jobdata)
   


    return (
        <div className='text-dark'>
          
          <div className='joint-venture-contact-container'>
            <Container>
                <h1 className='joint-contact-heading'>Apply Now</h1>
            <div className='jointVentureContuct'>
                <div className='left'>
                <form onSubmit={handleSubmit()}>
                   <div className='venture-contactUs-wraper pt-5'>
                   <TextField  
                     style={{
                         width:'310px',
                         marginTop:'15px'
                     }}
                    label="Full Name" 
                    variant="outlined" 
                    onChange={e => setNames(e.target.value)}
                    required
                    />
                   <TextField  
                   style={{
                    width:'310px',
                    marginTop:'15px'
                }}
                    label="Phone Number" 
                    variant="outlined" 
                    onChange={e => setNumber(e.target.value)}
                    required
                    />
                   <TextField  
                   style={{
                    width:'310px',
                    marginTop:'15px'
                }}
                    label="Email Address" 
                    variant="outlined" 
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    required
                    />
                   <TextField  
                   style={{
                    width:'310px',
                    marginTop:'15px'
                }}
                    label="Apply For The Position" 
                    variant="outlined" 
                    onChange={e => setPosition(e.target.value)}
                    required
                    />
                   <TextField  
                   style={{
                    width:'310px',
                    marginTop:'15px'
                }}
                    label="Year of Experience" 
                    variant="outlined" 
                    onChange={e => setExp(e.target.value)}
                    required
                    />

                   <Input 
                   style={{
                    width:'310px',
                    paddingTop:'20px'
                }}
                    type='file' 
                   accept='application/pdf'
                   onChange={e => setResume(e.target.files[0])}
                     />
                   
                    <Button 
                    style={{
                        width:'310px',
                        // paddingTop:'10px'
                        marginTop:'20px'
                    }}
                    variant="contained"
                    type='submit'
                    >
                         Submit Application
                    </Button>

                    {/* <input className='venture-contactUs-field' {...register("fullName")} placeholder="Full Name" required/>
                    <insName='put clasventure-contactUs-field' {...register("phoneNumber")} placeholder="Phone Number" required/>
                    <input className='venture-contactUs-field' {...register("email")} placeholder="Email Address" required/>
                    <input className='venture-contactUs-field' {...register("applyForThePosition")} placeholder="Apply For The Position" required/>
                    <input className='venture-contactUs-field' {...register("expYear")}  placeholder="Year of Experience" required/> */}
                   {/* <div
                   style={{
                       textAlign:'left',
                       marginLeft:'-28%',
                       paddingTop:'20px',
                       marginBottom:"-15px"

                   }}
                   >Upload your upadated resume</div>
                    <input type='file' accept="application/msword,
                    application/pdf"
                    className='venture-contactUs-field' {...register("resume")}  id="file" name="file" required/>
                    <input className='venture-contactUs-btn'  type="submit" /> */}
                  
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