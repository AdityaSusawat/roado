import { TOGGLE_DROPDOWN } from "../actions/actions.js";

const initialState = {
  isDropdownOpen: false,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
