import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='pb-5'>
                <h1
                    style={{
                        color:' #003a71',
                        fontWeight:'800',
                        textAlign:'start',
                        paddingTop:'50px'
                    }}
                    >FREQUENTLY ASKED QUESTIONS </h1><br /> <br />
                        <div class="accordion-wrapper">
                        <div class="accordion">
                            <input className='acc-radio' type="radio" name="radio-a" id="acc1" checked/>
                            <label class="accordion-label" for="acc1">When will you take the possession/handover for construction work?</label>
                            <div class="accordion-content">
                            <p>The topic of handover is subject to shared awareness between developer and landowner. Generally, the possession/ handover is required after the authority involved has accepted the proposal.</p>
                            </div>
                        </div>
                        <div class="accordion">
                            <input className='acc-radio' type="radio" name="radio-a" id="acc2" checked/>
                            <label class="accordion-label" for="acc2">What are the factors for getting the plan's approval?</label>
                            <div class="accordion-content">
                            <p>The final approval authorities for the proposal are RAJUK and the Cantonment Board (Dhaka). Approval of the proposal depends on different considerations, such as building height, standard project or special project, apartment number, road width, approval of the authority concerned (civil aviation, traffic, DMP, environment, etc.), township planning department requirements, leasehold property or freehold property, land status.</p>
                            </div>
                        </div>

                        <div class="accordion">
                            <label class="accordion-label" for="acc3">What are the spaces that are known as common space?</label>
                            <input className='acc-radio' type="radio" name="radio-a" id="acc3" checked/>
                            <div class="accordion-content">
                            <p>Spaces such as lift lobby, staircase room, lift machine room, generator room, substation room, caretaker's room, guard room, and other general facilities such as exercise space, prayer room, library room, visitor waiting area, reception area, etc. are considered common space in compliance with the Real Estate Management Act 2010.</p>
                            </div>
                        </div>

                        <div class="accordion">
                            <label class="accordion-label" for="acc4">Are you measuring materials or the quality of concrete?</label>
                            <input className='acc-radio' type="radio" name="radio-a" id="acc4" checked/>
                            <div class="accordion-content">
                            <p>To ensure that all the components used are of the highest quality, Edison conducts suitable testing. The materials (steel bar) and concrete strength are also evaluated by Edison.</p>
                            </div>
                        </div>

                        <div class="accordion">
                            <label class="accordion-label" for="acc5">How can you guarantee the quality of construction?</label>
                            <input className='acc-radio' type="radio" name="radio-a" id="acc5" checked/>
                            <div class="accordion-content">
                            <p>Edison meets all rules and standards, uses the highest level of materials, and goes above that by introducing technologies that make construction more resistant to earthquakes. Both of these mean that a healthy home of excellent design standard is your house. We really deeply appreciate our customers visiting the site during construction to see for themselves the efficiency.</p>
                            </div>
                        </div>
                        </div>
        </div>
    );
};

export default Faq;