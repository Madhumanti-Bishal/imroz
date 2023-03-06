import React from 'react'
import CountUp from 'react-countup';

const Count = () => {
    return (
        <>
            <section className='count text-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-6'>
                            <h4>
                                <CountUp end={660} duration={5} />
                            </h4>
                            <p>Happy Clients</p>
                        </div>
                        <div className='col-md-3 col-6'>
                            <h4>
                                <CountUp end={894} duration={5} />
                            </h4>
                            <p>Stores</p>
                        </div>
                        <div className='col-md-3 col-6'>
                            <h4>
                                <CountUp end={500} duration={5} />
                            </h4>
                            <p>Awwards</p>
                        </div>
                        <div className='col-md-3 col-6'>
                            <h4>
                                <CountUp end={640} duration={5} />
                            </h4>
                            <p>Awesome Feature</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Count