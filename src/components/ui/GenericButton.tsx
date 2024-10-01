import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const GenericButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="flex bg-defaultPrincipal justify-center items-center mx-auto max-w-[120px] min-w-[80px] rounded-[8px] px-[18px] py-[8px] text-metallicBeige font-semibold shadow-sm transition-colors duration-300 ease-in-out hover:bg-defaultSecundary active:bg-darkSlateGray focus:outline-none"
      {...props}
    >
      {children}
    </button>
  );
};

export default GenericButton;
