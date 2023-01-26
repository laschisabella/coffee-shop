import { Container, GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Header } from './components/Header';

export default function App() {
  return (
    <Container>
      <Header />
      <GlobalStyle />
    </Container>
  )
}