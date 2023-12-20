import SingleBook from "./SingleBook";

const BookList = (props) => {
  const { arrayUno } = props;
  return (
    <div>
      {arrayUno.map((book, index) => (
        <SingleBook LibroSingolo={book} key={index} />
      ))}
    </div>
  );
};

export default BookList;
