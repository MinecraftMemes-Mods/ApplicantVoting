import * as React from 'react';
import { Navbar } from 'rsuite';
import '../scss/Navbar.scss'

// ts-ignore-next-line
import smiley from '../../src/images/smiley.png';

const AppNavbar = () => {
  return ( 
    <div className="navbar">
      <Navbar>
        <Navbar.Brand>
          <img className="smiley-logo" src={smiley} alt="smiley logo"/>
          MinecraftMemes Mod Voting
        </Navbar.Brand>
      </Navbar>
    </div>
   );
}
 
export default AppNavbar;