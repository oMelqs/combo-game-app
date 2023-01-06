import { GamblingTable } from "@/pages/GamblingTable";
import { Home } from "@pages/Home";
import { RouteProps } from "react-router-dom";

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
    title: "GamblingTable",
    pageName: "GamblingTable",
    path: "/GamblingTable",
    element: GamblingTable(),
    private: false,
  },
];
