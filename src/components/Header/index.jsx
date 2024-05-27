import React from 'react';

const Header = ( ) => {
  return (
    <header>
      <div className="container">
        <h1>logo</h1>
        <ul class="gnb">
          <li><a href="#about">K.<em>About Me</em></a></li>
          <li><a href="#project">Work<em>Coding</em></a></li>
          <li class="logo"><a href="index.html">MJ.Kim</a></li>
          <li class="right"><a href="#skills">skills<em>CSS Animation</em></a></li>
          <li class="right"><a href="#goodbye">Contact<em>Follow Me</em></a></li>
        </ul>
      </div>
    </header> 
  )
};
export default Header;