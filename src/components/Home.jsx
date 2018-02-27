import React from 'react';
import NavbarContainer from './../containers/NavbarContainer'
import FirstSectionContainer from './../containers/FirstSectionContainer'

import './../style/main.less';

const Home = () => {
    return (
    <div className="home">
        <NavbarContainer />
        <FirstSectionContainer />
    </div>
  );
};

export default Home;
