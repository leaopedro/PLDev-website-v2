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
    };
    return (
      <section className="home dinamic-bg" style={style}>
        <div className="main-content-container">
          <h1>Hi! I'm Pedro Leão,</h1>
          <h2>a web engineer and</h2>
          <h3>visual designer.</h3>
        </div>
      </section>
    );
  }

}

FirstSection.propTypes = {
    homeBg: PropTypes.string,
};


export default FirstSection;
