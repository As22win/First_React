// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Sayhi, Header ,Footer } from './app';


ReactDOM.render(
  <div>
    <Header />
    <div className="main-content">
      <div className="row">
        <Sayhi
          nam="Solve Leetcode"
          im="https://cdn.sanity.io/images/oaglaatp/production/fe299a608603b8364a6ed4e20916cd6da1c9ec74-5001x3334.jpg?w=5001&h=3334&auto=format"
          lik="https://leetcode.com/problemset/"
        />
        <Sayhi
          nam="Learn New courses"
          im="https://img-c.udemycdn.com/course/750x422/4077322_a979_4.jpg"
          lik="https://www.udemy.com"
        />
        <Sayhi
          nam="Contribute Now"
          im="https://repository-images.githubusercontent.com/289382429/e9c6ec80-8902-11eb-9f55-5de819da8bf5"
          lik="https://github.com"
        />
      </div>
      <div className="row">
        <Sayhi
          nam="Free Code camp"
          im="https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_scale.size_760x427.v1627670281.png"
          lik="https://www.youtube.com/@freecodecamp/playlists"
        />
        <Sayhi
          nam="A-Z Striver"
          im="https://user-images.githubusercontent.com/108109935/198030893-e0c815ef-28fa-43df-8e8a-fc42243b59fa.png"
          lik="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
        />
        <Sayhi
          nam="JAVA Loves You"
          im="https://c4.wallpaperflare.com/wallpaper/525/880/875/logo-programming-java-cup-of-coffee-wallpaper-preview.jpg"
          lik="https://www.youtube.com/@Java.Brains/playlists"
        />
      </div>
    </div>
    <Footer/>
  </div>,
  document.getElementById("root")
);
