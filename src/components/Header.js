import React from 'react'
import '../css/Header.css'


function Header (){

    return(

         <div class="header">
        <div class="set1">
            <h1>Ritam.</h1>
        </div>
        <div class="set2">
            <div class="box">
                <a href="#">Home</a>
            </div>
            <div class="box">
                <a href="#soulion">Solution</a>
            </div>
           
            <div class="box">
                <a href="#Education">Education</a>
            </div>
            <div class="box">
                <a href="">Contact</a>
            </div>
        </div>
    </div>
    )
}
export default Header;