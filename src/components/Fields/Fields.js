import React from 'react';
import expand from '../../misc/Expand.png';

const Fields = () => {
  return (
    <div>
      <img src={expand} alt="" />
      <svg
        width="9"
        height="2"
        viewBox="0 0 9 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.865234"
          y="0.162354"
          width="8"
          height="1"
          transform="rotate(-0.0237858 0.865234 0.162354)"
          fill="white"
        />
      </svg>
      Name
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.86571 9.45939L8.86654 11.4586L10.8657 9.45773M10.8646 6.79106L8.86377 4.79189L6.8646 6.79272"
          stroke="#4A4C4D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      type <br />
      Username or scope
    </div>
  );
};
export default Fields;
