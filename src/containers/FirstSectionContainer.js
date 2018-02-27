import { connect } from 'react-redux';
import FirstSection from '../components/FirstSection';
import { generateBackgroundImages } from '../actions';


function mapStateToProps(state) {
  return {
    homeBg: state.dinamicBackground.page.home,
  };
}

function mapDispatchToProps(dispatch) {
  return {
       generateBackgroundImages: () => {
           dispatch(generateBackgroundImages());
       },
  }
}

const FirstSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstSection);

export default FirstSectionContainer
