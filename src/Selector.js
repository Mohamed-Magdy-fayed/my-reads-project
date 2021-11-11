import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

const selector = ({ book, toUpdateBooks, isInSearch }) => {

    const changeShelf = (shelf) => {
        if (isInSearch) {
            updateSearch(shelf)
            BooksAPI.update(book, shelf)
            .then(() => {toUpdateBooks()})
        } else {
            BooksAPI.update(book, shelf)
            .then(() => {toUpdateBooks()})
        }
    }

    const updateSearch = (shelf) => {
        book.shelf = shelf
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={(e) => {
                changeShelf(e.target.value)
            }} defaultValue={book.shelf ? book.shelf : 'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

selector.propTypes = {
    book: PropTypes.object,
}

export default selector
