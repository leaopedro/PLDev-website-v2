import React, {PropTypes} from 'react';
import './style.less';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
//        this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top nav-transparent" id="navbar-settings">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand"><a href="index.html"><img src="/img/banner-green.png" className="navbar-logo"
                                                                    alt='PLdev desenvolvimento web'/></a></div>
          </div>
          <div className="collapse navbar-collapse" id="bar">
            <ul className="nav navbar-nav navbar-right" id="bar-list">
              <li><a className="scroll" href="#home"><i className="fa fa-home"> </i> Home</a></li>
              <li><a className="scroll" href="#about"><i className="fa fa-exclamation-circle"> </i>Sobre</a></li>
              <li><a className="scroll" href="#portfolio"><i className="fa fa-bars"> </i>Portfolio</a></li>
              <li><a className="scroll" href="#contact"><i className="fa fa-envelope"> </i>Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

Navbar.propTypes = {
//    onAddSubreddit: PropTypes.func.isRequired,
};


export default Navbar;
