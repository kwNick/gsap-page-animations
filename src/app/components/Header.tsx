import React from 'react'
import TransitionLink from './TransitionLink'

const Header = () => {
    return (
        <div className='flex items-center justify-between my-5'>
            <h2>Rythm</h2>
            <div className=''>
                <TransitionLink href='/' label="Home" />
                <TransitionLink href='/about' label="About" />
                <TransitionLink href='/work' label="Work" />
            </div>
        </div>
    )
}

export default Header