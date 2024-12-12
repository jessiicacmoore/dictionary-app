import AppProvider from "@app/Provider";
import { Header } from "@features/layout";

function App() {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
}

export default App;
