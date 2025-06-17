import { useEffect, useRef, useState, useMemo } from "react";

import {
  SlideContainerLeft,
  SlideContainerRight,
  SlideHeader,
} from "./components/styledComponents";

type SlideComponentProps = {
  slideDirection: "left" | "right";
  headerTitle?: string;
};

const SlideComponent = ({
  slideDirection,
  headerTitle,
}: SlideComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // solo animar una vez
          }
        });
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderedComponent = useMemo(() => {
    if (slideDirection === "left") {
      return (
        <SlideContainerLeft ref={ref} $visible={visible}>
          <SlideHeader>{headerTitle}</SlideHeader>
        </SlideContainerLeft>
      );
    }
    if (slideDirection === "right") {
      return (
        <SlideContainerRight ref={ref} $visible={visible}>
          <SlideHeader>{headerTitle}</SlideHeader>
        </SlideContainerRight>
      );
    }
    return <></>;
  }, [slideDirection, headerTitle, visible]);

  return renderedComponent;
};

export default SlideComponent;
