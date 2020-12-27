import { types } from "./types";
import { INITIAL_STATE } from "./state";

const reducer = (
  state = INITIAL_STATE,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case types.ADD_REVIEW:
      return { ...state, reviews: [...state.reviews, payload.review] };
    default:
      return state;
  }
};

export default reducer;
