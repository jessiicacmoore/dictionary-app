import { ThemeControls } from "@features/theme";
import Container from "./Container";

function Header() {
  return (
    <header className="my-6 py-4">
      <Container className="flex justify-between">
        <div>
          <h1 className="sr-only">Dictionary App</h1>
          <span>Logo</span>
        </div>
        <ThemeControls />
      </Container>
    </header>
  );
}

export default Header;
