import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
const ApponitmentReq = () => {
    const [appointments, setAppointmets] = useState([])
    useEffect(()=>{
        const url = 'https://secure-cove-36711.herokuapp.com/appoinment'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppointmets(data))
    },[])


    const handleDeleteAppoinment = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?", id);
        console.log(id);
        if (proceed) {
          const url = `https://secure-cove-36711.herokuapp.com/appoinment/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log(id);
                alert("Deleted Successfully!");
                const remainingProducts = appointments.filter(
                  (product) => product._id !== id
                );
                setAppointmets(remainingProducts);
              }
            });
        }
      };

    return (
        <div className='text-dark'>
            <h1>Appoinment Request</h1>
          <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
                      {
                appointments.map((appointment)=><div
                key={appointment._id}
                >
                  
                       <Col>
                        <div className='text-dark job-card'>
                               <h4>Name: {appointment?.Name}</h4>
                               <h6>Phone Number: {appointment?.PhoneNum}</h6>
                               <h6>Email:{appointment?.email}</h6>
                               <h6>Time: {appointment?.time}</h6>
                               <button className='job-details-btn' 
                               onClick={() => handleDeleteAppoinment(appointment._id)}
                               >Delete</button>    
                        </div>
                        </Col>
                        
                    </div>)}
                 </Row>
        </div>
    );
};

export default ApponitmentReq;