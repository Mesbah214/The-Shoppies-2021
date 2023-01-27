import { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const classes = "bg-white mx-auto p-6 rounded drop-shadow " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
