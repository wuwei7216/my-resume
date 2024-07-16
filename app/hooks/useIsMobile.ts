import React from "react";

const DEFAULT_EVENT = "resize";

const useIsMobile = (width: number) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    /Android|iPhone|iPod|iPad/i.test(navigator.userAgent) ||
      window.innerWidth <= width ||
      document.body.clientWidth <= width,
  );

  const handleResize = React.useCallback(() => {
    setIsMobile(
      /Android|iPhone|iPod|iPad/i.test(navigator.userAgent) ||
        window.innerWidth <= width ||
        document.body.clientWidth <= width,
    );
  }, [width]);

  React.useEffect(() => {
    window.addEventListener(DEFAULT_EVENT, handleResize);
    return () => window.removeEventListener(DEFAULT_EVENT, handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useIsMobile;
