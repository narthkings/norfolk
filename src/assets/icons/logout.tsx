import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={800}
        height={800}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 1h7v1H2v11h6v1H1zm9.854 3.146 3.34 3.34-3.327 3.603-.734-.678L12.358 8H4V7h8.293l-2.147-2.146z"
            fill="#000"
        />
    </svg>
);
export default SVGComponent;
