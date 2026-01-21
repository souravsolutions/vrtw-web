import { type SVGProps } from "react";
import logo from "@/assets/zustand.webp";

export default function CustomLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <image
        href={logo}
        x="0"
        y="0"
        width="120"
        height="120"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}