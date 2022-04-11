import React, { useEffect, useState } from 'react';
// import { Box } from '@mui/system';
import { Grid } from '@mui/material';
const JobApplication = () => {
    const [application, setApplication]=useState([]);
    useEffect(()=>{
        const url = 'https://secure-cove-36711.herokuapp.com/application'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setApplication(data))
    },[])
    console.log(application)
   
    const handleDeleteApplication = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?", id);
        console.log(id);
        if (proceed) {
          const url = `https://secure-cove-36711.herokuapp.com/application/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log(id);
                // alert("Deleted Successfully!");
                const remainingProducts = application.filter(
                  (product) => product._id !== id
                );
                setApplication(remainingProducts);
              }
            });
        }
      };
    return (
        <div>
        
            <div sx={{ flexGrow: 1 ,}}>
            <h1 className='text-dark'>total Application: {application.length}</h1>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md:12 }}>
                    {application.map(applications => (
                    <Grid item xs={12} sm={6} md={4} key={applications._id}>
                      
                        <div sx={{m:4}}
                        style={{backgroundColor:'#aaa', padding:'10px'}}
                        > 
                        <h4>Candidate Name: {applications?.names}</h4>
                        <h4>Email: {applications?.email}</h4>
                        <h4>Phone Number: {applications?.number}</h4>
                        <h4>Application for: {applications?.position}</h4>
                        <h4>Experience:{applications?.exp} years</h4>
                        {/* <iframe src={`${application?.resume}`} style={{width:'auto', height:'auto'}} frameborder="0"></iframe> */}
                        {/* <encode src={`data:resume;base64,${applications?.resume}`} width="100%" height="auto" alt='' /> */}
                      
                        <embed
                            src={`'base64'${applications?.resume}`}
                                type="application/pdf"
                                frameBorder="0"
                                scrolling="auto"
                                height="100%"
                                width="100%"
                            ></embed>
                             <button className='job-details-btn' 
                               onClick={() => handleDeleteApplication(applications?._id)}
                               >Delete</button> 
                        </div>
                       
                    </Grid>
                    ))}
                </Grid>
                </div>
        </div>
    );
};

export default JobApplication;