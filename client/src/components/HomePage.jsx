import React from 'react';

const HomePage = () => {
    return (
        <>
            <div>
                <div className='container bulletin'>

                    <h3>It's Almost Kitten Season!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <br /><br />

                <h1 className='roadmap'><strong>Roadmap</strong></h1>
                <br />
                <div className='parent'>


                    <div className='leftsibling'>
                        <img src="https://imgc.allpostersimages.com/img/posters/close-up-of-chinese-crested-dog-with-pink-mohawk-4-years-old-in-front-of-grey-background_u-L-Q1037TP0.jpg?artHeight=550&artPerspective=n&artWidth=550&background=ffffff" alt="Mr. Smooches image" />
                    </div>

                    <div className='rightsibling'>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum culpa qui officia deserunt mollit anim id est laborumsunt in culpa qui officia deserunt mollit anim id .</p>
                    </div>
            

                </div>
                <p className='smooches'><em>Mr. Smooches</em></p>
                <hr />
                <br /><br />

                <div className="parent">

                    <div className='hours'>
                        <h1>Hours of Operation</h1>
                        <hr />
                            <p>Sunday: <em>Closed</em></p>
                            <p>Monday: <em>9:00AM - 5:00PM</em></p>
                            <p>Tuesday: <em>9:00AM - 5:00PM</em></p>
                            <p>Wednesday: <em>9:00AM - 5:00PM</em></p>
                            <p>Thursday: <em>9:00AM - 5:00PM</em></p>
                            <p>Friday: <em>9:00AM - 5:00PM</em></p>
                            <p>Saturday: <em>9:00AM - 5:00PM</em></p>

                    </div>

                    <div className='events'>
                        <h1>Upcoming Events</h1>
                        <hr />

                        <h3>Adopt-A-Thon</h3>
                        <p style={{fontSize: "20px"}}><em>Friday, 4/8/22</em></p>
                        <br />

                        <h3>Two-Way Petting Zoo</h3>
                        <p style={{fontSize: "20px"}}><em>Monday, 4/11/22</em></p>
                        <br />

                        <h3>Lick-A-Thon</h3>
                        <p style={{fontSize: "20px"}}><em>Thursday, 4/14/22</em></p>
                        <br />
                    </div>

                </div>



            </div>
        </>
    );
};


export default HomePage;