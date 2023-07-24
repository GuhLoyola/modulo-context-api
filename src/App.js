import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './contexts/theme-context';
import { Card } from './components/card/card';
import { styled } from 'styled-components';


function App() {
  return (
    <Main>
      <ThemeProvider>
        <ThemeTogglerButton />
        <Card />
      </ThemeProvider>
    </Main>

  );
}

const Main = styled.main`
  padding: 30px;
`

export default App;