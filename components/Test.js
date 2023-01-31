import { slide as Menu } from 'react-burger-menu'
import React, { Component } from "react";


  export default class Test extends Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu className='navbar-menudd'>
        <div className="classes-module__sideMenuItemTitleContainer___2FH5y"><img src="https://www.purplegarden.co/packs/media/src/app/components/side_menu/img/pg_home_active-91e0d87535e977c0b645abda7ec2089b.png" alt="" />
        <div className="classes-module__menuItemTitleActive___1MIYY">Home</div>
        </div>
        <div className="classes-module__sideMenuItemTitleContainer___2FH5y">
          <img src="https://www.purplegarden.co/packs/media/src/app/components/side_menu/img/love_readings-0c5f93b1da7538b095297ccb5eb31bb9.svg" alt=""/>
          <div className="classes-module__menuItemTitleActive___1MIYY">Love readings</div>
          </div>
          <div className="classes-module__sideMenuItemTitleContainer___2FH5y">
          <img src="https://www.purplegarden.co/packs/media/src/app/components/side_menu/img/love_readings-0c5f93b1da7538b095297ccb5eb31bb9.svg" alt=""/>
          <div className="classes-module__menuItemTitleActive___1MIYY">Tarot readings</div>
          </div>
          <div className="classes-module__sideMenuItemTitleContainer___2FH5y">
          <img src="https://www.purplegarden.co/packs/media/src/app/components/side_menu/img/love_readings-0c5f93b1da7538b095297ccb5eb31bb9.svg" alt=""/>
          <div className="classes-module__menuItemTitleActive___1MIYY">Palm readings</div>
          </div>
          <div className="classes-module__sideMenuItemTitleContainer___2FH5y">
          <img src="https://www.purplegarden.co/packs/media/src/app/components/side_menu/img/love_readings-0c5f93b1da7538b095297ccb5eb31bb9.svg" alt=""/>
          <div className="classes-module__menuItemTitleActive___1MIYY">Angel insights</div>
          </div>
      </Menu>
    );
  }
}


