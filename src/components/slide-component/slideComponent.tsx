import { useMemo } from "react";
import {
  SlideContainerLeft,
  SlideContainerRight,
} from "./components/styledComponents";

type slideComponentProps = {
  slideDirection: "left" | "right";
};

const SlideComponent = ({ slideDirection }: slideComponentProps) => {
  const renderedComponent = useMemo(() => {
    if (slideDirection === "left") {
      return <SlideContainerLeft></SlideContainerLeft>;
    }
    if (slideDirection === "right") {
      return <SlideContainerRight></SlideContainerRight>;
    }
    return <></>;
  }, [slideDirection]);

  return renderedComponent;
};

export default SlideComponent;
