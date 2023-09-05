// @ts-ignore
import {reflect} from '@effector/reflect'
import {FC} from 'react'
import styled from 'styled-components'

import {todoModel} from 'src/entities'
import {filtersList, getFilterByName} from 'src/features'

interface IProps {
  loading: boolean
  onFilterClick: (p: todoModel.QueryConfig) => void
}

const View: FC<IProps> = props => {
  const {loading, onFilterClick} = props

  const handleClick = (name: string): void =>
    onFilterClick(getFilterByName(name).config)

  const queryConfig = todoModel.useTodoFilter()

  return (
    <Filters>
      {filtersList.map(filter => (
        <div key={filter.id}>
          <RadioButton
            type='radio'
            id={filter.name}
            checked={
              (filter.name === 'completed' && queryConfig.completed) ||
              (filter.name === 'createdAt' && queryConfig.createdAt)
            }
            onChange={(): void => handleClick(filter.name)}
            disabled={loading}
          />
          <label htmlFor={filter.name}>{filter.title}</label>
        </div>
      ))}
    </Filters>
  )
}

const SortRadio = reflect({
  view: View,
  bind: {
    loading: todoModel.$todoListLoading,
    onFilterClick: todoModel.events.setQueryConfig
  }
})

const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 8px;
`

const RadioButton = styled.input`
  margin: 0 4px 0 0;
`
export default SortRadio
