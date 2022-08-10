// DEPENDS.
import React from 'react';

// CSS
import "../CSS/Home.css" 


const Home = () => {

    return(
        <div className='Home'>
            <div className="Home__container" id="cont_intro">
                <h1 className='container__header'>Hello!</h1>
                <hr className="container__rule"/>
                <p className='container__copy'>Welcome to the interactive History Kit visualizer! This page can be used to generate visuals that accompany History Kit songs <span className='italic'>(or any music really, i don't care how you use this thing)</span></p>
                <p className='container__copy'>You can tap outside of this box to try it out and then hide this window with the "X" icon above when you are ready to dive in.</p>
            </div>
            <div className="Home__container" id='cont_about'>
                <h1 className='container__header'>about this site</h1>
                <hr className="container__rule"/>
                <p className='container__copy'>This website was developed by <a className='copy_link' href='https://avantgov.club/' target="_blank" rel='noopener noreferrer'>AC</a> using the React.js framework. The visual engine is an implemented instance of <a className='copy_link' href='https://hydra.ojack.xyz' target="_blank" rel='noopener noreferrer'>Hydra</a>, a live code-able video synth and coding environment.</p>
                <p className='container__copy'>The static code that Hydra is executing accepts input from the user, specifically the X and Y values of the current mouse location. This predominantly drives the change of the top-most layer of the visual.</p>
                <p className='container__copy'>Additionally, the engine is clocked to a 142 bpm, the same as the music. Despite the audio file and the engine being not explicitly tied to one another, this configuration allows for some of the function evaluations to have relation to the music playing. Though often obscured by Math module operations to smooth the rendering. This predominantly controls the bottom-most layers of the visual.</p>
            </div>
            <div className="Home__container" id='cont_music'>
                <h1 className='container__header'>what's this music?</h1>
                <hr className="container__rule"/>
                <p className='container__copy'><a className='copy_link' href='https://open.spotify.com/artist/61IoLJnDMTDYZbw1n0uSn7?si=7N22CTXgR2iObQP4EyD8xQ' target="_blank" rel='noopener noreferrer'>History Kit</a> is the stage name for electronic music created by AC.</p>
                <p className='container__copy'>Under the hood, it's a lot of Elektron devices and Juno-6 worship. <span className='italic'>(iykyk)</span></p>
                <p className='container__copy'>The song that pairs with this visual is "Bottle Talk".</p>
                <p className='container__copy'>History Kit is mostly on <a className='copy_link' href="https://www.twitter.com/MalwareForFree" target="_blank" rel='noopenner noreferrer'>twitter</a>.</p>
            </div>
            <div className="Home__container" id='cont_vis'>
                <h1 className='container__header'>How to use</h1>
                <hr className="container__rule"/>
                <ul className='container__list'>
                    <li className='list__item'>1. hide this window with the X above to see the entire visual.</li>
                    <li className='list__item'>2. Start the music with the play button at the top left of the screen (pause at any time with this same button) </li>
                    <li className='list__item'>3. Tap in different places along the screen to change the visual.</li>
                    <li className='list__item'>4. Tap in sync with the music to change the visual in a way that compliments the music (you have the power here) </li>
                    <li className='list__item'>5. get a little lost for a few minutes.</li>
                </ul>
                
            </div>
            {/* <div className="Home__container" id="cont_web3">
                <h1 className='container__header'>is this web3?</h1>
                <hr className="container__rule"/>
                <p className='container__copy'>History Kit visualisers are free to every user, and have been built with open-source tools. </p>
                <p className='container__copy'>There is no monetary or psuedo-social incentive behind this project. The participative nature of this site is purely for entertainment.</p>
                <p className='container__copy'></p>
                <p className='container__copy'>It pains me to have to write this statement.</p>
            </div> */}
        </div>
    );
};

export default Home;
