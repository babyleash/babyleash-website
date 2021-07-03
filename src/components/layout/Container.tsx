import { FC } from "react";

const Container: FC<{ className: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
