import Image from "next/image";
import React from "react";

type props = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string;
};

const Button = ({ title, icon, type, variant }: props) => {
  return (
    <>
      <div className="">
        <button
          type={type}
          className={`flexCenter gap-3 rounded-full border ${variant}`}
        >
          {icon && <Image src={icon} width={24} height={24} alt={title} />}
          <label className="bold-16 whitespace-nowrap ">{title}</label>
        </button>
      </div>
    </>
  );
};

export default Button;
