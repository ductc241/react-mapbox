import React, { SVGProps } from "react";

const MarkerIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props} fill="red">
      <path d="M12,0A10.011,10.011,0,0,0,2,10c0,5.282,8.4,12.533,9.354,13.343l.646.546.646-.546C13.6,22.533,22,15.282,22,10A10.011,10.011,0,0,0,12,0Zm0,15a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,15Z" />
      <circle cx="12" cy="10" r="3" fill="transparent" />
    </svg>
  );
};

export default MarkerIcon;