import React from 'react';
import './Home.css'
import { FaCheckCircle } from "react-icons/fa";
import { TbCircleDotted } from "react-icons/tb";


const Dashboard = () => {
    return (
        <div className='Pages'> 
            <div className="welcome">
                <div className="welcomemsg">
                    <h1>Welcome Student</h1>
                    <p>Let's start learning!</p>
                </div>
                <div className='welcometrack'>
                    <div className="taketour icon"><FaCheckCircle style={{fontSize:"30px"}}/>
                    <p>Take a tour</p></div>
                     <div className="bookatrial icon"><TbCircleDotted style={{fontSize:"30px"}}/>
                     <p>Book a trial class</p></div>
                     <div className="Askdoubt icon"><TbCircleDotted style={{fontSize:"30px"}}/>
                     <p>Ask your Doubt</p></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;