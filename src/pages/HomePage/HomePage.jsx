import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Review from '../components/Review/Review';
import ButtonGetStarted from '../components/ButtonGetStarted/ButtonGetStarted';

const HomePage = () => {
  return (
    <main>
       <div>
        <Navbar />
      <container classname={homepage}> 
      <h1 classname={h1}>Unlock your potential with the best <span classname={span}>language</span> tutors</h1>
      <p classname={p}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
      <ButtonGetStarted />
      <img classname={image} src="path/to/block-1x.png"
        srcSet="path/to/block-1x.png 1x, path/to/block-2x.png 2x"
        alt="Block" />
      </container>
          <Review />
          </div>
    </main >
    );
};

export default HomePage;