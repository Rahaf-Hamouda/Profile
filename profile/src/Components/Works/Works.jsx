import './Works.css';
import login from '../../assets/login.png';
import card from '../../assets/card.png';
import de6 from '../../assets/de6.png';
import { useState } from 'react';
import HTML from '../HTML/HTML';
import WordPress from '../WordPress/WordPress';
import React from '../React/React';


const Works = () => {
    
        const [showPortfolio, setShowPortfolio] = useState(false);
        const [showHTML, setShowHTML] = useState(false);
        const [showReact, setShowReact] = useState(false);
        return (
            <>
                <section id="works">
                    <h2 className="workstitle">My Portfolio</h2>
                    <span className="worksDesc">I take pride in paying attentionto the smallest details</span>
                    <div className="container_all">
                        <div className="card_container">
                            <div className="card_title">
                                <h2>WordPress Project</h2>
                                <div className="image_container">
                                    <img src={de6} alt="" className="worksImg" />
                                </div>
                                <button className="worksBtn" onClick={() => setShowPortfolio(!showPortfolio)}>See More</button>
                            </div>
                        </div>
                        {showPortfolio && <WordPress />}
                        <div className="card_container">
                            <div className="card_title">
                                <h2>HTNL & CSS Project</h2>
                                <div className="image_container">
                                    <img src={card} alt="" className="worksImg" />
                                </div>
                                <button className="worksBtn" onClick={() => setShowHTML(!showHTML)}>See More</button>
                            </div>
                        </div>
                        {showHTML && <HTML />}
                        <div className="card_container">
                            <div className="card_title">
                                <h2>ReactJS Project</h2>
                                <div className="image_container">
                                    <img src={login} alt="" className="worksImg" />
                                </div>
                                <button className="worksBtn" onClick={() => setShowReact(!showReact)}>See More</button>
                            </div>
                        </div>
                        {showReact && <React />}
                    </div>
                </section>
            </>
        );
    }
export default Works;
  