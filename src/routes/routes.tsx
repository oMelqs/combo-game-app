import { RouteProps } from "react-router-dom";
import { Home } from "@pages/Home";
import { SandBox } from "@pages/SandBox";

export interface CustomRoute extends RouteProps {
  title: string;
  pageName: string;
  private: boolean;
}

export const configRoutes: Array<CustomRoute> = [
  {
    title: "Home",
    pageName: "Home",
    path: "/",
    element: Home(),
    private: false,
  },
  {
    title: "SandBox",
    pageName: "SandBox",
    path: "/SandBox",
    element: SandBox(),
    private: false,
  },
];
