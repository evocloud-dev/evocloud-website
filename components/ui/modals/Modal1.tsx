import React from "react";

interface Modal1Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
}

export default function Modal1({ children, onClose, isOpen }: Modal1Props) {
  return (
    isOpen && (
      <>
        <div
          onClick={onClose}
          className="fixed top-0 left-0 opacity-50 w-[100dvw] h-[100dvh] bg-black z-50 cursor-pointer"
        ></div>
        <div className="fixed w-full max-h-[90dvh] max-w-[90dvw] md:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-60 bg-gradient-to-br from-from to-to p-4 overflow-y-auto">
          {children}
        </div>
      </>
    )
  );
}
