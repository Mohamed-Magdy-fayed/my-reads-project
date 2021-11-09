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

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log(this.state.books);
      })

  }

  showSearchPage = () => {
    this.setState({ inSearch: false })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path='/search' element={(
            <Search showSearchPage={this.showSearchPage} />
          )} />

          <Route exact path='/' element={(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf shelfName='currentlyReading' name='Currently Reading' books={this.state.books} />
                  <Shelf shelfName='wantToRead' name='Want To Read' books={this.state.books} />
                  <Shelf shelfName='read' name='Read' books={this.state.books} />
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
