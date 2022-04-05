import React from 'react';
import { Container } from 'react-bootstrap';
import chairmanImg from '../../../asset/chairman.jpg'
import './ChairmanSpc.css'
const ChairmanSpc = () => {
    return (
        <div>
            <div  className='chairman-section'>
            <Container>
                <div className='chairmen-details'>
                    <div className='chairman left'>
                        <p
                         style={{color:'#444',fontWeight:'600'}}
                        >CHAIRMAN</p>
                        <p className='chairman-name'>MD. AMINUR RASHID</p>
                        <p className='chairman-space'>
                        Edison Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population. We clearly understand the need for more trusted and reliable companies in the real estate sector. <br />

                        Companies will fill up this vacuum in the market and there will be a continuous effort to delight customers. We are a competent and motivated group of people, suppliers, and partners who will work closely to ensure strict processes and policies are followed in order to provide complete and consistent customer values. We will listen to our customers to drive continuous improvement and serve them with premium service in every way possible.
                        </p>
                    </div>
                    <div className='chairman right'>
                        <img className='img-fluid' src={chairmanImg} alt="" />
                    </div>
                </div>
                </Container>
                </div>
                {/* Chairman personal details//// */}
               <div className='intro-wraper'>
             
                   <div className='chairman-personal-intro'>
                    <div className='introduce-left'>
                        <p className='introduce-left'>Let's <br /> Introduce Our <br />Chairman</p>
                    </div>
                    <div className='introduce-right'>
                        <p>
                        Md Aminur Rashid is an entrepreneur operating in diversified fields. After obtaining his MBA from Institute of Business Administration (IBA), the top business school in Bangladesh, he worked for 12 years with Siemens AG’s Bangladesh office, then started his own business that reached 300 million USD turnover in a short period of time. <br />

                        Emerging Credit Rating Agency has rated Edison Group “AA+” due to its strength in corporate governance, finance, management, and business processes. He is the co-founder of Symphony Brand, a market leader in Bangladesh that has been rated the top mobile phone brand in Bangladesh for 3 consecutive years. Out of many other startups and new ventures, two are worth mentioning: One is the leading e-commerce company, Pickaboo, in 2017 and 2018 rated the best e-commerce site in Bangladesh by Brand Forum due to trust and customer satisfaction; another is the recently launched footwear factory taking orders for shoes from brands including Deichmann, Fila, H&M, Decathlon, Aldo, Gap, and Merrel. Aminur Rashid and his Edison Group’s continued success in different business areas reflect the tremendous potential of Bangladesh. <br />

                        </p>
                    </div>
                </div>
              
               </div>
           
         
        </div>
    );
};

export default ChairmanSpc;