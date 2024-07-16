import React from "react";

const DEFAULT_EVENT = "resize";
const RESPONSIVE_WIDTH = 800;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    /Android|iPhone|iPod|iPad/i.test(navigator.userAgent) ||
      window.innerWidth <= RESPONSIVE_WIDTH ||
      document.body.clientWidth <= RESPONSIVE_WIDTH,
  );

  const handleResize = React.useCallback<EventListener>(() => {
    setIsMobile(
      /Android|iPhone|iPod|iPad/i.test(navigator.userAgent) ||
        window.innerWidth <= RESPONSIVE_WIDTH ||
        document.body.clientWidth <= RESPONSIVE_WIDTH,
    );
  }, []);

  React.useEffect(() => {
    window.addEventListener(DEFAULT_EVENT, handleResize);
    return () => window.removeEventListener(DEFAULT_EVENT, handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useIsMobile;
