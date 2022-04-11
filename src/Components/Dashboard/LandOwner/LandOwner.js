import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const LandOwner = () => {
    const [landOwner, setLandOwner] = useState([])
    useEffect(()=>{
        const url = 'https://secure-cove-36711.herokuapp.com/landWoner'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLandOwner(data))
    },[])
console.log(landOwner)

    const handleDeleteLandOwner = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?", id);
        console.log(id);
        if (proceed) {
          const url = `https://secure-cove-36711.herokuapp.com/landWoner/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log(id);
                alert("Deleted Successfully!");
                const remainingProducts = landOwner.filter(
                  (product) => product._id !== id
                );
                setLandOwner(remainingProducts);
              }
            });
        }
      };

    return (
        <div>
            <h1 className='text-dark'>Land Owner Information</h1>

            <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
                      {
                landOwner.map((landOwners)=><div
                key={landOwners._id}
                >   
                       <Col>
                        <div className='text-dark job-card'>
                            <h1>Land Information</h1>
                               <h4>Locality: {landOwners?.landInfoLoyality}</h4>
                               <h6>Address: {landOwners?.landInfoAddress}</h6>
                               <h6>Land Size:{landOwners?.landInfoSizeOfLand}</h6>
                               <h6>Font Road: {landOwners?.landInfoWidthRoad}</h6>
                               <h6>Category: {landOwners?.landInfoCatagory}</h6>
                               <h6>Facing: {landOwners?.landInfoFacing}</h6>
                               <h6>AttractiveFeatures: {landOwners?.landInfoAttractiveFeatures}</h6>
                               <br />
                               <h1>Landoweners Information</h1>
                               <h6>Name of Landowner: {landOwners?.landWonerInfoName}</h6>
                               <h6>Contact Person: {landOwners?.landWonerInfoContactPer}</h6>
                               <h6>Email Id: {landOwners?.landWonerInfoEmail}</h6>
                               <h6>Contact Number: {landOwners?.landWonerInfophoneNumber}</h6>
                               <button className='job-details-btn' 
                               onClick={() => handleDeleteLandOwner(landOwners._id)}
                               >Delete</button>    
                        </div>
                        </Col>
                        
                    </div>)}
                 </Row>

        </div>
    );
};

export default LandOwner;