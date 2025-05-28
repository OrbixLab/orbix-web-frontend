import { useMemo } from "react";
import {
  SlideContainerLeft,
  SlideContainerRight,
  SlideHeader,
} from "./components/styledComponents";

type slideComponentProps = {
  slideDirection: "left" | "right";
  headerTitle?: string;
};

const SlideComponent = ({
  slideDirection,
  headerTitle,
}: slideComponentProps) => {
  const renderedComponent = useMemo(() => {
    if (slideDirection === "left") {
      return (
        <SlideContainerLeft>
          <SlideHeader>{headerTitle}</SlideHeader>
        </SlideContainerLeft>
      );
    }
    if (slideDirection === "right") {
      return (
        <SlideContainerRight>
          <SlideHeader>{headerTitle}</SlideHeader>
        </SlideContainerRight>
      );
    }
    return <></>;
  }, [slideDirection, headerTitle]);

  return renderedComponent;
};

export default SlideComponent;
