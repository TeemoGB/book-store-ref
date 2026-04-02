import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
    id: 1,
    title: "dummy book",
    img: 5,
    category_id: 1,
    summary: "dummy sum",
    author: "dummy author",
    price: 10000,
    likes: 1,
    form: "paperback",
    isbn: "dummy isbn",
    detail: "dummy detail",
    pages: 100,
    contents: "dummy contents",
    pubDate: "2024-01-01",
};

function BooksList() {
    return (
        <BooksListStyle>
            <BookItem book={dummyBook} />
        </BooksListStyle>
    );
}

const BooksListStyle = styled.div``;

export default BooksList;
