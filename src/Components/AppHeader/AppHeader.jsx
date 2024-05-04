import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import './AppHeader.css';
// import {Row,Col,Form,InputGroup,} from 'react-bootstrap';
  
const AppHeader = () => {
    const [searchParam, setSearchParam ] = useState('');
    const navigate = useNavigate();
    const formSubmit = (e) =>{
        e.preventDefault();
        navigate(`/${searchParam}`);
    };
    useEffect(
        () => (
            searchParam === ''
                ? navigate('/')
                : navigate(`/${searchParam}`)
        ),
        [searchParam]
    );
  return (
    <div className='nav'>
    <div className='navLeft'>
        <Link className='link' to='/'>
            <h2>
            <FaGithub  className='logo'/>
            <span>
                GitSearch
            </span>
            </h2>
        </Link>
    </div>
    <div className='navRight'>
        <div className='searchBox'>
            <input type='text' placeholder='Enter username' onChange={(e) => setSearchParam(e.target.value)}  className='box'/>
        </div>
    </div>
    </div>
  )
}

export default AppHeader;