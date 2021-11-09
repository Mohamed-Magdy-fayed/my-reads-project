import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


const search = () => {

    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const getSearchResults = (query) => {
        BooksAPI.search(query)
            .then((books) => {
                console.log(books);
                if (books && books.error) {
                    return
                }
                setSearchResults(books)
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
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
                                <Book book={result} />
                            </li>
                        ))
                    )}
                </ol>
            </div>
        </div>

    )
}

export default search
