import { useAnimate } from "framer-motion";
import React from "react";

const Button = ({ label, type }: { label: string, type: string }) => {
  const [scope, animate] = useAnimate();
  const buttonClick = () => {
    animate([
        [".glare", { x: -100 ,rotate:45}, { duration: 0 }],
        ["button", { scale: 1.25 }, { duration: 0.05 }],
        ["button", { scale: 0.75}, { duration: 0.25 }],
        [".glare", { x: 150, rotate:45 }, { duration: 0.35 }],
      ["button", { scale: 1 }, { duration: 0.25 }],
    ]);
  };
  const bgclass = type==='primary' ?'bg-primary':type==='secondary'?'bg-secondary':type==='tirtiary'?'bg-tirtiary':'bg-default';
  const textcolor = type==='default'? 'text-black':'text-white';
  return (
    <div ref={scope}>
      <button onClick={buttonClick} className={`border-none relative overflow-hidden ${textcolor} rounded-full  px-3 py-2 ${bgclass}`}>{label}
        <div className="glare h-36 w-4 bg-white/35 absolute -top-12 -left-8 rotate-45"></div>
      </button>
    </div>
  );
};

export default Button;
