import { useEffect, useRef, useState, useMemo } from "react";

import {
  SlideContainerLeft,
  SlideContainerRight,
  SlideHeader,
  Img,
  Description,
  ImageAndDescriptionHolder,
} from "./components/styledComponents";

type SlideComponentProps = {
  slideDirection: "left" | "right";
  headerTitle?: string;
  imgSrc?: string;
  imgHeight?: string;
  description?: string;
};

const SlideComponent = ({
  slideDirection,
  headerTitle,
  imgSrc,
  imgHeight,
  description,
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
          <ImageAndDescriptionHolder direction="left">
            <Img src={imgSrc} imgHeight={imgHeight} />
            <Description>{description}</Description>
          </ImageAndDescriptionHolder>
        </SlideContainerLeft>
      );
    }
    if (slideDirection === "right") {
      return (
        <SlideContainerRight ref={ref} $visible={visible}>
          <SlideHeader>{headerTitle}</SlideHeader>
          <ImageAndDescriptionHolder direction="right">
            <Description>{description}</Description>
            <Img src={imgSrc} imgHeight={imgHeight} />
          </ImageAndDescriptionHolder>
        </SlideContainerRight>
      );
    }
    return <></>;
  }, [slideDirection, headerTitle, visible, description, imgSrc, imgHeight]);

  return renderedComponent;
};

export default SlideComponent;
