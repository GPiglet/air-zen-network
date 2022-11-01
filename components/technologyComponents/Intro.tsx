import React, { FC } from 'react'

type props = {
  className?: string,
  children: any,
}

const Intro: FC<props> = ({className = '', children}) => {
    return (
      <div className='relative'>
        {/* mobile background */}
        <svg className='absolute md:hidden left-[50%] translate-x-[-50%] mt-[92%] w-full h-fit' width="425" height="1270" viewBox="0 0 425 1270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
          <path d="M326.293 1266.74L326.293 1190.52C326.293 1141.21 301.096 1124.49 276.754 1108.31C251.431 1091.5 225.251 1074.15 225.251 1018.26L225.251 987.571C225.251 961.573 238.975 946.279 253.523 930.097C263.696 918.761 274.092 907.172 280.526 891.592L280.526 914.265C280.526 997.103 323.44 1028.07 361.315 1055.4C392.058 1077.6 418.618 1096.76 418.618 1139.35L418.618 1196.38C418.618 1198.12 420.044 1199.54 421.788 1199.54C423.531 1199.54 424.957 1198.12 424.957 1196.38L424.957 754.449C424.957 716.45 392.692 692.891 358.526 667.938C323.313 642.225 286.897 615.626 286.897 571.578L286.897 371.607C286.897 350.739 272.983 338.674 258.245 325.881C247.627 316.667 236.217 306.723 228.23 292.284C222.05 281.042 217.93 267.077 217.93 248.584L217.93 3.16659C217.93 1.42496 216.504 -9.11179e-06 214.76 -9.18798e-06C213.017 -9.26418e-06 211.591 1.42496 211.591 3.16659L211.591 248.584C211.591 290.795 188.264 309.383 167.694 325.818C151.657 338.611 136.476 350.708 136.476 371.639L136.476 482.47C136.475 536.365 92.6106 563.82 50.2036 590.356C9.73 615.689 -28.525 639.597 -28.525 684.467L-28.525 767.812C-28.525 799.985 -59.8707 817.906 -90.1705 835.259C-120.09 852.391 -148.33 868.571 -148.33 897.608L-148.33 902.516C-148.33 958.375 -191.18 986.304 -232.605 1013.32C-271.652 1038.77 -311.999 1065.09 -311.999 1114.42L-311.999 1193.59C-311.999 1195.33 -310.573 1196.76 -308.829 1196.76C-307.086 1196.76 -305.66 1195.33 -305.66 1193.59L-305.66 1154.86C-297.546 1170.79 -282.777 1180.07 -268.324 1189.06C-247.786 1201.89 -228.358 1213.98 -228.358 1244.95L-228.358 1260.47C-228.358 1262.21 -226.931 1263.64 -225.188 1263.64C-223.445 1263.64 -222.019 1262.21 -222.019 1260.47L-222.019 1216.77C-222.019 1170.7 -204.08 1156.51 -185.095 1141.53C-170.896 1130.29 -156.348 1118.79 -148.33 1094.63L-148.33 1196.41C-148.33 1198.15 -146.903 1199.57 -145.16 1199.57C-143.417 1199.57 -141.991 1198.15 -141.991 1196.41L-141.991 1156.16C-141.991 1109.99 -114.797 1086.27 -86.0185 1061.19C-54.6412 1033.83 -22.1862 1005.59 -22.1862 946.564L-22.1862 881.269C-15.3719 903.119 -4.0254 916.513 7.0993 929.591C23.3902 948.812 38.7936 966.925 38.7936 1011.57L38.7936 1019.68C38.7936 1075.6 15.0863 1091.94 -7.82868 1107.74C-29.9513 1123.01 -52.8346 1138.81 -52.8346 1188.08L-52.8346 1231.78C-52.8346 1233.52 -51.4083 1234.95 -49.6651 1234.95C-47.922 1234.95 -46.4958 1233.52 -46.4958 1231.78L-46.4958 1188.08C-46.4958 1142.13 -25.9578 1127.95 -4.21554 1112.94C12.6141 1101.32 29.8241 1089.44 38.7936 1063.51L38.7936 1196.41C38.7936 1198.15 40.2199 1199.57 41.9631 1199.57C43.7063 1199.57 45.1325 1198.15 45.1325 1196.41L45.1325 1102.52C52.5173 1124.97 65.2584 1135.51 77.7459 1145.84C94.8292 1159.96 110.993 1173.29 110.993 1219.4L110.993 1254.23C110.993 1255.97 112.419 1257.4 114.163 1257.4C115.906 1257.4 117.332 1255.97 117.332 1254.23L117.332 1219.4C117.332 1170.28 99.2664 1155.37 81.8028 1140.96C63.7688 1126.08 45.1325 1110.69 45.1325 1054.61L45.1325 987.634C45.1325 962.08 66.8748 946.785 89.9166 930.636C108.268 917.748 126.999 904.544 136.475 885.354L136.475 947.957C136.475 1007.05 159.01 1025.38 180.784 1043.11C200.371 1059.04 218.881 1074.11 218.881 1120.22L218.881 1196.44C218.881 1198.18 220.307 1199.61 222.05 1199.61C223.793 1199.61 225.22 1198.18 225.22 1196.44L225.22 1060.72C234.918 1088.24 254.283 1101.13 273.236 1113.7C297.261 1129.62 319.954 1144.7 319.954 1190.61L319.954 1266.83C319.954 1268.58 321.38 1270 323.123 1270C324.866 1270 326.293 1268.58 326.293 1266.83L326.293 1266.74ZM354.754 673.036C387.589 697.007 418.586 719.648 418.586 754.449L418.586 1106.07C408.381 1081.65 387.177 1066.23 364.991 1050.24C328.353 1023.8 286.833 993.841 286.833 914.233L286.833 603.244C299.099 632.345 327.275 652.928 354.722 673.004L354.754 673.036ZM142.846 714.55L142.846 635.385C142.846 589.406 175.523 566.353 210.101 541.939C238.69 521.767 267.975 501.089 280.526 466.51L280.526 661.605C280.526 703.277 245.884 721.707 209.214 741.244C182.401 755.526 154.922 770.155 142.846 794.823L142.846 714.55ZM142.846 371.639C142.846 353.747 156.189 343.108 171.656 330.758C187.852 317.838 207.09 302.385 214.634 274.456C221.575 302.322 239.197 317.775 254.061 330.663C268.26 343.013 280.526 353.652 280.526 371.639L280.526 428.606C280.526 484.497 242.842 511.064 206.457 536.777C180.848 554.858 154.605 573.383 142.846 602.041L142.846 371.607L142.846 371.639ZM-22.1545 684.436C-22.1545 643.08 14.6426 620.059 53.5949 595.676C87.6346 574.396 122.53 552.515 136.507 517.017L136.507 831.143C123.227 805.398 91.0259 790.39 59.6168 775.792C17.5585 756.254 -22.1545 737.793 -22.1545 696.216L-22.1545 684.436ZM-188.993 1136.53C-208.327 1151.79 -228.326 1167.59 -228.326 1216.74L-228.326 1216.93C-236.345 1201.54 -250.765 1192.48 -264.933 1183.68C-285.851 1170.63 -305.628 1158.31 -305.628 1126.17L-305.628 1114.39C-305.628 1068.48 -268.451 1044.25 -229.118 1018.6C-195.998 997.007 -162.022 974.842 -148.298 938.521L-148.298 1048.34C-148.298 1104.39 -168.994 1120.73 -189.025 1136.53L-188.993 1136.53ZM-28.4934 946.5C-28.4934 1002.64 -59.839 1029.94 -90.1388 1056.35C-110.708 1074.27 -131.753 1092.7 -141.927 1119.9L-141.927 897.545C-141.927 872.181 -115.241 856.887 -86.9693 840.706C-63.5472 827.311 -39.5864 813.537 -28.4934 792.986L-28.4934 946.469L-28.4934 946.5ZM86.3034 925.379C66.748 939.09 46.7172 953.245 40.6953 974.43C34.61 952.137 23.1367 938.647 11.9486 925.443C-4.8177 905.683 -22.1545 885.26 -22.1545 833.581L-22.1545 723.86C-8.62106 751.029 24.5946 766.45 56.9545 781.523C97.8718 800.523 136.507 818.507 136.507 857.773C136.507 890.136 110.993 908.058 86.3034 925.379ZM218.912 1079.91C211.306 1059.67 197.931 1048.78 184.841 1038.14C164.208 1021.33 142.846 1003.97 142.846 947.894L142.846 823.163C142.846 783.771 176.537 765.817 212.225 746.818C239.894 732.093 268.229 716.988 280.526 690.959L280.526 857.741C280.526 890.516 264.394 908.47 248.832 925.823C234.126 942.194 218.912 959.103 218.912 987.539L218.912 1079.88L218.912 1079.91Z" fill="url(#paint0_linear_5690_2543)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_5690_2543" x1="56.4474" y1="47.0748" x2="56.4473" y2="1269.8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7BB690"/>
          <stop offset="1" stopColor="#79B390" stopOpacity="0"/>
          </linearGradient>
          </defs>
        </svg>

        {/* desktop background */}
        <svg className='absolute hidden md:block md:left-[22%] md:top-[57%] md:translate-y-[-50%] md:w-[667px]' viewBox="0 0 667 453" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
          <path d="M664.319 61.4217H617.567C587.325 61.4217 577.069 76.8772 567.144 91.8078C556.83 107.341 546.186 123.399 511.903 123.399H493.082C477.135 123.399 467.753 114.981 457.828 106.058C450.874 99.8174 443.765 93.4408 434.209 89.4943H448.116C498.928 89.4943 517.924 63.1714 534.687 39.9396C548.303 21.082 560.054 4.79052 586.179 4.79052H621.16C622.229 4.79052 623.103 3.91568 623.103 2.84643C623.103 1.77718 622.229 0.902344 621.16 0.902344H350.086C326.778 0.902344 312.327 20.6931 297.021 41.6504C281.249 63.2492 264.933 85.5867 237.915 85.5867H115.256C102.455 85.5867 95.0551 94.1213 87.208 103.161C81.5558 109.674 75.4568 116.673 66.5997 121.572C59.7044 125.363 51.1386 127.89 39.7952 127.89H2.20407C1.13578 127.89 0.261719 128.765 0.261719 129.834C0.261719 130.903 1.13578 131.778 2.20407 131.778H39.7952C65.6868 131.778 77.0884 146.087 87.1692 158.704C95.0163 168.541 102.436 177.853 115.275 177.853H183.257C216.316 177.853 233.156 204.759 249.433 230.771C264.972 255.597 279.637 279.062 307.16 279.062H358.283C378.017 279.062 389.011 298.289 399.655 316.875C410.163 335.227 420.088 352.549 437.9 352.549H440.91C475.173 352.549 492.305 378.833 508.873 404.242C524.49 428.193 540.63 452.941 570.892 452.941H619.451C620.519 452.941 621.393 452.066 621.393 450.997C621.393 449.928 620.519 449.053 619.451 449.053H595.696C605.466 444.076 611.157 435.017 616.674 426.152C624.54 413.554 631.96 401.637 650.956 401.637H660.474C661.542 401.637 662.416 400.762 662.416 399.693C662.416 398.623 661.542 397.749 660.474 397.749H633.669C605.408 397.749 596.706 386.745 587.519 375.1C580.623 366.391 573.573 357.467 558.753 352.549H621.18C622.248 352.549 623.122 351.674 623.122 350.605C623.122 349.535 622.248 348.66 621.18 348.66H596.492C568.173 348.66 553.625 331.98 538.241 314.328C521.459 295.081 504.134 275.174 467.928 275.174H427.877C441.279 270.994 449.495 264.034 457.517 257.211C469.307 247.218 480.418 237.77 507.805 237.77H512.777C547.079 237.77 557.102 252.312 566.794 266.367C576.156 279.937 585.848 293.973 616.071 293.973H642.876C643.944 293.973 644.818 293.098 644.818 292.029C644.818 290.96 643.944 290.085 642.876 290.085H616.071C587.888 290.085 579.186 277.487 569.979 264.151C562.851 253.828 555.567 243.272 539.659 237.77H621.18C622.248 237.77 623.122 236.895 623.122 235.826C623.122 234.756 622.248 233.882 621.18 233.882H563.589C577.36 229.352 583.828 221.537 590.16 213.877C598.823 203.398 607.001 193.483 635.281 193.483H656.647C657.715 193.483 658.589 192.609 658.589 191.539C658.589 190.47 657.715 189.595 656.647 189.595H635.281C605.155 189.595 596.007 200.677 587.169 211.389C578.04 222.45 568.6 233.882 534.201 233.882H493.121C477.446 233.882 468.064 220.545 458.158 206.412C450.253 195.155 442.153 183.666 430.383 177.853H468.783C505.027 177.853 516.273 164.031 527.151 150.675C536.921 138.66 546.166 127.307 574.447 127.307H621.199C622.268 127.307 623.142 126.432 623.142 125.363C623.142 124.293 622.268 123.419 621.199 123.419H537.95C554.829 117.47 562.734 105.591 570.446 93.9657C580.216 79.2296 589.461 65.3099 617.625 65.3099H664.378C665.446 65.3099 666.32 64.4351 666.32 63.3658C666.32 62.2966 665.446 61.4217 664.378 61.4217H664.319ZM300.148 43.9638C314.852 23.8231 328.739 4.80996 350.086 4.80996H565.765C550.789 11.0699 541.33 24.0759 531.521 37.6845C515.302 60.1581 496.928 85.6256 448.097 85.6256H257.339C275.189 78.102 287.814 60.8191 300.129 43.9833L300.148 43.9638ZM325.612 173.945H277.053C248.85 173.945 234.71 153.902 219.735 132.692C207.362 115.156 194.678 97.1929 173.468 89.4943H293.136C318.697 89.4943 330.002 110.743 341.986 133.236C350.746 149.683 359.72 166.538 374.851 173.945H325.612ZM115.275 173.945C104.301 173.945 97.7744 165.761 90.1993 156.274C82.2745 146.339 72.7958 134.539 55.6642 129.912C72.7569 125.654 82.2356 114.845 90.141 105.727C97.7161 97.018 104.242 89.4943 115.275 89.4943H150.218C184.5 89.4943 200.797 112.61 216.569 134.928C227.659 150.636 239.022 166.733 256.6 173.945H115.256H115.275ZM307.14 275.155C281.773 275.155 267.652 252.584 252.696 228.691C239.644 207.811 226.222 186.407 204.448 177.834H397.13C381.338 185.979 372.132 205.731 363.177 224.997C351.193 250.795 339.869 275.155 314.366 275.155H307.14ZM584.45 377.491C593.812 389.35 603.504 401.617 633.65 401.617H633.766C624.326 406.536 618.771 415.381 613.372 424.072C605.369 436.902 597.813 449.034 578.098 449.034H570.873C542.709 449.034 527.85 426.229 512.117 402.103C498.87 381.788 485.274 360.947 462.995 352.529H530.355C564.735 352.529 574.758 365.224 584.45 377.511V377.491ZM467.889 279.043C502.327 279.043 519.07 298.27 535.27 316.855C546.263 329.472 557.568 342.381 574.253 348.622H437.861C422.302 348.622 412.921 332.252 402.995 314.911C394.779 300.544 386.33 285.847 373.724 279.043H467.87H467.889ZM454.934 208.628C463.344 220.623 472.027 232.91 485.021 236.603C471.347 240.336 463.072 247.374 454.973 254.236C442.853 264.52 430.324 275.155 398.625 275.155H331.323C347.988 266.853 357.447 246.479 366.693 226.63C378.347 201.532 389.38 177.834 413.465 177.834C433.316 177.834 444.309 193.484 454.934 208.628ZM549.721 127.287C537.309 131.953 530.627 140.157 524.101 148.186C513.787 160.842 503.143 173.945 468.744 173.945H392.235C368.072 173.945 357.059 153.28 345.405 131.389C336.373 114.418 327.108 97.0374 311.142 89.4943H413.445C433.549 89.4943 444.562 99.3897 455.206 108.935C465.248 117.956 475.62 127.287 493.062 127.287H549.701H549.721Z" fill="url(#paint0_linear_5683_2126)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_5683_2126" x1="-83.7383" y1="226.941" x2="666.262" y2="226.941" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7BB690"/>
          <stop offset="1" stopColor="#79B390" stopOpacity="0"/>
          </linearGradient>
          </defs>
        </svg>
        {children}
      </div>
    )
}

export default Intro