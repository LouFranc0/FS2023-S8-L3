import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <div className="row">
      {props.BooksLista.map((book, index) => (
        <SingleBook libroSingolo={book} key={index} />
      ))}
    </div>
  );
};

export default BookList;
