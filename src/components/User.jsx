import React from "react";
import One from "../../public/one.png";
import Points from "../../public/points.svg";

const User = ({
  image,
  desc,
  day,
  name,
  date,
  anotherDate,
  time,
  level,
  bgColor,
  width,
  bg,
}) => {
  return (
    <div>
      <div
        style={{ backgroundColor: `${bg}` }}
        className="relative  flex h-[92px] items-center justify-between px-8 py-6"
      >
        <div className="flex w-[440px] items-center gap-6">
          <img
            className="h-11 w-11 rounded-full object-cover"
            src={image}
            alt="User Img"
          />
          <div>
            <p className="mb-1 text-[14px] font-semibold text-[#252733]">
              {desc}
            </p>
            <p className="text-[12px] font-normal text-[#C5C7CD]">{day}</p>
          </div>
        </div>
        <div className="w-[208px]">
          <p className="mb-1 text-[14px] font-semibold text-[#252733]">
            {name}
          </p>
          <p className="text-[12px] font-normal text-[#C5C7CD]">{date}</p>
        </div>
        <div className="w-[140px]">
          <p className="mb-1 text-[14px] font-semibold text-[#252733]">
            {anotherDate}
          </p>
          <p className="text-[12px] font-normal text-[#C5C7CD]">{time}</p>
        </div>
        {/* h-6 w-[54px] rounded-[100px] bg-[#F12B2C] px-3 py-[5px] */}
        <div className="w-[104px]">
          <div
            style={{
              backgroundColor: `${bgColor}`,
              width: `${width}`,
              height: "24px",
              borderRadius: "100px",
              padding: "5px 12px",
            }}
          >
            <p className="text-[11px] font-bold text-white">{level}</p>
          </div>
        </div>
        <div className="absolute right-[41px] cursor-pointer">
          <img src={Points} alt="Points Img" />
        </div>
      </div>
      <hr className="h-[1.5px] bg-[#DFE0EB]" />
    </div>
  );
};

export default User;
