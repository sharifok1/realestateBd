import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactRequest = () => {
    const [contact, setContact] = useState([])
    useEffect(()=>{
        const url = 'https://secure-cove-36711.herokuapp.com/contactRequest'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setContact(data))
    },[])

console.log(contact)
    const handleDeleteAppoinment = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?", id);
        console.log(id);
        if (proceed) {
          const url = `https://secure-cove-36711.herokuapp.com/contactRequest/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log(id);
                alert("Deleted Successfully!");
                const remainingProducts = contact.filter(
                  (product) => product._id !== id
                );
                setContact(remainingProducts);
              }
            });
        }
      };
    return (
        <div>
            <h1 className='text-dark'>User Contact Request</h1>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
                      {
                contact.map((contacts)=><div
                key={contacts._id}
                >
                  
                       <Col>
                        <div className='text-dark job-card'>
                               <h4>Land Area: {contacts?.landArea}</h4>
                               <h6>Number of Land Owner: {contacts?.numberOfLandOwner}</h6>
                               <h6>Full Name:{contacts?.fullName}</h6>
                               <h6>Phone Number:{contacts?.phoneNumber}</h6>
                               <h6>Email:{contacts?.email}</h6>
                               <br />
                               <h6>Message: <br /> {contacts?.message}</h6>
                               <button className='job-details-btn' 
                               onClick={() => handleDeleteAppoinment(contacts._id)}
                               >Delete</button>    
                        </div>
                        </Col>
                        
                    </div>)}
                 </Row>
        </div>
    );
};

export default ContactRequest;