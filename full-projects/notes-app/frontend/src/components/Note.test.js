import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render , fireEvent } from '@testing-library/react'
import Note from './Note'

const note = {
  content: 'Component testing is done with react-testing-library',
  important: true
}

test('renders content', () => {


  const component = render(
    <Note note={note} />
  )

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})

test('Control the button clicking', () => {
  const mockHandler = jest.fn()

  const component = render(
    <Note note={note} toggleImportance={mockHandler} />
  )

  const button = component.getByText('make not important')
  fireEvent.click(button)
  expect(mockHandler.mock.calls).toHaveLength(1)

})