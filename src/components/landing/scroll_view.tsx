import React from "react";
import { styled } from "@mui/system";
import { Section } from ".";

const View = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
}));

const ChildView = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    width: "100%",
    position: "absolute",
    top: 0,
    opacity: 0,
    //@ts-ignore
    // transition: theme.transitions.create(["opacity"], { duration: 1000 }),
    ...(open && {
      opacity: 1,
      zIndex: 10,
      //@ts-ignore
      // transition: theme.transitions.create(["opacity"], { duration: 1000 }),
    }),
  }),
);
type IProps = {
  children?: React.ReactNode | React.ReactNode[];
  activeSection?: Section;
};
export const ScrollView = (props: IProps) => {
  const children = props?.children ?? [];
  const activeSection = props?.activeSection ?? Section.OnTop;

  const renderChildren = () => {
    if (Array.isArray(children)) {
      return children.map((child, index) => {
        return (
          <ChildView key={`scroll-view-child-${index}`} open={activeSection === index}>
            {child}
          </ChildView>
        );
      });
    } else {
      return <ChildView open>{children}</ChildView>;
    }
  };
  return <View>{renderChildren()}</View>;
};
