import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Review from '../components/Review/Review';
import ButtonGetStarted from '../components/ButtonGetStarted/ButtonGetStarted';

const HomePage = () => {
  return (
    <div>
      <Navbar /> 
      <h1>Unlock your potential with the best <span>language</span> tutors</h1>
      <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
      <ButtonGetStarted />
      <Review />
     <img src="path/to/block-1x.png"
        srcSet="path/to/block-1x.png 1x, path/to/block-2x.png 2x"
        alt="Block" />
    </div>
  );
};

export default HomePage;