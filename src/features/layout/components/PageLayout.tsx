import { Header, Footer, Container } from "@features/layout";
import { SearchForm } from "@features/search";
import { WordDetails } from "@features/word-details";

function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main role="main" className="flex-grow">
        <Container>
          <SearchForm />
        </Container>
        <Container className="mt-12">
          <WordDetails />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
