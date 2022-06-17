import React from "react";

type Props = {
  darktheme: boolean;
};

const ScrollElement: React.FC<Props> = ({ darktheme }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <svg viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="13" height="25" rx="6" stroke="#303030" />
      <circle cx="7" cy="7" r="3" fill="#303030" />
    </svg>
  );
};

export default ScrollElement;
