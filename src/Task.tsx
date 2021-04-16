import * as React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import { Task as Props } from './initial-data'

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`

export const Task: React.FC<Props & { index: number }> = ({
  id,
  content,
  index,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          id={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {content}
        </Container>
      )}
    </Draggable>
  )
}
