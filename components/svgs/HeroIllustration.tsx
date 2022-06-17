import React from "react";

const HeroIllustration = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <svg viewBox="0 0 326 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_47_612)">
          <path
            d="M71.4069 77.7971C71.4099 77.3691 71.3247 76.9451 71.1566 76.5515C70.9884 76.1579 70.741 75.8032 70.4298 75.5096C70.1186 75.216 69.7502 74.9898 69.3477 74.8451C68.9452 74.7003 68.5171 74.6402 68.0904 74.6684C67.6636 74.6966 67.2472 74.8126 66.8672 75.009C66.4872 75.2055 66.1518 75.4783 65.8818 75.8103C65.6119 76.1423 65.4132 76.5264 65.2983 76.9387C65.1834 77.351 65.1546 77.7826 65.2138 78.2065L56.2741 89.922C55.8926 90.6855 55.7447 91.5447 55.8489 92.3919C55.9531 93.2391 56.3048 94.0367 56.8599 94.6848L57.5612 95.5035L60.7788 94.8595L64.4256 91.6394L63.9965 87.99L68.5013 80.9059L68.4955 80.9008C69.284 80.8505 70.0239 80.5017 70.5646 79.9252C71.1054 79.3487 71.4066 78.5878 71.4069 77.7971Z"
            fill="#FFB9B9"
          />
          <path
            d="M9.58626 135.073L8.12695 129.649L28.337 121.436L30.4907 129.441L9.58626 135.073Z"
            fill="#FFB8B8"
          />
          <path
            d="M4.70503 137.872L0 120.383L0.221031 120.324C2.02497 119.838 3.94793 120.089 5.56695 121.022C7.18598 121.954 8.36846 123.493 8.85431 125.298L8.85443 125.298L11.7281 135.979L4.70503 137.872Z"
            className="cont-illu-darker"
            fill="#303030"
          />
          <path
            d="M37.4258 134.206L32.8867 130.903L43.4592 111.81L50.1587 116.685L37.4258 134.206Z"
            fill="#FFB8B8"
          />
          <path
            d="M35.3826 139.452L20.7461 128.8L20.8807 128.615C21.9795 127.103 23.6335 126.09 25.4788 125.798C27.324 125.507 29.2095 125.96 30.7205 127.06L30.7209 127.06L39.6603 133.566L35.3826 139.452Z"
            className="cont-illu-darker"
            fill="#303030"
          />
          <path
            d="M76.01 107.525L64.5873 96.4206C63.5904 95.4515 62.2774 94.8751 60.8897 94.7976C59.502 94.72 58.133 95.1464 57.0344 95.9984L35.4668 119.976L37.3975 122.981L57.9907 109.028L71.9341 127.275L85.234 120.62L76.01 107.525Z"
            className="cont-illu-darker"
            fill="#303030"
          />
          <path
            d="M71.077 109.887L62.7109 109.243L56.6522 107.773C56.31 107.238 55.8129 106.821 55.2273 106.578C54.6418 106.334 53.9958 106.275 53.3759 106.409C52.756 106.543 52.1918 106.863 51.7587 107.326C51.3256 107.79 51.0444 108.375 50.9527 109.003C50.8609 109.631 50.9631 110.272 51.2454 110.84C51.5278 111.408 51.9769 111.877 52.5326 112.182C53.0883 112.488 53.7241 112.617 54.3548 112.551C54.9855 112.485 55.5811 112.228 56.0619 111.814L56.061 111.819L59.7078 113.321L75.3672 118.688L77.2978 117.185L71.077 109.887Z"
            fill="#FFB9B9"
          />
          <path
            d="M91.2416 133.071L86.5222 136.077H80.9448L54.9888 126.416L17.0198 133.286L15.9473 125.128L50.6986 109.887L81.1596 119.976L91.2416 133.071Z"
            className="cont-illu-darker"
            fill="#303030"
          />
          <path
            d="M81.159 80.9059C85.7795 80.9059 89.5251 77.1576 89.5251 72.5338C89.5251 67.91 85.7795 64.1616 81.159 64.1616C76.5386 64.1616 72.793 67.91 72.793 72.5338C72.793 77.1576 76.5386 80.9059 81.159 80.9059Z"
            fill="#FFB9B9"
          />
          <path
            d="M102.805 105.96C102.805 111.013 102.009 116.034 100.448 120.839L99.8211 122.767L96.8179 136.505L93.6002 137.364L91.2406 134.359L86.5213 130.924L83.0891 125.343L80.1459 120.435L79.2278 118.902L76.0101 102.802L63.7828 95.9327L59.707 95.2887L60.5651 92.9273L64.2118 87.9899L67.8585 87.5605L68.9311 86.7019L69.7892 87.1312L74.5192 88.9547L89.8548 82.4707L92.0986 82.8378L99.8211 89.2779C101.795 94.6178 102.806 100.266 102.805 105.96Z"
            className="cont-illu-shirt"
            fill="#cccccc"
          />
          <path
            opacity="0.1"
            d="M100.465 104.091L92.3138 109.457L80.1467 120.435L79.2286 118.903L76.6543 106.023H77.2979L83.9479 93.7866L100.465 104.091Z"
            fill="black"
          />
          <path
            d="M83.9472 92.498L77.2972 104.734L73.436 109.028L70.0039 109.886L79.2279 119.976L92.3131 108.169L100.464 102.802L83.9472 92.498Z"
            className="cont-illu-shirt"
            fill="#cccccc"
          />
          <path
            d="M74.6511 66.3085L73.7447 66.6575C73.6071 66.5643 73.4892 66.4448 73.3977 66.306C73.3062 66.1672 73.243 66.0117 73.2115 65.8484C73.1801 65.6851 73.1811 65.5172 73.2146 65.3543C73.248 65.1914 73.3131 65.0367 73.4063 64.899C73.4112 64.8917 73.4161 64.8846 73.4212 64.8775L71.7461 64.799C72.8214 63.3658 74.1885 62.1775 75.7571 61.3127C77.3256 60.4478 79.0598 59.9261 80.8448 59.7821C82.6299 59.6381 84.4252 59.8751 86.1119 60.4774C87.7986 61.0797 89.3383 62.0336 90.6291 63.2759C90.7054 63.013 91.5367 63.5244 91.8761 64.043C91.9902 63.6153 92.7697 65.6829 93.0454 67.1444C93.173 66.6578 93.6638 67.4434 93.2338 68.1972C93.5062 68.1574 93.6293 68.8549 93.4184 69.2435C93.7165 69.1034 93.6662 69.936 93.3431 70.4925C93.7684 70.4547 93.3068 79.2206 86.9245 78.5819C86.4802 76.5389 86.6054 76.6658 86.0822 74.0387C85.8387 73.7801 85.572 73.5445 85.3058 73.3093L83.8657 72.0372C82.1913 70.5581 80.668 68.7325 78.4373 68.1797C76.9043 67.7998 75.935 67.714 76.7705 65.9853C76.0157 66.3005 75.3108 66.7693 74.5492 67.062C74.5595 66.8205 74.6659 66.5502 74.6511 66.3085Z"
            className="cont-illu-darker"
            fill="#303030"
          />
          <path
            d="M85.3414 75.0025C86.1707 75.0025 86.843 74.3297 86.843 73.4998C86.843 72.6698 86.1707 71.9971 85.3414 71.9971C84.5121 71.9971 83.8398 72.6698 83.8398 73.4998C83.8398 74.3297 84.5121 75.0025 85.3414 75.0025Z"
            fill="#FFB9B9"
          />
          <path
            d="M307.393 0H103.358C102.621 -8.38739e-07 101.89 0.145364 101.209 0.427796C100.528 0.710227 99.9085 1.12419 99.387 1.64606C98.8656 2.16792 98.4519 2.78747 98.1697 3.46932C97.8875 4.15117 97.7422 4.88197 97.7422 5.62V119.388C97.7422 120.126 97.8874 120.856 98.1697 121.538C98.4519 122.22 98.8656 122.84 99.387 123.362C99.9085 123.883 100.528 124.297 101.209 124.58C101.89 124.862 102.621 125.008 103.358 125.008H307.393C308.883 125.008 310.311 124.416 311.364 123.362C312.417 122.308 313.009 120.878 313.009 119.388V5.62C313.009 4.12948 312.417 2.70002 311.364 1.64606C310.311 0.592107 308.883 8.46958e-07 307.393 0Z"
            className="hero-illu-pc-out"
            fill="#303030"
          />
          <path
            d="M305.48 9.93213H105.271V122.953H305.48V9.93213Z"
            className="hero-illu-screen1"
            fill="white"
          />
          <path
            d="M205.206 6.84958C206.34 6.84958 207.259 5.92956 207.259 4.79466C207.259 3.65976 206.34 2.73975 205.206 2.73975C204.072 2.73975 203.152 3.65976 203.152 4.79466C203.152 5.92956 204.072 6.84958 205.206 6.84958Z"
            className="hero-illu-screen1"
            fill="white"
          />
          <path
            d="M248.224 122.953H105.271V9.93213L248.224 122.953Z"
            className="hero-illu-screen2"
            fill="#f2f2f2"
          />
          <path
            d="M136.598 114.495C147.227 114.495 155.843 105.873 155.843 95.2368C155.843 84.6005 147.227 75.978 136.598 75.978C125.97 75.978 117.354 84.6005 117.354 95.2368C117.354 105.873 125.97 114.495 136.598 114.495Z"
            className="hero-illu-circle"
            fill="#414141"
          />
          <path
            d="M140.884 109.711C136.149 109.711 131.521 108.306 127.584 105.674C123.648 103.042 120.579 99.3002 118.768 94.9228C116.956 90.5455 116.482 85.7287 117.405 81.0817C118.329 76.4347 120.609 72.1662 123.957 68.8159C127.305 65.4656 131.57 63.184 136.214 62.2596C140.857 61.3353 145.67 61.8097 150.045 63.6229C154.419 65.436 158.158 68.5065 160.788 72.4461C163.418 76.3856 164.822 81.0173 164.822 85.7553C164.822 88.9012 164.203 92.0164 163 94.9229C161.797 97.8293 160.034 100.47 157.811 102.695C155.588 104.919 152.949 106.684 150.045 107.888C147.14 109.092 144.027 109.711 140.884 109.711ZM140.884 62.1125C136.211 62.1125 131.643 63.4991 127.758 66.097C123.873 68.6949 120.845 72.3874 119.057 76.7076C117.268 81.0277 116.801 85.7815 117.712 90.3678C118.624 94.954 120.874 99.1668 124.178 102.473C127.482 105.78 131.692 108.032 136.275 108.944C140.858 109.856 145.608 109.388 149.925 107.598C154.242 105.809 157.932 102.779 160.528 98.8906C163.124 95.0025 164.509 90.4314 164.509 85.7553C164.509 82.6505 163.898 79.5761 162.711 76.7076C161.524 73.8391 159.783 71.2327 157.59 69.0373C155.396 66.8419 152.791 65.1003 149.925 63.9122C147.059 62.724 143.986 62.1125 140.884 62.1125L140.884 62.1125Z"
            className="hero-illu-inner-circle"
            fill="#"
          />
          <path
            d="M259.133 68.6494H240.432V72.5601H259.133V68.6494Z"
            className="hero-illu-pc-out"
            fill="#303030"
          />
          <path
            d="M276.827 47.4634H222.738V49.1394H276.827V47.4634Z"
            className="hero-illu-pc-out"
            fill="#303030"
          />
          <path
            d="M276.827 54.0479H222.738V55.7239H276.827V54.0479Z"
            className="hero-illu-pc-out"
            fill="#303030"
          />
          <path
            d="M276.827 60.6328H222.738V62.3088H276.827V60.6328Z"
            className="hero-illu-pc-out"
            fill="#303030"
          />
          <path
            d="M291.316 16.6958H283.5V24.5171H291.316V16.6958Z"
            fill="#414141"
          />
          <path
            d="M294.944 28.1487H285.453V18.6514H294.944V28.1487ZM285.866 27.7358H294.531V19.0643H285.866L285.866 27.7358Z"
            className="cont-illu-shirt"
            fill="#cccccc"
          />
          <path
            d="M318.632 120.898H299.093V119.489C299.093 119.452 299.086 119.416 299.071 119.382C299.057 119.348 299.037 119.317 299.011 119.291C298.985 119.265 298.954 119.245 298.92 119.231C298.887 119.217 298.85 119.209 298.814 119.209H292.114C292.078 119.209 292.042 119.217 292.008 119.231C291.974 119.245 291.943 119.265 291.917 119.291C291.891 119.317 291.871 119.348 291.857 119.382C291.843 119.416 291.835 119.452 291.835 119.489V120.898H287.648V119.489C287.648 119.452 287.641 119.416 287.627 119.382C287.613 119.348 287.593 119.317 287.567 119.291C287.541 119.265 287.51 119.245 287.476 119.231C287.442 119.217 287.406 119.209 287.369 119.209H280.67C280.634 119.209 280.597 119.217 280.563 119.231C280.53 119.245 280.499 119.265 280.473 119.291C280.447 119.317 280.426 119.348 280.412 119.382C280.398 119.416 280.391 119.452 280.391 119.489V120.898H276.204V119.489C276.204 119.452 276.197 119.416 276.183 119.382C276.169 119.348 276.148 119.317 276.122 119.291C276.096 119.265 276.066 119.245 276.032 119.231C275.998 119.217 275.962 119.209 275.925 119.209H269.226C269.189 119.209 269.153 119.217 269.119 119.231C269.085 119.245 269.054 119.265 269.029 119.291C269.003 119.317 268.982 119.348 268.968 119.382C268.954 119.416 268.947 119.452 268.947 119.489V120.898H264.76V119.489C264.76 119.452 264.753 119.416 264.739 119.382C264.725 119.348 264.704 119.317 264.678 119.291C264.652 119.265 264.621 119.245 264.588 119.231C264.554 119.217 264.517 119.209 264.481 119.209H257.782C257.745 119.209 257.709 119.217 257.675 119.231C257.641 119.245 257.61 119.265 257.584 119.291C257.558 119.317 257.538 119.348 257.524 119.382C257.51 119.416 257.503 119.452 257.502 119.489V120.898H253.316V119.489C253.316 119.452 253.308 119.416 253.294 119.382C253.28 119.348 253.26 119.317 253.234 119.291C253.208 119.265 253.177 119.245 253.143 119.231C253.109 119.217 253.073 119.209 253.036 119.209H246.337C246.301 119.209 246.264 119.217 246.23 119.231C246.197 119.245 246.166 119.265 246.14 119.291C246.114 119.317 246.093 119.348 246.079 119.382C246.065 119.416 246.058 119.452 246.058 119.489V120.898H241.871V119.489C241.871 119.452 241.864 119.416 241.85 119.382C241.836 119.348 241.815 119.317 241.789 119.291C241.764 119.265 241.733 119.245 241.699 119.231C241.665 119.217 241.629 119.209 241.592 119.209H234.893C234.856 119.209 234.82 119.217 234.786 119.231C234.752 119.245 234.722 119.265 234.696 119.291C234.67 119.317 234.649 119.348 234.635 119.382C234.621 119.416 234.614 119.452 234.614 119.489V120.898H230.427V119.489C230.427 119.452 230.42 119.416 230.406 119.382C230.392 119.348 230.371 119.317 230.345 119.291C230.319 119.265 230.289 119.245 230.255 119.231C230.221 119.217 230.184 119.209 230.148 119.209H177.672C177.635 119.209 177.599 119.217 177.565 119.231C177.531 119.245 177.5 119.265 177.474 119.291C177.448 119.317 177.428 119.348 177.414 119.382C177.4 119.416 177.392 119.452 177.392 119.489V120.898H173.205V119.489C173.205 119.452 173.198 119.416 173.184 119.382C173.17 119.348 173.15 119.317 173.124 119.291C173.098 119.265 173.067 119.245 173.033 119.231C172.999 119.217 172.963 119.209 172.926 119.209H166.227C166.191 119.209 166.154 119.217 166.12 119.231C166.087 119.245 166.056 119.265 166.03 119.291C166.004 119.317 165.983 119.348 165.969 119.382C165.955 119.416 165.948 119.452 165.948 119.489V120.898H161.761V119.489C161.761 119.452 161.754 119.416 161.74 119.382C161.726 119.348 161.705 119.317 161.679 119.291C161.653 119.265 161.623 119.245 161.589 119.231C161.555 119.217 161.519 119.209 161.482 119.209H154.783C154.746 119.209 154.71 119.217 154.676 119.231C154.642 119.245 154.611 119.265 154.586 119.291C154.56 119.317 154.539 119.348 154.525 119.382C154.511 119.416 154.504 119.452 154.504 119.489V120.898H150.317V119.489C150.317 119.452 150.31 119.416 150.296 119.382C150.282 119.348 150.261 119.317 150.235 119.291C150.209 119.265 150.178 119.245 150.145 119.231C150.111 119.217 150.074 119.209 150.038 119.209H143.339C143.302 119.209 143.266 119.217 143.232 119.231C143.198 119.245 143.167 119.265 143.141 119.291C143.115 119.317 143.095 119.348 143.081 119.382C143.067 119.416 143.059 119.452 143.059 119.489V120.898H138.873V119.489C138.873 119.452 138.865 119.416 138.851 119.382C138.837 119.348 138.817 119.317 138.791 119.291C138.765 119.265 138.734 119.245 138.7 119.231C138.666 119.217 138.63 119.209 138.593 119.209H131.894C131.858 119.209 131.821 119.217 131.787 119.231C131.754 119.245 131.723 119.265 131.697 119.291C131.671 119.317 131.65 119.348 131.636 119.382C131.622 119.416 131.615 119.452 131.615 119.489V120.898H127.428V119.489C127.428 119.452 127.421 119.416 127.407 119.382C127.393 119.348 127.372 119.317 127.346 119.291C127.321 119.265 127.29 119.245 127.256 119.231C127.222 119.217 127.186 119.209 127.149 119.209H120.45C120.376 119.209 120.305 119.239 120.253 119.291C120.2 119.344 120.171 119.415 120.171 119.489V120.898H115.984V119.489C115.984 119.452 115.977 119.416 115.963 119.382C115.949 119.348 115.928 119.317 115.902 119.291C115.876 119.265 115.845 119.245 115.812 119.231C115.778 119.217 115.741 119.209 115.705 119.209H109.006C108.932 119.209 108.861 119.239 108.808 119.291C108.756 119.344 108.727 119.415 108.727 119.489V120.898H95.8866C94.1099 120.898 92.4059 121.604 91.1496 122.861C89.8933 124.118 89.1875 125.824 89.1875 127.602V130.633C89.1875 132.411 89.8933 134.116 91.1496 135.373C92.4059 136.631 94.1099 137.337 95.8866 137.337H318.632C320.408 137.337 322.112 136.631 323.369 135.373C324.625 134.116 325.331 132.411 325.331 130.633V127.602C325.331 126.721 325.158 125.849 324.821 125.036C324.484 124.223 323.991 123.484 323.369 122.861C322.747 122.239 322.008 121.745 321.195 121.408C320.383 121.071 319.512 120.898 318.632 120.898Z"
            className="hero-illu-pc-out"
            fill="#303030"
          />
        </g>
        <defs>
          <clipPath id="clip0_47_612">
            <rect width="325.33" height="139.452" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default HeroIllustration;
