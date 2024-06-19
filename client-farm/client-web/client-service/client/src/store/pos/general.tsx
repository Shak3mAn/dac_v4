import { create } from "zustand";

interface RouteState {
  isRoute: boolean;
  routeName: string;
}

interface RouteActions {
  onOpen:() => void;
  onSelect: (route: string) => void;
  onDeselect: () => void;
  onToggle: () => void;
}

export const useRouteSelect = create<RouteState & RouteActions>((set) => ({
  isRoute: true,
  routeName: "",
  onOpen: () => set({ isRoute: true}),
  onSelect: (route) => set({ isRoute: true, routeName: route }),
  onDeselect: () => set({ isRoute: false, routeName: "" }),
  onToggle: () => set((state) => ({ isRoute: !state.isRoute })),
}));
