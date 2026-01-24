import { type SVGProps } from 'react'
import logo from '@/assets/css.png'

export default function Gemini(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Image inside SVG */}
      <image
        href={logo}
        x="0"
        y="0"
        width="24"
        height="24"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  )
}
