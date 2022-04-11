import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import './BlogDetails.css';
import { useForm } from "react-hook-form";
import FbMsgChat from '../../Shared/FbMessengerChat/FbMsgChat';
const BlogDetails = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    const [details, setDetails] = useState([]);
    useEffect(()=>{
    const url = 'https://secure-cove-36711.herokuapp.com/blogData';
      fetch(url)
     .then(res=>res.json())
     .then(data=> setDetails(data))
    },[])
    
   
    const {blogId} = useParams()
   
       const fullBlog = details?.find((projectDetals)=>projectDetals._id === blogId);
      console.log(fullBlog);
    return (
        <div>
            <NavBars/>

            <div className='blog-details-baner'
            style={{
                backgroundImage:`url(${fullBlog?.imgOne})`
            }}
            >
                <p>{fullBlog?.date}</p>
            </div>
            <Container>
              <div  className='blog-details-wraaper'>
              <div className='mt-5 mb-3 blog-title'>
                    <p>{fullBlog?.blogTitle}</p>
                    <h3>{fullBlog?.subTitle}</h3>
                </div>
                <div className='mt-5 text-dark'>
                    <p>{fullBlog?.intro}</p>
                </div>
                <div className='text-dark mt-4 mb-2'>
                    <h5>{fullBlog?.textheadingOne}</h5>
                    <p>{fullBlog?.paragraphOne}</p>
                    <img className='img-fluid' src={fullBlog?.imgOne} alt="" />
                </div>
                <div className='text-dark mt-4 mb-2'>
                    <h5>{fullBlog?.textheadingTwo}</h5>
                    <p>{fullBlog?.paragraphTwo}</p>
                    <img className='img-fluid' src={fullBlog?.imgTwo} alt="" />
                </div>
                <div className='text-dark mt-4 mb-4'>
                    <h5>{fullBlog?.textheadingThree}</h5>
                    <p>{fullBlog?.paragraphThree}</p>
                    <img className='img-fluid' src={fullBlog?.imgThree} alt="" />
                </div>
               
               {/* comment section */}
                {/* <div className='text-dark w-80 border p-4'>
                    <div>
                        <h5>Md. Shariful Islam</h5>
                        <p>{fullBlog?.userComment}</p>
                    </div>
                </div> */}
                
                {/* add comment// */}
                {/* <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className='blog-comment-form'>
                 <textarea  {...register("Comment")} placeholder="Comment" required/>
                    <input  {...register("Name")} placeholder="Name" required/>
                    <input  {...register("E-mail")} placeholder="E-mail" />
                    <input  {...register("Website")}  placeholder="Website" />
                   
                    <input className='comment-submit-btn'  type="submit" placeholder='Add Comment'/>
                  
                   </div>
                   
                    
                </form>
                </div> */}
              </div>
            </Container>

            <Footer/>
            <FbMsgChat/>
        </div>
    );
};

export default BlogDetails;