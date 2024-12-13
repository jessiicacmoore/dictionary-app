import { RiBookMarkedFill } from "react-icons/ri";
import { ThemeControls } from "@features/theme";
import { Container } from "@features/layout";

function Header() {
  return (
    <header className="my-6 py-4 font-bold">
      <Container className="flex items-center justify-between">
        <div>
          <h1 className="sr-only">Dictionary App</h1>
          <RiBookMarkedFill className="text-5xl text-gray-500" />
        </div>
        <ThemeControls />
      </Container>
    </header>
  );
}

export default Header;
