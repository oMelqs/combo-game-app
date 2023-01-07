import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";
export type CustomRoute = RouteProps & {
  element: ReactNode;
  path: string | undefined;
  title: string;
  pageName: string;
  private: boolean;
};
