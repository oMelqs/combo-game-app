import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { configRoutes } from "@routes/routes";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles/themes";
import { GlobalStyle } from "@styles/global/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          {configRoutes.map((route, key) => {
            return (
              <Route key={key} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
