import * as React from 'react'
import './App.css'
import { Column } from './Column'
import { initialData } from './initial-data'
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd'

function App() {
  const [state, setState] = React.useState<typeof initialData>(
    () => initialData
  )

  const handleDragEnd: OnDragEndResponder = ({
    destination,
    source,
    draggableId,
  }) => {
    if (
      !destination?.droppableId ||
      (destination?.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return
    }

    if (destination.droppableId === source.droppableId) {
      const sourceColumn = state.columnIndex[source.droppableId]
      const newSourceTaskIds = [...sourceColumn.taskIds]
      newSourceTaskIds.splice(source.index, 1)
      newSourceTaskIds.splice(destination.index, 0, draggableId)

      const newSourceColumn = {
        ...sourceColumn,
        taskIds: newSourceTaskIds,
      }

      setState({
        ...state,
        columnIndex: {
          ...state.columnIndex,
          [newSourceColumn.id]: newSourceColumn,
        },
      })
    } else {
      const sourceColumn = state.columnIndex[source.droppableId]
      const newSourceTaskIds = [...sourceColumn.taskIds]
      newSourceTaskIds.splice(source.index, 1)
      const newSourceColumn = {
        ...sourceColumn,
        taskIds: newSourceTaskIds,
      }

      const destinationColumn = state.columnIndex[destination.droppableId]
      const newDestinationTaskIds = [...destinationColumn.taskIds]
      newDestinationTaskIds.splice(destination.index, 0, draggableId)
      const newDestinationColumn = {
        ...destinationColumn,
        taskIds: newDestinationTaskIds,
      }

      const newState = {
        ...state,
        columnIndex: {
          ...state.columnIndex,
          [newSourceColumn.id]: newSourceColumn,
          [newDestinationColumn.id]: newDestinationColumn,
        },
      }
      setState(newState)
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="App">
        {state.columnOrder.map((columnId) => {
          const column = state.columnIndex[columnId]
          const tasks = column.taskIds.map((taskId) => state.taskIndex[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </div>
    </DragDropContext>
  )
}

export default App
