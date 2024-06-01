import { colorModeContext,useMode } from "./components/product/theme";
import { CssBaseline,ThemeProvider } from "@mui/material";

import React from 'react'
import Topbar from "./scenes/global/Topbar";

const App2 = () => {
    const [theme,colorMode] = useMode();

  return ( <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline/>
    <div>
        <main>
            <Topbar/>
        </main>

    </div>
    </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App2