import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { PiVideoThin } from "react-icons/pi";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import logo from './logo.jpeg';
import './Sidebar.css'


const Sidebar = function ({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <CiHome style={{ color: 'purple' }} />
        },
        {
            path: "/PracticeQuestion",
            name: "Practice_Question",
            icon: <AiOutlineRead style={{ color: 'purple' }} />
        },
        {
            path: "/ChapterWiseTest",
            name: "Chapter_wise_test",
            icon: <AiOutlineProfile style={{ color: 'purple' }} />
        },
        {
            path: "/ConceptVideos",
            name: "Concept_videos",
            icon: <PiVideoThin style={{ color: 'purple' }} />
        },
        {
            path: "/Bookmarks",
            name: "Bookmarks",
            icon: <PiBookmarkSimpleThin style={{ color: 'purple' }} />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "70px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
                        <AiOutlineMenu style={{ color: 'grey', marginLeft: "10px" }} onClick={toggle} />
                    </div>
                    <img src={logo} style={{ width: isOpen ? "130px" : "130px", marginLeft: "20px" }} />
                    <div className='barsInend'>
                        <div className="studentinfo">
                            <h4>StudentName</h4><p>Student-Class-Info</p>
                        </div>
                        <div className='onClickProfile'>
                         <RiProfileLine className='Profileicon'/>
                        </div>
                    </div>
                </div>
                <div onMouseOver={() => { if (!isOpen) setIsOpen(!isOpen); }} style={{ display: isOpen ? 'inline' : 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }} className='bottom_section'>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{ borderRadius: isOpen ? "5px" : "50%" }}>
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none", fontSize: "15px" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main style={{background:isOpen?"grey":"#fff"}}>{children}</main>
        </div>
    );
};

export default Sidebar;