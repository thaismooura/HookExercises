import { ThemeContextProvider, Header, Card } from "./useContext";

export default function UseContext() {
  return (
    <ThemeContextProvider>
      <Header>
        <Card />
      </Header>
    </ThemeContextProvider>
  );
}
