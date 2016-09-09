import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../../actions';
import App from './app';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ incrementCount, decrementCount }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
