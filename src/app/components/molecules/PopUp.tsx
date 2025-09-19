import React, { ButtonHTMLAttributes, ReactNode, useEffect } from "react";
import Button from "@/app/components/atoms/Button";

interface PopUpProps {
  children?: React.ReactNode;
  classList?: string;
  className?: string;
  isActive: boolean;
}

const PopUp: React.FC<PopUpProps> & {
  Header: React.FC<HeaderProps>;
  Footer: React.FC<FooterProps>;
  Body: React.FC<BodyProps>;
} = ({ children, className = "", classList = "", isActive }) => {
  useEffect(() => {
    if (isActive) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [isActive]);

  /**
   * @returns {number}
   */
  const preventScroll = (): number => {
    const currentScrollY = window.scrollY;
    document.documentElement.style.position = "fixed";
    document.documentElement.style.width = "100%";
    document.documentElement.style.top = `-${currentScrollY}px`;
    document.documentElement.style.overflowY = "scroll";
    return currentScrollY;
  };

  /**
   * @param prevScrollY
   */
  const allowScroll = (prevScrollY: number) => {
    document.documentElement.style.position = "";
    document.documentElement.style.width = "";
    document.documentElement.style.top = "";
    document.documentElement.style.overflowY = "";
    window.scrollTo(0, prevScrollY);
  };

  return (
    <div className={`cPopUpBg ${classList} ${isActive ? "block" : "hidden"}`}>
      <div className={`cPopUp ${className}`} tabIndex={0}>
        {children}
      </div>
    </div>
  );
};

export default PopUp;

interface HeaderProps {
  title?: ReactNode;
  backProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  closeProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({ title, backProps, closeProps }) => {
  return (
    <div className="cPopHeader">
      {backProps && (
        <button
          {...backProps}
          className={`bg-ic_back w-8 h-8 bg-no-repeat bg-center bg-contain ${
            backProps.className ?? ""
          }`}
          aria-label={backProps["aria-label"] ?? "back"}
        />
      )}

      {title && <p className="cPopHeaderTitle">{title}</p>}

      {closeProps && (
        <button
          {...closeProps}
          className={`bg-popupClose w-8 h-8 bg-no-repeat bg-center bg-contain ${
            closeProps.className ?? ""
          }`}
          aria-label={closeProps["aria-label"] ?? "close"}
        />
      )}
    </div>
  );
};

PopUp.Header = Header;

interface BodyProps {
  className?: string;
  children?: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ className = "", children }) => {
  return <div className={`cPopBody ${className}`}>{children}</div>;
};

PopUp.Body = Body;

type FooterBtnProps = Omit<
  React.ComponentProps<typeof Button>,
  "variant" | "size"
>;

interface FooterProps {
  cancelProps?: FooterBtnProps;
  confirmProps?: FooterBtnProps;
}

const Footer: React.FC<FooterProps> = ({ cancelProps, confirmProps }) => {
  return (
    <div className="cPopFooter">
      {cancelProps && (
        <Button
          {...cancelProps}
          variant="blackLine"
          size="md"
          className={`!h-10 w-[9.875rem] ${cancelProps.className ?? ""}`}
        >
          {cancelProps.children ?? "Cancel"}
        </Button>
      )}

      {confirmProps && (
        <Button
          {...confirmProps}
          variant="primary"
          size="md"
          className={`!h-10 w-[9.875rem] ${confirmProps.className ?? ""}`}
        >
          {confirmProps.children ?? "Ok"}
        </Button>
      )}
    </div>
  );
};

PopUp.Footer = Footer;
