import {
  SIDE_BAR_SHOW,
  SIDE_BAR_UNFOLDABLE,
} from '../../action-types/sidebar.types';

export const sidebarVisibilty = (data: boolean) => ({
  payload: data,
  type: SIDE_BAR_SHOW,
});

export const sidebarUnfold = (data: boolean) => ({
  payload: data,
  type: SIDE_BAR_UNFOLDABLE,
});
