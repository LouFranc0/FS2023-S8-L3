import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <div>
      {props.BooksLista.map((book, index) => (
        <SingleBook LibroSingolo={book} key={index} />
      ))}
    </div>
  );
};

export default BookList;
