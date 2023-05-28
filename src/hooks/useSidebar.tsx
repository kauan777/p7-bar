import { create } from "zustand";

type SidebarProps = {
  isOpenSideBar: boolean;
  setIsOpenSideBar: (newState: boolean) => void;
};

export const useSidebar = create<SidebarProps>()((set) => ({
  isOpenSideBar: false,
  setIsOpenSideBar: (newState: boolean) =>
    set(() => ({ isOpenSideBar: newState })),
}));
