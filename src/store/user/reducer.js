import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null, // {  stories: [{}, {}, {}] }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };
    case "STORY_DELETED": {
      // 1 hand: storyId
      // 2 hand: an array with stories.
      // Obj: remove the one with the matching id.

      const storyId = action.payload;
      const stories = state.space.stories;

      const filteredStories = stories.filter((s) => s.id !== storyId);

      return {
        ...state,
        space: {
          ...state.space,
          stories: filteredStories,
        },
      };
    }
    default:
      return state;
  }
}
