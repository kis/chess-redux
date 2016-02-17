import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ChessField from '../components/ChessField';
import Options from '../components/Options';

class App extends Component {
  render() {
    const { actions } = this.props.actions;
    const { data, letters } = this.props.chess;
    let currentFigure = 'Black';

    return (
      <div>
        <ChessField field={data} letters={letters} actions={actions} />
        <Options currentFigure={currentFigure} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    chess: state.chess
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);