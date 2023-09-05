import {render, screen, fireEvent} from '@testing-library/react'
import {Todos} from 'src/widgets'

describe('Create todo test', () => {
  test('render todo list', () => {
    render(<Todos />)
    const HeaderText = screen.getByText('Задачи')
    expect(HeaderText).toBeInTheDocument()

    const inputPlaceholder = screen.getByPlaceholderText('Создать задачу')
    expect(inputPlaceholder).toBeInTheDocument()

    const button = screen.getAllByRole('button')
    expect(button.length).toBeLessThan(5)
  })

  test('Create todo story', () => {
    render(<Todos />)
    const inputPlaceholder = screen.getByPlaceholderText('Создать задачу')
    fireEvent.change(inputPlaceholder, {target: {value: 'Hello'}})

    const button = screen.getAllByRole('button')[0]

    fireEvent.click(button)

    const todo = screen.getByText('Hello')

    expect(todo).toBeInTheDocument()
  })
})
