import React from 'react'

const FutureHouse = () => {
    return (
        <>
            <section className='future-house'>
                <div className='container'>
                    <span>future house</span>
                    <p className='house-cont'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div className='icon mb-3'>
                                <i class="fas fa-swatchbook"></i>
                            </div>
                            <div className='icon-txt'>
                                <h5>Interior Design</h5>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='icon mb-3'>
                                <i class="fas fa-swatchbook"></i>
                            </div>
                            <div className='icon-txt'>
                                <h5>Landscape Design</h5>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='icon mb-3'>
                                <i class="fas fa-swatchbook"></i>
                            </div>
                            <div className='icon-txt'>
                                <h5>Home Interior</h5>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FutureHouse