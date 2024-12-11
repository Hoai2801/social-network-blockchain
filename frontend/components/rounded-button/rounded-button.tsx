"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Magnetic from "../magnetic/magnetic";
import styles from "./style.module.css";

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  const circle = useRef(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId = null as NodeJS.Timeout | null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    if (timeline.current) {
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter",
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit",
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}
