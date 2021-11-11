import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


const search = ({ toUpdateBooks }) => {

    let toSetResults = []
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const getSearchResults = (query) => {
        if (query === '') {
            setSearchResults([])
        }
        BooksAPI.search(query)
            .then((books) => {
                if (books && books.error) {
                    setSearchResults([])
                    return
                }
                books && books.forEach((book) => {
                    BooksAPI.get(book.id)
                        .then(newBook => {
                            toSetResults = [...toSetResults, newBook]
                        })
                        .then(() => setSearchResults(toSetResults))
                })
            })
    }

    useEffect(() => {
        getSearchResults(query)
    }, [query])


    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'><button className='close-search'>Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                        value={query}
                        type="text"
                        placeholder="Search by title or author" />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResults && (
                        searchResults.map(result => (
                            <li key={result.id}>
                                <Book isInSearch={true} toUpdateBooks={toUpdateBooks} book={result} />
                            </li>
                        ))
                    )}
                </ol>
            </div>
        </div>

    )
}

export default search
