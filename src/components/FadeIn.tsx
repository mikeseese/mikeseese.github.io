import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  className?: string;
  childClassName?: string;
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay / 1000,
    },
  }),
};

const childVariants = (duration: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration / 1000, ease: "easeOut" as const },
  },
});

export default function FadeIn(props: PropsWithChildren<Props>) {
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 50;
  const variants = childVariants(transitionDuration);

  return (
    <motion.div
      className={props.className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {React.Children.map(props.children, (child) => (
        <motion.div className={props.childClassName} variants={variants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
