"use client";
import "./styles.css";
import { ThemeProvider } from '@mui/material/styles';

import { CssBaseline } from "@mui/material";
import Topbar from "@/scenes/global/Topbar"; 

import DashBoard from '@/components/dashboardAdmin/dashboard';
import Sidebar from '@/scenes/global/Sidebar';
{/*import Team from '@/components/dashboardAdmin/dashboard';
import Contacts from '@/components/dashboardAdmin/Contas';
import Bar from '@/components/dashboardAdmin/bar';
import Form from '@/components/dashboardAdmin/form';
import Line from '@/components/dashboardAdmin/line';
import Pie from '@/components/dashboardAdmin/Pie';
import FAQ from '@/components/dashboardAdmin/FAQ';
import Geography from '@/components/dashboardAdmin/Geography';
import Calender from '@/components/dashboardAdmin/calender';*/}

function App() {
  const [theme, colorMode] = useMode();
 
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar  />
           {/* <DashBoard/>
            <Team/>
            <Contacts/>
            <Bar/>
            <Form/>
            <Line/>
            <Pie/>
            <FAQ/>
            <Geography/>
  <Calender/>*/}
          </main>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
