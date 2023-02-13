import '@/styles/globals.css'
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from '@mui/material';
import Layout from '@/components/Layout';

export const theme = createTheme({
  palette: {
    mode: "light",
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
