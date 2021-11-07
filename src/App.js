import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#dee2e6",
    body: "#fff",
    footer: "#dee2e6",
    font: "#4f4f4f",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar></Navbar>
      </>
    </ThemeProvider>
  );
}

export default App;
