import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CubbyContext from '../CubbyContext';
import TokenService from '../services/token-service';
import CubbyLogo from '../assets/CubbyLogo.png';

class AppNav extends Component {
  static contextType = CubbyContext;

  render() {
    let content;
    if (this.context.isDemo) {
      content = (
        <div className='AppNav__section'>
          <div className='AppNav__item'>
            <Link
              to='/'
              onClick={() => {
                this.context.setIsDemo(false);
              }}
            >
              Viewing Demo | Click to return
            </Link>
          </div>
        </div>
      );
    } else if (!this.context.hasAuthToken()) {
      content = (
        <div className='AppNav__section'>
          <div className='AppNav__item'>
            <Link to='/login'>Log in</Link>
          </div>
          <div className='AppNav__item'>|</div>
          <div className='AppNav__item'>
            <Link to='/register'>Register</Link>
          </div>
        </div>
      );
    } else {
      content = (
        <div className='AppNav__section'>
          <div className='AppNav__item AppNav__username'>
            <Link to='/'>{TokenService.getCurrentUserName()}</Link>
          </div>
          <div className='AppNav__item'>
            <i className='fas fa-caret-right'></i>
          </div>
          <div className='AppNav__item'>
            <Link
              to='/'
              onClick={() => {
                TokenService.clearCurrentUserName();
                TokenService.clearAuthToken();
                this.context.clearAuthToken();
                this.context.clearItems();
                this.context.resetSortBy();
              }}
            >
              Log out
            </Link>
          </div>
        </div>
      );
    }

    return (
      <nav className='AppNav'>
        <div className='AppNav__section'>
          <Link
            to='/'
            onClick={() => {
              this.context.setIsDemo(false);
            }}
          >
            <div className='AppNav__logo'>
              <img src={CubbyLogo} alt='Cubby Logo' className='cubby_logo' />
            </div>
          </Link>
        </div>
        {content}
      </nav>
    );
  }
}

export default withRouter(AppNav);
