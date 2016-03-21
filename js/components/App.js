import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ChessField from '../components/Main/ChessField';
import Options from '../components/Main/Options';

class App extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        <ChessField field={this.props.game.field} actions={this.props.actions} />
        <Options options={this.props.game.options} actions={this.props.actions} />
      </div>
    )
  }
}

/*function mapStateToProps(state) {
  console.log(state)

  return {
    field: state.field
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}*/

const mapStateToProps = (state) => ({
  game: state.game
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(App);