import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { configRoutes } from "./routes/routes"

import { ThemeProvider } from "styled-components"
import { theme } from "./styles/themes/theme"
import { GlobalStyles } from "./styles/global/global"

function App() {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {configRoutes.map((route, key) => {
            return(
              <Route key={key} path={route.path} element={route.element} />
            )
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
