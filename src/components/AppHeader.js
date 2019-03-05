import React from 'react';
import FdjLogo from '../fdj-logo.svg';

const AppHeader = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12">
        <header>
          <img src={FdjLogo} alt="FDJ logo"/>
        </header>
      </div>
    </div>
  );
}

export default AppHeader;