import React from 'react'
import PropTypes from 'prop-types'
import Selector from './Selector'

const book = ({ book, toUpdateBooks, isInSearch }) => {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks && book.imageLinks.thumbnail}')` }}></div>
                <Selector isInSearch={isInSearch} toUpdateBooks={toUpdateBooks} book={book}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors[0]} <br/> {book.authors && book.authors[1]}</div>
        </div>
    )
}

book.propTypes = {
    book: PropTypes.object,
}

export default book
