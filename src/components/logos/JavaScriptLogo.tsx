import logo from "@/assets/js.png";
import type { SVGProps } from "react";

export default function GooglePaLM(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <image
        href={logo}
        x="0"
        y="0"
        width="230"
        height="230"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}
