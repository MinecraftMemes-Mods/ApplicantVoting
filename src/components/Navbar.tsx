// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

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