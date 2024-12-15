import { Header, Footer } from "@features/layout";
import { SearchForm } from "@features/search";
import { WordDetails } from "@features/word-details";

function PageLayout() {
  return (
    <div>
      <Header />
      <main role="main">
        <SearchForm />
        <WordDetails />
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
