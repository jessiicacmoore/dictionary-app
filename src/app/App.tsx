import AppProvider from "@app/Provider";
import { Header } from "@features/layout";
import { SearchForm } from "@features/search";

function App() {
  return (
    <AppProvider>
      <Header />
      <main role="main">
        <SearchForm />
      </main>
    </AppProvider>
  );
}

export default App;
