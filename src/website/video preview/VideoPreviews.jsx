import React from 'react';
import login from '../../assets/videos/Login.mp4';
import signup from '../../assets/videos/Sign-up.mp4';
import filtertable from '../../assets/videos/filtertable.mp4';
import savesearchpage from '../../assets/videos/savesearchpage.mp4';
import subscriptionpage from '../../assets/videos/subscriptionpage.mp4';
import passwordreset from '../../assets/videos/passwordreset.mp4';
import profilepage from '../../assets/videos/profile.mp4';
import WebFooter from '../footer';
import WebNavbar from '../navbar';

const videoList = [
    { title: "Signup Page", videoSrc: signup },
    { title: "Login Page", videoSrc: login },
    { title: "Filtering Table", videoSrc: filtertable },
    { title: "Saved Searches", videoSrc: savesearchpage },
    { title: "Subscription", videoSrc: subscriptionpage },
    { title: "Forget Password", videoSrc: passwordreset },
    { title: "My Profile", videoSrc: profilepage },
];

const VideoPreviews = () => {
    return (
        <>
            <WebNavbar />
            <div className="container-fluid py-5" style={{ background: '#f7f9fc' }}>
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: "black" }}>How it Works</h2>
                    <p style={{ color: "black" }}>Welcome to our platform! Whether you're a new user or just exploring, this section will guide you through the key features and workflows available to you. From signing up and logging in, to managing your saved searches, subscriptions, and personal profile — each video offers a quick preview to help you get the most out of your experience. These step-by-step walkthroughs ensure you're always confident navigating the system and making full use of all available tools.</p>
                   <br/>
                    <div className="row">
                        {videoList.map((video, index) => (
                            <div key={index} className="col-md-4 mb-4 d-flex align-items-stretch">
                                <div className="card shadow-sm w-100">
                                    <video
                                        className="card-img-top"
                                        controls
                                        preload="metadata"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    >
                                        <source src={video.videoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="card-body">
                                        <h5 className="card-title">{index + 1}. {video.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <WebFooter />
        </>

    );
};

export default VideoPreviews;
