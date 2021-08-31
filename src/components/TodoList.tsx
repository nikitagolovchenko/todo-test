import React from 'react'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  return (
    <>
      <TodoItem id={1} title="Title 1" text="text text" completed={false} />
    </>
  )
}

export default TodoList
