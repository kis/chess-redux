import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ChessField from '../components/ChessField';
import Options from '../components/Options';

class App extends Component {
  render() {
    return (
      <div>
        <ChessField field={this.props.field} actions={this.props.actions} />
        <Options currentFigure='Black' actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    field: state.field
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);