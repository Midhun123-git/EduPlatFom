import React from "react";

const Phycomp = (props) => {
  const isPercentage = props.type === "percentage";

  return (
    <div className="w-[220px] h-[110px] flex items-center justify-center
      border border-[#E2E8F0] rounded-xl bg-white">
      
      <div className="flex flex-col items-center gap-1">
        
        {/* main value */}
       <p
  className={`font-bold text-3xl ${
    !props.textColor &&
    (isPercentage ? "text-[#2563EB]" : "text-[#16A34A]")
  }`}
  style={{ color: props.textColor }}  // 👈 FIX
>
  {props.value}
</p>

        {/* subtitle */}
        <p className="text-[#6B7280] text-sm">
          {props.subtitle}
        </p>

        {/* bottom text / badge */}
        {isPercentage ? (
          <span className="text-xs px-2 py-[2px] rounded-full bg-[#2563EB] text-white">
            {props.badge}
          </span>
        ) : (
          <p className="text-[#6B7280] text-sm">
            {props.title}
          </p>
        )}
      </div>
    </div>
  );
};

export default Phycomp;
