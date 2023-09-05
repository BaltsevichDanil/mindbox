import {FC, FormEvent} from 'react'
import { createTodoModel } from 'src/features';

import {Input, Button}  from 'src/shared'


interface ICustomElements extends HTMLFormControlsCollection   {
  title: HTMLInputElement
}

interface ICreateTodoForm extends HTMLFormElement {
  readonly elements: ICustomElements;
}

const CreateTodo: FC = () => {

  const handleSubmit = (e: FormEvent<ICreateTodoForm>): void => {
    e.preventDefault()

    createTodoModel.createTodoEvents.createTodo({title: e.currentTarget.elements.title.value})

    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name='title' placeholder={'Создать todo'} />
      <Button type='submit'><p>Сохранить</p></Button>
    </form>
  )
}

export default CreateTodo
