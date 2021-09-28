import React from 'react';
import helpingHandsImg from '../assets/projects/helping-hands.PNG'
import localHeroesImg from '../assets/projects/local-heroes.jpg'
import movieHubImg from '../assets/projects/the-movie-hub.jpg'
import profileImg from '../assets/profile-picture.jpg'

function Home() {
  return(
    <>
      <div className="mb-5">
          <div className="container jumbo-container">
              <div className="row homeImg mb-3">
                  <h3 className="text-center"></h3>
                  <img src={profileImg} style={{height: '45rem'}} className="img-fluid" />
              </div>
              <div className="hide text-center">
                  <p className="text-center my-2">Psst! Over Here!</p>
                  <a href="/"><i className="fas fa-arrow-circle-down text-center socialMedia fa-3x" /></a>
              </div>
          </div>
      </div>

      <div className="container pb-4 pt-2 mb-4">
          <h4 className="text-center sneakHeader">Project Snapshots</h4>
      </div>
      <div className="container homeSneak">
          <div className="row">
          <div className="col-2" />
          <div className="col-3">
              <div className="card" style={{width: '16rem'}}>
                <img src={helpingHandsImg} className="card-img-top round" alt="Helping Hands" />
              </div>
          </div>
          <div className="col-3">
              <div className="card" style={{width: '16rem'}}>
              <img src={localHeroesImg} className="card-img-top round" alt="Local Heroes" />
              </div>
          </div>
          <div className="col-3">
              <div className="card" style={{width: '16rem'}}>
              <img src={movieHubImg} className="card-img-top round" alt="The Movie Hub" />
              </div>
          </div>
        </div>
      </div>
    </>
  ); 
};

export default Home;