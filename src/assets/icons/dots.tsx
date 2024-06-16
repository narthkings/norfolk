import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M116 64a12 12 0 1 1 12 12 12.014 12.014 0 0 1-12-12m12 52a12 12 0 1 0 12 12 12.014 12.014 0 0 0-12-12m0 64a12 12 0 1 0 12 12 12.014 12.014 0 0 0-12-12" />
  </svg>
);
export default SVGComponent;
