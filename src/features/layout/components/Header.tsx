import { RiBookMarkedFill } from "react-icons/ri";
import { ThemeControls } from "@features/theme";
import { Container } from "@features/layout";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="my-6 py-4 font-bold">
      <Container className="flex items-center justify-between">
        <div>
          <h1 className="sr-only">Dictionary App</h1>
          <Link to={{ pathname: "/" }}>
            <RiBookMarkedFill className="text-5xl text-gray-500" />
          </Link>
        </div>
        <ThemeControls />
      </Container>
    </header>
  );
}

export default Header;
