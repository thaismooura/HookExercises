import {ThemeContextProvider, Header} from "./useContext"

export default function UseContext(){
   return (
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  );
}