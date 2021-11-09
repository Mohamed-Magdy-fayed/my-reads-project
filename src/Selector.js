import React from 'react'
import PropTypes from 'prop-types'

const selector = ({ book }) => {
    return (
        <div className="book-shelf-changer">
            <select defaultValue={book.shelf? book.shelf : 'none'}>
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
