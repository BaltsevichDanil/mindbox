import {FC, FormEvent} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import styled from 'styled-components'

import {createTodoModel} from 'src/features'
import {Input, Button, text} from 'src/shared'

interface ICustomElements extends HTMLFormControlsCollection {
  title: HTMLInputElement
}

interface ICreateTodoForm extends HTMLFormElement {
  readonly elements: ICustomElements
}

const CreateTodo: FC = () => {
  const handleSubmit = (e: FormEvent<ICreateTodoForm>): void => {
    e.preventDefault()

    createTodoModel.createTodoEvents.createTodo({
      title: e.currentTarget.elements.title.value
    })

    e.currentTarget.reset()
  }

  return (
    <CreateTodoForm onSubmit={handleSubmit}>
      <Input name='title' placeholder={text.createTodo} />
      <Button type='submit'>
        <AiOutlineArrowRight />
      </Button>
    </CreateTodoForm>
  )
}

const CreateTodoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export default CreateTodo
