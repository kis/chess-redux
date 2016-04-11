import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ChessField from '../components/Main/ChessField';
import Options from '../components/Main/Options';
import Chat from '../components/Main/Chat';

class App extends Component {
  render() {
    console.log(this.props)
    
    return (
      <div>
        <ChessField field={this.props.field} options={this.props.options} actions={this.props.actions} />
        <Options field={this.props.field} options={this.props.options} actions={this.props.actions} />
        <Chat options={this.props.options} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  options: state.options,
  field: state.field
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(App);