import React, { FC } from 'react'

type props = {
  className?: string,
  children?: any,
}

const Heading: FC<props> = ({className = '', children}) => {
    return (
      <div className={`relative ${className}`}>
        <svg className="relative w-full md:w-[120%]" viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M71.4783 368.638C131.913 429.073 229.981 429.04 290.52 368.565C351.058 308.089 351.143 210.072 290.708 149.638C230.273 89.2029 132.205 89.2359 71.6664 149.711C11.1278 210.186 11.0436 308.203 71.4783 368.638Z" fill="url(#paint0_radial_5683_2127)"/>
          <path d="M234.118 167.966C183.67 138.856 119.128 156.191 89.9593 206.684C60.7904 257.177 78.0404 321.707 128.488 350.816C178.936 379.926 243.478 362.591 272.647 312.098C301.816 261.605 284.566 197.075 234.118 167.966Z" fill="url(#paint1_radial_5683_2127)"/>
          <path opacity="0.4" d="M135.568 393.335C61.6752 368.118 22.1608 287.835 47.3087 214.018C72.4566 140.202 152.745 100.803 226.638 126.02C300.531 151.237 340.045 231.52 314.897 305.337C289.749 379.153 209.461 418.552 135.568 393.335Z" stroke="url(#paint2_linear_5683_2127)"/>
          <defs>
          <radialGradient id="paint0_radial_5683_2127" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172.637 187.381) rotate(88.9029) scale(243.295 243.434)">
          <stop stopColor="#8ABE9C"/>
          <stop offset="1" stopColor="#8ABE9C" stopOpacity="0.29"/>
          </radialGradient>
          <radialGradient id="paint1_radial_5683_2127" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(274.424 272.285) rotate(-171.137) scale(217.205 217.324)">
          <stop stopColor="#8ABE9C"/>
          <stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="paint2_linear_5683_2127" x1="315.371" y1="305.498" x2="46.7876" y2="213.997" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7BB690"/>
          <stop offset="1" stopColor="#7BB690" stopOpacity="0"/>
          </linearGradient>
          </defs>
        </svg>


        <svg className="absolute left-1/2 md:left-0 translate-x-[-50%] md:translate-x-0 top-[1%] w-1/2 md:w-[60%]" viewBox="0 0 200 274" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.7" d="M29.8872 111.838C16.1133 151.627 37.1112 195.098 76.7875 208.932C116.464 222.767 159.794 201.727 173.568 161.938C187.342 122.15 166.344 78.6792 126.668 64.8444C86.9912 51.0096 43.6612 72.0495 29.8872 111.838Z" fill="url(#paint0_radial_5701_2089)"/>
          <path opacity="0.7" d="M82.7488 88.1333C54.8778 99.6195 41.4123 131.193 52.673 158.654C63.9336 186.115 95.6561 199.065 123.527 187.579C151.398 176.093 164.864 144.52 153.603 117.058C142.342 89.5974 110.62 76.6471 82.7488 88.1333Z" fill="url(#paint1_radial_5701_2089)"/>
          <g clipPath="url(#clip0_5701_2089)">
          <path d="M93.5 127.799L94.6663 129.428C95.3071 130.324 96.5247 130.577 97.4987 130.059C98.6906 129.428 100.049 129.087 101.446 129.087C102.843 129.087 104.189 129.428 105.394 130.059C106.368 130.577 107.585 130.312 108.226 129.428L109.392 127.799C107.162 125.982 104.381 124.984 101.446 124.984C98.5112 124.984 95.7301 125.982 93.5 127.799Z" fill="white"/>
          <path d="M87.4766 119.418L88.63 121.034C89.3093 121.968 90.5909 122.208 91.5906 121.602C94.5256 119.809 97.9091 118.837 101.459 118.837C105.009 118.837 108.393 119.797 111.328 121.602C112.315 122.208 113.609 121.968 114.288 121.034L115.442 119.418C111.456 116.375 106.586 114.734 101.459 114.734C96.3327 114.734 91.4625 116.388 87.4766 119.418Z" fill="white"/>
          <path d="M101.46 104.484C94.1414 104.484 87.1949 106.795 81.4531 111.049L82.6066 112.652C83.2731 113.586 84.5803 113.851 85.5544 113.22C90.2452 110.203 95.7178 108.587 101.447 108.587C107.176 108.587 112.661 110.203 117.339 113.22C118.313 113.851 119.62 113.586 120.287 112.652L121.44 111.049C115.724 106.795 108.765 104.484 101.46 104.484Z" fill="white"/>
          <path d="M101.46 145.36L110.957 168.297C111.251 169.017 111.969 169.484 112.751 169.484H116.724L103.651 139.414H99.6397L86.1953 169.484H90.1812C90.963 169.484 91.6807 169.017 91.9755 168.297L101.46 145.36Z" fill="white"/>
          </g>
          <defs>
          <radialGradient id="paint0_radial_5701_2089" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(138.926 203.755) rotate(-130.213) scale(151.302 151.155)">
          <stop stopColor="#8ABE9C"/>
          <stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint1_radial_5701_2089" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(134.024 179.571) rotate(-117.137) scale(121.25 123.19)">
          <stop stopColor="#8ABE9C"/>
          <stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
          </radialGradient>
          <clipPath id="clip0_5701_2089">
          <rect width="40" height="65" fill="white" transform="translate(81.4531 104.484)"/>
          </clipPath>
          </defs>
        </svg>
        {children}
      </div>      
    )
}

export default Heading