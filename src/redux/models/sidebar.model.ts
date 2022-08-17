export interface SidebarState {
  sidebarShow: boolean;
  sidebarUnfoldable: boolean;
}

interface SidebarAction {
  type: string;
  payload: boolean;
}

export type SidebarTypes = SidebarAction;
