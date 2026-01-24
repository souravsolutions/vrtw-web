import { type SVGProps } from "react"
import replitLogo from "@/assets/router.webp"

export default function Replit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 24"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <image
        href={replitLogo}
        width="20"
        height="30"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  )
}