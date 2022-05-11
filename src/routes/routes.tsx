import { RouteProps } from "react-router-dom";
import { Home } from "../pages/Home";

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
  }
]