import { Card, Col, Raw } from "react-bootstrap";

const SingleBook = (props) => {
  const { title, img } = props.book;

  return (
    <Col xs={12} md={4} key={book.asin}>
      <Card className="book-cover">
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
