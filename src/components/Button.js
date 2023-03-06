import React from 'react'

const Button = () => {
    return (
        <div className='container position-relative'>
            <button className="go-to-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                <i class="fas fa-angle-up"></i>
            </button>
        </div>
    )
}

export default Button