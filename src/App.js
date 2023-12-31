import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import scifi from "./data/scifi.json";
import BookList from "./components/BookList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="position-sticky sticky-top">
        <span id="inizio"></span>
        <span>
          <MyNav />
        </span>
      </Container>
      <Container>
        <BookList BooksLista={scifi} />
      </Container>
      <Container fluid>
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
