'use client'

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// import "overlayscrollbars/css/OverlayScrollbars.css";
// import "@/public/scrollbar.css"

type ScrollbarProps = {
  options?: any;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Scrollbar: React.FC<ScrollbarProps> = ({
  options,
  children,
  style,
  className,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className,
        scrollbars: {
          autoHide: "scroll",
        },
        ...options,
      }}
      style={style}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scrollbar;
