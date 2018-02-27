import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
//import { } from '../actions';


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default NavbarContainer
