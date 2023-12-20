import { Card, Col, Raw } from "react-bootstrap";

const SingleBook = ({ libroSingolo }) => {
  return (
    <Col xs={12} md={4} key={libroSingolo.asin}>
      <Card className="book-cover">
        <Card.Img variant="top" src={libroSingolo.img} />
        <Card.Body>
          <Card.Title>{libroSingolo.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
