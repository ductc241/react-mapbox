import React, { SVGProps } from "react";

const CarIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" width="512" height="512" {...props}>
      <path d="M24,8.5A1.5,1.5,0,0,0,22.5,7s-.584,0-.625.008a29.709,29.709,0,0,0-2.562-3.959,3.884,3.884,0,0,0-1.978-1.357c-1.761-.856-8.909-.856-10.67,0A3.884,3.884,0,0,0,4.687,3.049,29.709,29.709,0,0,0,2.125,7.008C2.084,7,1.5,7,1.5,7A1.5,1.5,0,0,0,0,8.5V15a4,4,0,0,0,2,3.463V20a3,3,0,0,0,6,0V19h8v1a3,3,0,0,0,6,0V18.463A4,4,0,0,0,24,15ZM6.274,4.266a1.9,1.9,0,0,1,.967-.659c1.519-.751,8-.751,9.518,0a1.9,1.9,0,0,1,.967.659,28.618,28.618,0,0,1,3.72,6.49,65.424,65.424,0,0,0-18.892,0A28.618,28.618,0,0,1,6.274,4.266ZM6,20a1,1,0,0,1-2,0V19H6Zm14,0a1,1,0,0,1-2,0V19h2Zm0-3H4a2,2,0,0,1-2-2V12.857A75.853,75.853,0,0,1,12,12a75.853,75.853,0,0,1,10,.857V15A2,2,0,0,1,20,17ZM6,15a1,1,0,0,1-2,0A1,1,0,0,1,6,15Zm14,0a1,1,0,0,1-2,0A1,1,0,0,1,20,15Z" />
    </svg>
  );
};

export default CarIcon;
