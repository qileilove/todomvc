import React, { Component } from 'react'

class NewTodo extends Component{
  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input className='new-todo' type='text' placeholder='What needs to be done?'
          onKeyDown={this.props.addNewTodo}
          onChange={this.props.handleNewTodoChange}
          value={this.props.newTodo}/>
      </header>
    )
  }
}

export default NewTodo
