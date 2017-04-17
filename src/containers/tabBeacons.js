import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TabBeacons from '../components/tabBeacons';

import { navigate } from '../actions/navigation';

const mapStateToProps = (state) => {
  const tabBeaconsState = state.navigation.tabBeaconsState;

  return {
    tabBeaconsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch, // Required for react-navigation
    actions: bindActionCreators({ navigate }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabBeacons);
