import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions'; //{ addTodo, completeTodo, setVisibilityFilter, VisibilityFilters }

import ChessField from './ChessField';
import Options from './Options';

var currentFigure = 'Black';

class App extends Component {
  render() {
    // Получено благодоря вызову call():
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>
        // <ChessField className="chess-area" />
        // <Options className="chess-options" currentFigure={currentFigure} />

        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            dispatch(completeTodo(id))
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
      </div>
    )
  }
}

// Какие именно props, полученные из глобального состояния, мы хотим внедрить?
// Обратите внимание: используйте https://github.com/faassen/reselect для лучшей производительности.
function select(state) {
  return {
    field: state.field
  }
}

// Оборачиваем компонент для внедрения в него функции dispatch и состояния
export default connect(select)(App)