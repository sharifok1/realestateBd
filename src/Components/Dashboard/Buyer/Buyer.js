import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Buyer = () => {
    const [buyer, setBuyer] = useState([])
    useEffect(()=>{
        const url = 'https://secure-cove-36711.herokuapp.com/buyer'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBuyer(data))
    },[])
console.log(buyer)

    const handleDeleteLandOwner = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?", id);
        console.log(id);
        if (proceed) {
          const url = `https://secure-cove-36711.herokuapp.com/buyer/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log(id);
                alert("Deleted Successfully!");
                const remainingProducts = buyer.filter(
                  (product) => product._id !== id
                );
                setBuyer(remainingProducts);
              }
            });
        }
      };

    return (
        <div>
            <h1 className='text-dark'>Land Owner Information</h1>

            <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
                      {
                buyer.map((buyers)=><div
                key={buyers._id}
                >   
                       <Col>
                        <div className='text-dark job-card'>
                            <h1>Buyer Request</h1>
                               <h4>Preferred Location: {buyers?.preferredLoction}</h4>
                               <h6>Preferred Size: {buyers?.preferredSize}</h6>
                               <h6>Expected HandOver Date:{buyers?.expectedHandoverDate}</h6>
                               <h6>Preferred Floor: {buyers?.landInfoWidthRoad}</h6>
                               <h6>Minimum Number of BedRooms: <br /> {buyers?.numOfBedRooms}</h6>
                               <h6>Car Parking: {buyers?.carParkingReq}</h6>
                               <h6>Facing: {buyers?.landInfoFacing}</h6>
                               <br />
                               <h1>Contact Information</h1>
                               <h6>Name: {buyers?.buyerName}</h6>
                               <h6>Profession: {buyers?.buyerProfession}</h6>
                               <h6>Email: {buyers?.buyerEmail}</h6>
                               <h6>Contact Number: {buyers?.buyerNumber}</h6>
                               <h6>Malling Address: {buyers?.MaillingAddress}</h6>
                               <button className='job-details-btn' 
                               onClick={() => handleDeleteLandOwner(buyers._id)}
                               >Delete</button>    
                        </div>
                        </Col>
                        
                    </div>)}
                 </Row>

        </div>
    );
};

export default Buyer;