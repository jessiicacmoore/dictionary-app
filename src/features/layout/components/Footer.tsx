import { Container } from "@features/layout";

function Footer() {
  return (
    <footer className="mt-12 bg-gray-200 pb-2 pt-6 text-gray-500 dark:bg-gray-600 dark:text-gray-300">
      <Container>
        <p className="text-center">
          Powered by{" "}
          <a
            href="https://dictionaryapi.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Dictionary API
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
