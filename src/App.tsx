import { configRoutes } from "@routes/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "@styles/global/global";
import { defaultTheme } from "@styles/themes";
import { ThemeProvider } from "styled-components";

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
