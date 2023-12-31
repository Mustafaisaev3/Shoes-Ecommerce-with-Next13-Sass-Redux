'use client'

import React, { PropsWithChildren } from "react";
import { CartProvider } from "./Cart/cart.context";

export enum ModalViewTypes {
  REGISTER_VIEW = 'REGISTER_VIEW',
  LOGIN_VIEW = 'LOGIN_VIEW',
  CHECKOUT_VIEW = 'CHECKOUT_VIEW',
  ORDER_INFO_VIEW = 'ORDER_INFO_VIEW',
}

type ConfirmationModalTypes = {
  question: string,
  action: () => any
}

export interface State {

  displayProductImgZoom: boolean;
  displayDrawer: boolean;
  displaySidebar: boolean;
  displayFilter: boolean;
  displayModal: boolean;
  displayConfirmationModal: boolean;
  displayCart: boolean;
  displayMobileMenu: boolean;
  displaySearch: boolean;
  modalView: string;
  productImgZoom: string;
  productImgZoomData: string[];
  modalData: any;
  modalConfirmationData: ConfirmationModalTypes | null;
  drawerView: string | null;
  toastText: string;
}

const initialState = {
  displayProductImgZoom: false,
  displayDrawer: false,
  displaySidebar: false,
  displayFilter: false,
  displayModal: false,
  displayConfirmationModal: false,
  displayCart: false,
  displayMobileMenu: false,
  displaySearch: false,
  modalView: ModalViewTypes.REGISTER_VIEW,
  productImgZoom: "PRODUCT_IMG_ZOOM_VIEW",
  drawerView: "CART_VIEW",
  productImgZoomData: [],
  modalData: null,
  modalConfirmationData: null,
  toastText: "",
};

type Action =
  | {
      type: "SET_AUTHORIZED";
    }
  | {
      type: "SET_UNAUTHORIZED";
    }
  | {
      type: "OPEN_SIDEBAR";
    }
  | {
      type: "CLOSE_SIDEBAR";
    }
  | {
      type: "OPEN_CART";
    }
  | {
      type: "CLOSE_CART";
    }
  | {
      type: "OPEN_DRAWER";
    }
  | {
      type: "CLOSE_DRAWER";
    }
  | {
      type: "OPEN_MOBILE_MENU";
    }
  | {
      type: "CLOSE_MOBILE_MENU";
    }
  | {
      type: "OPEN_SEARCH";
    }
  | {
      type: "CLOSE_SEARCH";
    }
  | {
      type: "SET_TOAST_TEXT";
      text: ToastText;
    }
  | {
      type: "OPEN_FILTER";
    }
  | {
      type: "CLOSE_FILTER";
    }
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "OPEN_CONFIRMATION_MODAL";
      data: ConfirmationModalTypes;
    }
  | {
      type: "CLOSE_CONFIRMATION_MODAL";
    }
  | {
      type: "OPEN_PRODUCT_IMG_ZOOM_MODAL";
    }
  | {
      type: "CLOSE_PRODUCT_IMG_ZOOM_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_DRAWER_VIEW";
      view: DRAWER_VIEWS;
    }
  | {
      type: "SET_PRODUCT_IMG_ZOOM_MODAL_DATA";
      data: string[];
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    }
  | {
      type: "SET_USER_AVATAR";
      value: string;
    };

type MODAL_VIEWS =
  | "REGISTER_VIEW"
  | "LOGIN_VIEW"

type DRAWER_VIEWS = "CART_VIEW" | "MOBILE_MENU";
type ToastText = string;

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_AUTHORIZED": {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    case "SET_UNAUTHORIZED": {
      return {
        ...state,
        isAuthorized: false,
      };
    }
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        displaySidebar: false,
        drawerView: null,
      };
    }
    case "OPEN_CART": {
      return {
        ...state,
        displayCart: true,
      };
    }
    case "CLOSE_CART": {
      return {
        ...state,
        displayCart: false,
      };
    }
    case "OPEN_SEARCH": {
      return {
        ...state,
        displaySearch: true,
      };
    }
    case "CLOSE_SEARCH": {
      return {
        ...state,
        displaySearch: false,
      };
    }
    case "OPEN_FILTER": {
      return {
        ...state,
        displayFilter: true,
      };
    }
    case "CLOSE_FILTER": {
      return {
        ...state,
        displayFilter: false,
      };
    }
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "OPEN_CONFIRMATION_MODAL": {
      return {
        ...state,
        displayConfirmationModal: true,
        modalConfirmationData: action.data
      };
    }
    case "CLOSE_CONFIRMATION_MODAL": {
      return {
        ...state,
        displayConfirmationModal: false,
      };
    }
    case "OPEN_PRODUCT_IMG_ZOOM_MODAL": {
      return {
        ...state,
        displayProductImgZoom: true,
      };
    }
    case "CLOSE_PRODUCT_IMG_ZOOM_MODAL": {
      return {
        ...state,
        displayProductImgZoom: false,
      };
    }
    case "OPEN_DRAWER": {
      return {
        ...state,
        displayDrawer: true,
      };
    }
    case "CLOSE_DRAWER": {
      return {
        ...state,
        displayDrawer: false,
      };
    }
    case "OPEN_MOBILE_MENU": {
      return {
        ...state,
        displayMobileMenu: true,
      };
    }
    case "CLOSE_MOBILE_MENU": {
      return {
        ...state,
        displayMobileMenu: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "SET_DRAWER_VIEW": {
      return {
        ...state,
        drawerView: action.view,
      };
    }
    case "SET_MODAL_DATA": {
      return {
        ...state,
        modalData: action.data,
      };
    }
    case "SET_PRODUCT_IMG_ZOOM_MODAL_DATA": {
      return {
        ...state,
        productImgZoomData: action.data,
      };
    }
    case "SET_TOAST_TEXT": {
      return {
        ...state,
        toastText: action.text,
      };
    }
    case "SET_USER_AVATAR": {
      return {
        ...state,
        userAvatar: action.value,
      };
    }
  }
}

export const UIProvider: React.FC<PropsWithChildren> = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const authorize = () => dispatch({ type: "SET_AUTHORIZED" });
  const unauthorize = () => dispatch({ type: "SET_UNAUTHORIZED" });
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: "CLOSE_SIDEBAR" })
      : dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebarIfPresent = () =>
    state.displaySidebar && dispatch({ type: "CLOSE_CART" });
  const openCart = () => dispatch({ type: "OPEN_CART" });
  const closeCart = () => dispatch({ type: "CLOSE_CART" });
  const toggleCart = () =>
    state.displaySidebar
      ? dispatch({ type: "CLOSE_CART" })
      : dispatch({ type: "OPEN_CART" });
  const closeCartIfPresent = () =>
    state.displaySidebar && dispatch({ type: "CLOSE_CART" });

  const openFilter = () => dispatch({ type: "OPEN_FILTER" });
  const closeFilter = () => dispatch({ type: "CLOSE_FILTER" });

  const openDrawer = () => dispatch({ type: "OPEN_DRAWER" });
  const closeDrawer = () => dispatch({ type: "CLOSE_DRAWER" });

  const openMobileMenu = () => dispatch({ type: "OPEN_MOBILE_MENU" });
  const closeMobileMenu = () => dispatch({ type: "CLOSE_MOBILE_MENU" });

  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
  const openProductImgZoomModal = () => dispatch({ type: "OPEN_PRODUCT_IMG_ZOOM_MODAL" });
  const closeProductImgZoomModal = () => dispatch({ type: "CLOSE_PRODUCT_IMG_ZOOM_MODAL" });
  const openSearch = () => dispatch({ type: "OPEN_SEARCH" });
  const closeSearch = () => dispatch({ type: "CLOSE_SEARCH" });

  const openConfirmationModal = (data: ConfirmationModalTypes) => dispatch({ type: "OPEN_CONFIRMATION_MODAL", data });
  const closeConfirmationModal = () => dispatch({ type: "CLOSE_CONFIRMATION_MODAL" });

  const setUserAvatar = (_value: string) =>
    dispatch({ type: "SET_USER_AVATAR", value: _value });

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: "SET_MODAL_VIEW", view });
  const setDrawerView = (view: DRAWER_VIEWS) =>
    dispatch({ type: "SET_DRAWER_VIEW", view });
  const setModalData = (data: any) =>
    dispatch({ type: "SET_MODAL_DATA", data });
  const setProductImgZoomData = (data: string[]) =>
    dispatch({ type: "SET_PRODUCT_IMG_ZOOM_MODAL_DATA", data });

  const value = React.useMemo(
    () => ({
      ...state,
      authorize,
      unauthorize,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openCart,
      closeCart,
      toggleCart,
      closeCartIfPresent,
      openFilter,
      closeFilter,
      openModal,
      closeModal,
      openConfirmationModal,
      closeConfirmationModal,
      openDrawer,
      closeDrawer,
      openMobileMenu,
      closeMobileMenu,
      openProductImgZoomModal,
      closeProductImgZoomModal,
      openSearch,
      closeSearch,
      setModalView,
      setDrawerView,
      setUserAvatar,
      setModalData,
      setProductImgZoomData,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: React.FC<PropsWithChildren> = ({ children }) => (
  <CartProvider>
    <UIProvider>{children}</UIProvider>
  </CartProvider>
);