import type { SVGProps } from 'react'

export default function GlobeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="128" cy="128" r="96" strokeWidth="16" />
      <path
        d="M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z"
        strokeWidth="16"
      />
      <line x1="37.46" y1="96" x2="218.54" y2="96" strokeWidth="16" />
      <line x1="37.46" y1="160" x2="218.54" y2="160" strokeWidth="16" />
    </svg>
  )
}
