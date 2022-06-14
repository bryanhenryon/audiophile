import { createContext, ReactNode, useState } from "react";

interface IsShowing {
  cart: boolean;
  conformation: boolean;
  navbar: boolean;
  [key: string]: boolean;
}

interface ModalContextInterface {
  isShowing: IsShowing;
  toggleModal: (modal: string) => void;
  keyHideModal: (e: KeyboardEvent) => void;
}

type ModalProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext<ModalContextInterface | null>(null);

const ModalProvider = ({ children }: ModalProviderProps): JSX.Element => {
  const [isShowing, setIsShowing] = useState<IsShowing>({
    cart: false,
    conformation: false,
    navbar: false,
  });

  const toggleModal = (modal: string): void => {
    setIsShowing((prevState) => ({ ...prevState, [modal]: !prevState[modal] }));
  };

  const keyHideModal = (event: KeyboardEvent): void => {
    if ((event?.key === "Escape" && isShowing.cart) || isShowing.conformation)
      setIsShowing((prevState) => ({ ...isShowing, modal: false }));
  };

  const modal = {
    isShowing: isShowing,
    toggleModal: toggleModal,
    keyHideModal: keyHideModal,
  };

  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
