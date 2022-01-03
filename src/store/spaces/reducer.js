const initialState = {
  all: [],
  details: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SPACES_FETCHED":
      return { ...state, all: action.payload };
    case "SPACE_DETAILS_FETCHED": {
      return { ...state, details: action.payload };
    }
    default:
      return state;
  }
}
