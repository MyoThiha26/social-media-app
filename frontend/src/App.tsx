import {
  Box,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<PaletteMode>("light");
  const modeTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <ThemeProvider theme={modeTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar theme={theme} setTheme={setTheme}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
