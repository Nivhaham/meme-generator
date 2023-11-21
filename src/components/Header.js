import React from 'react'
import frog from '../images/frog.png'
export default function Header() {
    return (
        <div className='header'>
            <img src={frog} className='header--image' alt='frog meme' />
            <h1 className='header--title'>Meme Generator </h1>
            <h3 className='header--project'>Niv's Meme Project</h3>
        </div>
    )
}