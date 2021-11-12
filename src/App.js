import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'
import { Route, Routes, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path='/search' element={(
            <Search toUpdateBooks={this.updateBooks} />
          )} />

          <Route exact path='/' element={(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf toUpdateBooks={this.updateBooks} shelfName='currentlyReading' name='Currently Reading' books={this.state.books} />
                  <Shelf toUpdateBooks={this.updateBooks} shelfName='wantToRead' name='Want To Read' books={this.state.books} />
                  <Shelf toUpdateBooks={this.updateBooks} shelfName='read' name='Read' books={this.state.books} />
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'><button>Add a book</button></Link>
              </div>
            </div>
          )} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
