import React, {PropTypes} from 'react';
import './style.less';

class FirstSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.props.generateBackgroundImages();
//        this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.homeBg})`
    }
    return (
      <section className="home dinamic-bg" style={style}>
        <div className="main-content-container">
          <div className="frame">
            <h1>Pedro Leão</h1>
            <h2>Web UI Engineer</h2>
          </div>
        </div>
      </section>
    );
  }

}

FirstSection.propTypes = {
    homeBg: PropTypes.string,
};


export default FirstSection;
