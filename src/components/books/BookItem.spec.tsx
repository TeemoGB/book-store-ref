import React from "react";
import { getByAltText, render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";
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

describe("BookItem", () => {
    it("렌더 여부", () => {
        const { getByText, getByAltText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>,
        );

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText("10,000원")).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(getByAltText(dummyBook.likes)).toHaveAttribute(
            "src",
            `https://picsum.photos/id/${dummyBook.img}/600/600`,
        );
    });
});
