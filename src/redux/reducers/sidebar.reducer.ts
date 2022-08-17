import {
  SIDE_BAR_SHOW,
  SIDE_BAR_UNFOLDABLE,
} from '../action-types/sidebar.types';
import { SidebarState, SidebarTypes } from '../models/sidebar.model';

const INITIAL_STATE: SidebarState = {
  sidebarShow: true,
  sidebarUnfoldable: true,
};

function sidebarReducer(
  state = INITIAL_STATE,
  action: SidebarTypes,
): SidebarState {
  switch (action.type) {
    case SIDE_BAR_SHOW: {
      return { ...state, sidebarShow: action.payload };
    }
    case SIDE_BAR_UNFOLDABLE: {
      return { ...state, sidebarUnfoldable: action.payload };
    }
    default:
      return state;
  }
}

export default sidebarReducer;
