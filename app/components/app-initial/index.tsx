import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/app/utils";
import useIsMobile from "@/app/hooks/useIsMobile";
import styles from "./index.module.scss";

const AppInitial: React.FC<Readonly<React.PropsWithChildren>> = props => {
  React.useEffect(() => {
    console.log(
      `build at: %c${process.env.APP_BUILD_TIME}`,
      "color: red; padding: 4px 2px; font-weight: bold;",
    );
    console.log(
      `React version: %c${React.version}`,
      "color: red; padding: 4px 2px; font-weight: bold;",
    );
  }, []);

  const isMobile = useIsMobile();

  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  const handleMouseMove = React.useCallback<React.MouseEventHandler<HTMLDivElement>>(
    event => {
      if (!event.currentTarget) {
        return;
      }
      const { left, top } = event.currentTarget?.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY],
  );

  const bgImage = useMotionTemplate`
    radial-gradient(
      200px circle at ${mouseX}px ${mouseY}px,
      black 0,
      transparent 100%
    )
  `;

  if (isMobile) {
    return <div className={cn(styles.isMobile)}>请在PC端查看</div>;
  }

  return (
    <div className={cn(styles.containerWrap)} onMouseMove={handleMouseMove}>
      <div className={cn(styles.container)} />
      <motion.div
        className={cn(styles.maskBox)}
        style={{ maskImage: bgImage, WebkitMaskImage: bgImage }}
      />
      <div className={cn(styles.childrenNode)}>{props.children}</div>
    </div>
  );
};

export default AppInitial;
