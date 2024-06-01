import React from 'react';
import { ColorModeContext } from "@/components/product/theme"; // Verifica esta línea
import { ThemeProvider } from "@mui/material/styles";
import Topbar from "@/scenes/global/Topbar";
import useMode from "@/components/product/theme";

const DashBoard = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div>
          <main>
            <Topbar />
            <h2>hola</h2>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DashBoard;
