import React, {PropTypes} from 'react';
import './style.less';

class DinamicBackground extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    console.log('Hello BG');
//        this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <section className="dinamic-bg">
        {this.props.children}
      </section>

    );
  }

}

DinamicBackground.propTypes = {
//    onAddSubreddit: PropTypes.func.isRequired,
};


export default DinamicBackground;
