

import React from "react";
var visit = 1;
function Sayhi(props){
    return (
        <div classNmae="divclass">
            <a href={props.lik}><img id="part" className="ima" src={props.im} alt="example" /></a>
            <a href={props.lik}><button id="butt" styles ={{color:"red"}}>go</button></a>
            <a href={props.lik}><h2 style={{color:"white"}}>{props.nam}</h2></a>
        </div>
    );
}

function Header(){
    return (
      <header>
        <h1>MY WEBSITE USING REACT (ROUTE TO SUCCESS)</h1>
      </header>
      
    );
  }
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>&copy; {currentYear} React_Learn</p>
      </footer>
    );
  }
export {Sayhi,Header,Footer};


  

