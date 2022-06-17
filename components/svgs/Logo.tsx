import React, { useEffect, useState } from "react";

type Props = {
  darktheme: boolean;
};

const Logo: React.FC<Props> = ({ darktheme }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <svg viewBox="0 0 182 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.56 12.4C10.3067 11.9333 9.94 11.58 9.46 11.34C8.99333 11.0867 8.44 10.96 7.8 10.96C6.69333 10.96 5.80667 11.3267 5.14 12.06C4.47333 12.78 4.14 13.7467 4.14 14.96C4.14 16.2533 4.48667 17.2667 5.18 18C5.88667 18.72 6.85333 19.08 8.08 19.08C8.92 19.08 9.62667 18.8667 10.2 18.44C10.7867 18.0133 11.2133 17.4 11.48 16.6H7.14V14.08H14.58V17.26C14.3267 18.1133 13.8933 18.9067 13.28 19.64C12.68 20.3733 11.9133 20.9667 10.98 21.42C10.0467 21.8733 8.99333 22.1 7.82 22.1C6.43333 22.1 5.19333 21.8 4.1 21.2C3.02 20.5867 2.17333 19.74 1.56 18.66C0.96 17.58 0.66 16.3467 0.66 14.96C0.66 13.5733 0.96 12.34 1.56 11.26C2.17333 10.1667 3.02 9.32 4.1 8.72C5.18 8.10667 6.41333 7.8 7.8 7.8C9.48 7.8 10.8933 8.20667 12.04 9.02C13.2 9.83333 13.9667 10.96 14.34 12.4H10.56ZM18.1944 9.68C17.5944 9.68 17.101 9.50667 16.7144 9.16C16.341 8.8 16.1544 8.36 16.1544 7.84C16.1544 7.30667 16.341 6.86667 16.7144 6.52C17.101 6.16 17.5944 5.98 18.1944 5.98C18.781 5.98 19.261 6.16 19.6344 6.52C20.021 6.86667 20.2144 7.30667 20.2144 7.84C20.2144 8.36 20.021 8.8 19.6344 9.16C19.261 9.50667 18.781 9.68 18.1944 9.68ZM19.8944 10.84V22H16.4744V10.84H19.8944ZM27.4528 22.16C26.3595 22.16 25.3728 21.9267 24.4928 21.46C23.6261 20.9933 22.9395 20.3267 22.4328 19.46C21.9395 18.5933 21.6928 17.58 21.6928 16.42C21.6928 15.2733 21.9461 14.2667 22.4528 13.4C22.9595 12.52 23.6528 11.8467 24.5328 11.38C25.4128 10.9133 26.3995 10.68 27.4928 10.68C28.5861 10.68 29.5728 10.9133 30.4528 11.38C31.3328 11.8467 32.0261 12.52 32.5328 13.4C33.0395 14.2667 33.2928 15.2733 33.2928 16.42C33.2928 17.5667 33.0328 18.58 32.5128 19.46C32.0061 20.3267 31.3061 20.9933 30.4128 21.46C29.5328 21.9267 28.5461 22.16 27.4528 22.16ZM27.4528 19.2C28.1061 19.2 28.6595 18.96 29.1128 18.48C29.5795 18 29.8128 17.3133 29.8128 16.42C29.8128 15.5267 29.5861 14.84 29.1328 14.36C28.6928 13.88 28.1461 13.64 27.4928 13.64C26.8261 13.64 26.2728 13.88 25.8328 14.36C25.3928 14.8267 25.1728 15.5133 25.1728 16.42C25.1728 17.3133 25.3861 18 25.8128 18.48C26.2528 18.96 26.7995 19.2 27.4528 19.2ZM40.1272 18.8L42.5472 10.84H46.1872L42.2272 22H38.0072L34.0472 10.84H37.7072L40.1272 18.8ZM46.9467 16.4C46.9467 15.2533 47.1601 14.2467 47.5867 13.38C48.0267 12.5133 48.6201 11.8467 49.3667 11.38C50.1134 10.9133 50.9467 10.68 51.8667 10.68C52.6534 10.68 53.3401 10.84 53.9267 11.16C54.5267 11.48 54.9867 11.9 55.3067 12.42V10.84H58.7267V22H55.3067V20.42C54.9734 20.94 54.5067 21.36 53.9067 21.68C53.3201 22 52.6334 22.16 51.8467 22.16C50.9401 22.16 50.1134 21.9267 49.3667 21.46C48.6201 20.98 48.0267 20.3067 47.5867 19.44C47.1601 18.56 46.9467 17.5467 46.9467 16.4ZM55.3067 16.42C55.3067 15.5667 55.0667 14.8933 54.5867 14.4C54.1201 13.9067 53.5467 13.66 52.8667 13.66C52.1867 13.66 51.6067 13.9067 51.1267 14.4C50.6601 14.88 50.4267 15.5467 50.4267 16.4C50.4267 17.2533 50.6601 17.9333 51.1267 18.44C51.6067 18.9333 52.1867 19.18 52.8667 19.18C53.5467 19.18 54.1201 18.9333 54.5867 18.44C55.0667 17.9467 55.3067 17.2733 55.3067 16.42ZM68.0009 10.72C69.3076 10.72 70.3476 11.1467 71.1209 12C71.9076 12.84 72.3009 14 72.3009 15.48V22H68.9009V15.94C68.9009 15.1933 68.7076 14.6133 68.3209 14.2C67.9343 13.7867 67.4143 13.58 66.7609 13.58C66.1076 13.58 65.5876 13.7867 65.2009 14.2C64.8143 14.6133 64.6209 15.1933 64.6209 15.94V22H61.2009V10.84H64.6209V12.32C64.9676 11.8267 65.4343 11.44 66.0209 11.16C66.6076 10.8667 67.2676 10.72 68.0009 10.72ZM81.4775 10.72C82.7842 10.72 83.8242 11.1467 84.5975 12C85.3842 12.84 85.7775 14 85.7775 15.48V22H82.3775V15.94C82.3775 15.1933 82.1842 14.6133 81.7975 14.2C81.4108 13.7867 80.8908 13.58 80.2375 13.58C79.5842 13.58 79.0642 13.7867 78.6775 14.2C78.2908 14.6133 78.0975 15.1933 78.0975 15.94V22H74.6775V10.84H78.0975V12.32C78.4442 11.8267 78.9108 11.44 79.4975 11.16C80.0842 10.8667 80.7442 10.72 81.4775 10.72ZM89.8741 9.68C89.2741 9.68 88.7807 9.50667 88.3941 9.16C88.0207 8.8 87.8341 8.36 87.8341 7.84C87.8341 7.30667 88.0207 6.86667 88.3941 6.52C88.7807 6.16 89.2741 5.98 89.8741 5.98C90.4607 5.98 90.9407 6.16 91.3141 6.52C91.7007 6.86667 91.8941 7.30667 91.8941 7.84C91.8941 8.36 91.7007 8.8 91.3141 9.16C90.9407 9.50667 90.4607 9.68 89.8741 9.68ZM91.5741 10.84V22H88.1541V10.84H91.5741ZM106.791 14.8C107.604 14.9733 108.257 15.38 108.751 16.02C109.244 16.6467 109.491 17.3667 109.491 18.18C109.491 19.3533 109.077 20.2867 108.251 20.98C107.437 21.66 106.297 22 104.831 22H98.2908V7.96H104.611C106.037 7.96 107.151 8.28667 107.951 8.94C108.764 9.59333 109.171 10.48 109.171 11.6C109.171 12.4267 108.951 13.1133 108.511 13.66C108.084 14.2067 107.511 14.5867 106.791 14.8ZM101.711 13.64H103.951C104.511 13.64 104.937 13.52 105.231 13.28C105.537 13.0267 105.691 12.66 105.691 12.18C105.691 11.7 105.537 11.3333 105.231 11.08C104.937 10.8267 104.511 10.7 103.951 10.7H101.711V13.64ZM104.231 19.24C104.804 19.24 105.244 19.1133 105.551 18.86C105.871 18.5933 106.031 18.2133 106.031 17.72C106.031 17.2267 105.864 16.84 105.531 16.56C105.211 16.28 104.764 16.14 104.191 16.14H101.711V19.24H104.231ZM121.994 16.24C121.994 16.56 121.974 16.8933 121.934 17.24H114.194C114.248 17.9333 114.468 18.4667 114.854 18.84C115.254 19.2 115.741 19.38 116.314 19.38C117.168 19.38 117.761 19.02 118.094 18.3H121.734C121.548 19.0333 121.208 19.6933 120.714 20.28C120.234 20.8667 119.628 21.3267 118.894 21.66C118.161 21.9933 117.341 22.16 116.434 22.16C115.341 22.16 114.368 21.9267 113.514 21.46C112.661 20.9933 111.994 20.3267 111.514 19.46C111.034 18.5933 110.794 17.58 110.794 16.42C110.794 15.26 111.028 14.2467 111.494 13.38C111.974 12.5133 112.641 11.8467 113.494 11.38C114.348 10.9133 115.328 10.68 116.434 10.68C117.514 10.68 118.474 10.9067 119.314 11.36C120.154 11.8133 120.808 12.46 121.274 13.3C121.754 14.14 121.994 15.12 121.994 16.24ZM118.494 15.34C118.494 14.7533 118.294 14.2867 117.894 13.94C117.494 13.5933 116.994 13.42 116.394 13.42C115.821 13.42 115.334 13.5867 114.934 13.92C114.548 14.2533 114.308 14.7267 114.214 15.34H118.494ZM123.119 16.42C123.119 15.26 123.352 14.2467 123.819 13.38C124.299 12.5133 124.959 11.8467 125.799 11.38C126.652 10.9133 127.625 10.68 128.719 10.68C130.119 10.68 131.285 11.0467 132.219 11.78C133.165 12.5133 133.785 13.5467 134.079 14.88H130.439C130.132 14.0267 129.539 13.6 128.659 13.6C128.032 13.6 127.532 13.8467 127.159 14.34C126.785 14.82 126.599 15.5133 126.599 16.42C126.599 17.3267 126.785 18.0267 127.159 18.52C127.532 19 128.032 19.24 128.659 19.24C129.539 19.24 130.132 18.8133 130.439 17.96H134.079C133.785 19.2667 133.165 20.2933 132.219 21.04C131.272 21.7867 130.105 22.16 128.719 22.16C127.625 22.16 126.652 21.9267 125.799 21.46C124.959 20.9933 124.299 20.3267 123.819 19.46C123.352 18.5933 123.119 17.58 123.119 16.42ZM135.228 16.42C135.228 15.26 135.461 14.2467 135.928 13.38C136.408 12.5133 137.068 11.8467 137.908 11.38C138.761 10.9133 139.735 10.68 140.828 10.68C142.228 10.68 143.395 11.0467 144.328 11.78C145.275 12.5133 145.895 13.5467 146.188 14.88H142.548C142.241 14.0267 141.648 13.6 140.768 13.6C140.141 13.6 139.641 13.8467 139.268 14.34C138.895 14.82 138.708 15.5133 138.708 16.42C138.708 17.3267 138.895 18.0267 139.268 18.52C139.641 19 140.141 19.24 140.768 19.24C141.648 19.24 142.241 18.8133 142.548 17.96H146.188C145.895 19.2667 145.275 20.2933 144.328 21.04C143.381 21.7867 142.215 22.16 140.828 22.16C139.735 22.16 138.761 21.9267 137.908 21.46C137.068 20.9933 136.408 20.3267 135.928 19.46C135.461 18.5933 135.228 17.58 135.228 16.42ZM147.337 16.4C147.337 15.2533 147.551 14.2467 147.977 13.38C148.417 12.5133 149.011 11.8467 149.757 11.38C150.504 10.9133 151.337 10.68 152.257 10.68C153.044 10.68 153.731 10.84 154.317 11.16C154.917 11.48 155.377 11.9 155.697 12.42V10.84H159.117V22H155.697V20.42C155.364 20.94 154.897 21.36 154.297 21.68C153.711 22 153.024 22.16 152.237 22.16C151.331 22.16 150.504 21.9267 149.757 21.46C149.011 20.98 148.417 20.3067 147.977 19.44C147.551 18.56 147.337 17.5467 147.337 16.4ZM155.697 16.42C155.697 15.5667 155.457 14.8933 154.977 14.4C154.511 13.9067 153.937 13.66 153.257 13.66C152.577 13.66 151.997 13.9067 151.517 14.4C151.051 14.88 150.817 15.5467 150.817 16.4C150.817 17.2533 151.051 17.9333 151.517 18.44C151.997 18.9333 152.577 19.18 153.257 19.18C153.937 19.18 154.511 18.9333 154.977 18.44C155.457 17.9467 155.697 17.2733 155.697 16.42ZM165.012 12.7C165.412 12.0867 165.912 11.6067 166.512 11.26C167.112 10.9 167.778 10.72 168.512 10.72V14.34H167.572C166.718 14.34 166.078 14.5267 165.652 14.9C165.225 15.26 165.012 15.9 165.012 16.82V22H161.592V10.84H165.012V12.7ZM175.226 22.16C174.133 22.16 173.146 21.9267 172.266 21.46C171.4 20.9933 170.713 20.3267 170.206 19.46C169.713 18.5933 169.466 17.58 169.466 16.42C169.466 15.2733 169.72 14.2667 170.226 13.4C170.733 12.52 171.426 11.8467 172.306 11.38C173.186 10.9133 174.173 10.68 175.266 10.68C176.36 10.68 177.346 10.9133 178.226 11.38C179.106 11.8467 179.8 12.52 180.306 13.4C180.813 14.2667 181.066 15.2733 181.066 16.42C181.066 17.5667 180.806 18.58 180.286 19.46C179.78 20.3267 179.08 20.9933 178.186 21.46C177.306 21.9267 176.32 22.16 175.226 22.16ZM175.226 19.2C175.88 19.2 176.433 18.96 176.886 18.48C177.353 18 177.586 17.3133 177.586 16.42C177.586 15.5267 177.36 14.84 176.906 14.36C176.466 13.88 175.92 13.64 175.266 13.64C174.6 13.64 174.046 13.88 173.606 14.36C173.166 14.8267 172.946 15.5133 172.946 16.42C172.946 17.3133 173.16 18 173.586 18.48C174.026 18.96 174.573 19.2 175.226 19.2Z"
          fill={darktheme ? "#F5F5F5" : "#303030"}
        />
        <line
          x1="3"
          y1="29.5"
          x2="180"
          y2="29.5"
          stroke={darktheme ? "#F5F5F5" : "#303030"}
        />
        <rect
          x="23"
          y="24"
          width="136"
          height="12"
          fill={darktheme ? "#303030" : "#F5F5F5"}
        />
        <path
          d="M28.152 27.384V28.48H25.864V29.664H27.576V30.728H25.864V33H24.496V27.384H28.152ZM34.095 33L32.927 30.88H32.599V33H31.231V27.384H33.527C33.9697 27.384 34.3457 27.4613 34.655 27.616C34.9697 27.7707 35.2043 27.984 35.359 28.256C35.5137 28.5227 35.591 28.8213 35.591 29.152C35.591 29.5253 35.4843 29.8587 35.271 30.152C35.063 30.4453 34.7537 30.6533 34.343 30.776L35.639 33H34.095ZM32.599 29.912H33.447C33.6977 29.912 33.8843 29.8507 34.007 29.728C34.135 29.6053 34.199 29.432 34.199 29.208C34.199 28.9947 34.135 28.8267 34.007 28.704C33.8843 28.5813 33.6977 28.52 33.447 28.52H32.599V29.912ZM41.4657 33.056C40.9377 33.056 40.4524 32.9333 40.0097 32.688C39.5724 32.4427 39.2231 32.1013 38.9617 31.664C38.7057 31.2213 38.5777 30.7253 38.5777 30.176C38.5777 29.6267 38.7057 29.1333 38.9617 28.696C39.2231 28.2587 39.5724 27.9173 40.0097 27.672C40.4524 27.4267 40.9377 27.304 41.4657 27.304C41.9937 27.304 42.4764 27.4267 42.9137 27.672C43.3564 27.9173 43.7031 28.2587 43.9537 28.696C44.2097 29.1333 44.3377 29.6267 44.3377 30.176C44.3377 30.7253 44.2097 31.2213 43.9537 31.664C43.6977 32.1013 43.3511 32.4427 42.9137 32.688C42.4764 32.9333 41.9937 33.056 41.4657 33.056ZM41.4657 31.808C41.9137 31.808 42.2711 31.6587 42.5377 31.36C42.8097 31.0613 42.9457 30.6667 42.9457 30.176C42.9457 29.68 42.8097 29.2853 42.5377 28.992C42.2711 28.6933 41.9137 28.544 41.4657 28.544C41.0124 28.544 40.6497 28.6907 40.3777 28.984C40.1111 29.2773 39.9777 29.6747 39.9777 30.176C39.9777 30.672 40.1111 31.0693 40.3777 31.368C40.6497 31.6613 41.0124 31.808 41.4657 31.808ZM52.4828 33H51.1148L48.8268 29.536V33H47.4588V27.384H48.8268L51.1148 30.864V27.384H52.4828V33ZM59.8744 27.384V28.48H58.3864V33H57.0184V28.48H55.5304V27.384H59.8744ZM68.3443 28.48V29.616H70.1763V30.672H68.3443V31.904H70.4163V33H66.9763V27.384H70.4163V28.48H68.3443ZM78.6884 33H77.3204L75.0324 29.536V33H73.6644V27.384H75.0324L77.3204 30.864V27.384H78.6884V33ZM84.1441 27.384C84.7361 27.384 85.2534 27.5013 85.6961 27.736C86.1387 27.9707 86.4801 28.3013 86.7201 28.728C86.9654 29.1493 87.0881 29.6373 87.0881 30.192C87.0881 30.7413 86.9654 31.2293 86.7201 31.656C86.4801 32.0827 86.1361 32.4133 85.6881 32.648C85.2454 32.8827 84.7307 33 84.1441 33H82.0401V27.384H84.1441ZM84.0561 31.816C84.5734 31.816 84.9761 31.6747 85.2641 31.392C85.5521 31.1093 85.6961 30.7093 85.6961 30.192C85.6961 29.6747 85.5521 29.272 85.2641 28.984C84.9761 28.696 84.5734 28.552 84.0561 28.552H83.4081V31.816H84.0561ZM96.3719 27.384C96.9639 27.384 97.4812 27.5013 97.9239 27.736C98.3665 27.9707 98.7079 28.3013 98.9479 28.728C99.1932 29.1493 99.3159 29.6373 99.3159 30.192C99.3159 30.7413 99.1932 31.2293 98.9479 31.656C98.7079 32.0827 98.3639 32.4133 97.9159 32.648C97.4732 32.8827 96.9585 33 96.3719 33H94.2679V27.384H96.3719ZM96.2839 31.816C96.8012 31.816 97.2039 31.6747 97.4919 31.392C97.7799 31.1093 97.9239 30.7093 97.9239 30.192C97.9239 29.6747 97.7799 29.272 97.4919 28.984C97.2039 28.696 96.8012 28.552 96.2839 28.552H95.6359V31.816H96.2839ZM103.808 28.48V29.616H105.64V30.672H103.808V31.904H105.88V33H102.44V27.384H105.88V28.48H103.808ZM114.4 27.384L112.408 33H110.696L108.704 27.384H110.16L111.552 31.624L112.952 27.384H114.4ZM118.7 28.48V29.616H120.532V30.672H118.7V31.904H120.772V33H117.332V27.384H120.772V28.48H118.7ZM125.388 31.944H127.18V33H124.02V27.384H125.388V31.944ZM132.849 33.056C132.321 33.056 131.836 32.9333 131.393 32.688C130.956 32.4427 130.606 32.1013 130.345 31.664C130.089 31.2213 129.961 30.7253 129.961 30.176C129.961 29.6267 130.089 29.1333 130.345 28.696C130.606 28.2587 130.956 27.9173 131.393 27.672C131.836 27.4267 132.321 27.304 132.849 27.304C133.377 27.304 133.86 27.4267 134.297 27.672C134.74 27.9173 135.086 28.2587 135.337 28.696C135.593 29.1333 135.721 29.6267 135.721 30.176C135.721 30.7253 135.593 31.2213 135.337 31.664C135.081 32.1013 134.734 32.4427 134.297 32.688C133.86 32.9333 133.377 33.056 132.849 33.056ZM132.849 31.808C133.297 31.808 133.654 31.6587 133.921 31.36C134.193 31.0613 134.329 30.6667 134.329 30.176C134.329 29.68 134.193 29.2853 133.921 28.992C133.654 28.6933 133.297 28.544 132.849 28.544C132.396 28.544 132.033 28.6907 131.761 28.984C131.494 29.2773 131.361 29.6747 131.361 30.176C131.361 30.672 131.494 31.0693 131.761 31.368C132.033 31.6613 132.396 31.808 132.849 31.808ZM143.122 29.192C143.122 29.5173 143.047 29.816 142.898 30.088C142.749 30.3547 142.519 30.5707 142.21 30.736C141.901 30.9013 141.517 30.984 141.058 30.984H140.21V33H138.842V27.384H141.058C141.506 27.384 141.885 27.4613 142.194 27.616C142.503 27.7707 142.735 27.984 142.89 28.256C143.045 28.528 143.122 28.84 143.122 29.192ZM140.954 29.896C141.215 29.896 141.41 29.8347 141.538 29.712C141.666 29.5893 141.73 29.416 141.73 29.192C141.73 28.968 141.666 28.7947 141.538 28.672C141.41 28.5493 141.215 28.488 140.954 28.488H140.21V29.896H140.954ZM147.562 28.48V29.616H149.394V30.672H147.562V31.904H149.634V33H146.194V27.384H149.634V28.48H147.562ZM155.746 33L154.578 30.88H154.25V33H152.882V27.384H155.178C155.621 27.384 155.997 27.4613 156.306 27.616C156.621 27.7707 156.856 27.984 157.01 28.256C157.165 28.5227 157.242 28.8213 157.242 29.152C157.242 29.5253 157.136 29.8587 156.922 30.152C156.714 30.4453 156.405 30.6533 155.994 30.776L157.29 33H155.746ZM154.25 29.912H155.098C155.349 29.912 155.536 29.8507 155.658 29.728C155.786 29.6053 155.85 29.432 155.85 29.208C155.85 28.9947 155.786 28.8267 155.658 28.704C155.536 28.5813 155.349 28.52 155.098 28.52H154.25V29.912Z"
          fill={darktheme ? "#F5F5F5" : "#303030"}
        />
      </svg>
    </>
  );
};

export default Logo;
