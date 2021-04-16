import * as React from 'react'
import styled from 'styled-components'
import { Task } from './Task'
import { Droppable } from 'react-beautiful-dnd'

import { Task as TaskProps, Column as ColumnProps } from './initial-data'

type Props = {
  column: ColumnProps
  tasks: TaskProps[]
}

const Container = styled.div`
  margin: 2px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
`

export const Column: React.FC<Props> = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} index={index} {...task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}
