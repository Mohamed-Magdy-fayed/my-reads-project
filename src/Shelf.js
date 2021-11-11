import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const shelf = ({ shelfName, name, books, toUpdateBooks }) => {

    let shelfBooks = books.filter(book => book.shelf === shelfName)

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {shelfBooks.map(book => (
                        <li key={book.id}>
                            <Book toUpdateBooks={toUpdateBooks} book={book} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

shelf.propTypes = {
    shelfName: PropTypes.string,
    name: PropTypes.string,
    books: PropTypes.array,
}

export default shelf
