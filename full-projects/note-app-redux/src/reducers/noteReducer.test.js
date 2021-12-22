import noteReducer from "./noteReducer";


describe('noteReducer', () => {
  const initialState = []
  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = noteReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })
  test('should return new state with added new note', () => {
    const note = {
      id: 1,
      content: "new note 1 from test",
      important: false
    }

    const action = {
      type: 'NEW_NOTE',
      data: note
    }
    const newState = noteReducer(undefined, action)

    expect(newState.length).toBe(1)
    expect(newState).toEqual(
      [{ ...note }]
    )
  })


});
