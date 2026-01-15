"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.75, 1] : [0.85, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.4], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], scaleDimensions());
  const translateY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <div
      className={cn("flex items-center justify-center relative", className)}
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header translateY={translateY} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} opacity={opacity}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translateY,
  titleComponent,
}: {
  translateY: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  opacity,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        opacity,
      }}
      className="max-w-4xl mx-auto w-full mt-8"
    >
      {children}
    </motion.div>
  );
};
