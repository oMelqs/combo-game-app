import { CustomRoute } from "@/common/constants/@types/customRoutes.types";
import { GamblingTable } from "@pages/GamblingTable";
import { Home } from "@pages/Home";

export const configRoutes: Array<CustomRoute> = [
  {
    title: "Home",
    pageName: "Home",
    path: "/",
    element: <Home />,
    private: false,
  },
  {
    title: "GamblingTable",
    pageName: "GamblingTable",
    path: "/GamblingTable",
    element: <GamblingTable />,
    private: false,
  },
];
