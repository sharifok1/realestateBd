import React from 'react';
import './MapSection.css'

const MapSection = ({address,locationUrl}) => {
    console.log(address)
    return (
        <div className='mapSection-wraper'>
                <div className='map-left'>
                    <h1
                    style={{
                        color:' #003a71',
                        fontWeight:'700',
                    }}
                    >PROJECT <br />
                    LOCATION
                    </h1> <br />

                    <p
                    style={{
                        color:'#000'
                    }}>{address}</p>
                </div>
            <div className='map-right'>

                    <iframe
                    style={{width:'100%', height:'100%',border:'0'}}
                    src={locationUrl} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default MapSection;