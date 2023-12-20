import { Card, Col, Raw } from "react-bootstrap";

const SingleBook = (props) => {
  const { singleBook } = props;

  return (
    <Col xs={12} md={4} key={singleBook.asin}>
      <Card className="book-cover">
        <Card.Img variant="top" src={singleBook.img} />
        <Card.Body>
          <Card.Title>{singleBook.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
