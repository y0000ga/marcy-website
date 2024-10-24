import { customTestId } from '@/__mock__/testid'
import React from 'react'

export const LoadingAttribute = {
  circle: {
    className: 'opacity-25',
    cx: '12',
    cy: '12',
    r: '10',
    stroke: 'blue',
    strokeWidth: '4',
  },
  path: {
    fill: 'currentColor',
    className: 'opacity-75',
  },
  svg: {
    className: 'animate-spin -ml-1 mr-3 h-10 w-10 text-white',
  },
}
export const Loading = () => (
  <svg
    data-testid={customTestId.loadingSvg}
    className={LoadingAttribute.svg.className}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className={LoadingAttribute.circle.className}
      cx={LoadingAttribute.circle.cx}
      cy={LoadingAttribute.circle.cy}
      r={LoadingAttribute.circle.r}
      stroke={LoadingAttribute.circle.stroke}
      strokeWidth={LoadingAttribute.circle.strokeWidth}
    />
    <path
      className={LoadingAttribute.path.className}
      fill={LoadingAttribute.path.fill}
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    />
  </svg>
)
