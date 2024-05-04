import React from 'react'
import './AppFooter.css';

const AppFooter = () => {
    return(
        <div style={{ position:'fixed',
            left : '0',
            bottom: '10px',
            width: '100%',
            border: '20px solid white',
            backgroundColor:'black',
            color: 'white',
            textAlign: 'center',
            padding: '10px 0',
            zIndex: '100'
        }}>
            <a 
            className='footer' 
            href='https://github.com/Rohit-Dumka/GitSearch'
            target='_blank'
            rel="noreferrer"
            >
            <div className='name'>
                <h5 className='text'>
                    &copy; Rohit Dumka
                </h5>
            </div>
            </a>
        </div>
    )
}

export default AppFooter;