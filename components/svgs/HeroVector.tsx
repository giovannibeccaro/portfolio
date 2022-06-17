import React from "react";

type Props = {
  darktheme: boolean;
};

const HeroVector: React.FC<Props> = ({ darktheme }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <svg
        viewBox="0 0 1767 1367"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M557 1279.96C-621.311 1539.78 410.125 174.861 581 0H1767V982.286L1767 1279.96C1651.48 1556.3 1522.67 1067.03 557 1279.96Z"
          fill={darktheme ? "#2c2c2c" : "#EDEDED"}
        />
      </svg>
    </>
  );
};

export default HeroVector;
