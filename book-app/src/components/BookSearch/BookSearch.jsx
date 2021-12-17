import axios from 'axios'
import React, { useState } from 'react'

const BookSearch = (props) => {

    const [book, setBook] = useState('')
    const [searchResults, setSearchResults] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        let searchFor = document.getElementById('searchFor')
        getSearchResults(searchFor)
    }

    const getSearchResults = (searchFor) => {
        let searchResults = book.filter(b => b.book_title.toLowerCase().includes(searchFor.toLowerCase()))
        .map(books => (books));
        setSearchResults(searchResults)
    }

    const getBooks = async () => {
        let response = await.axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${book_isbn}&jscmd=data&format=json`)
        setBook(response.data)
    }

    const handleClick = async (event, elementId) => {
        event.preventDefault();
        const jwt = localStorage.getItem('token')
    }

    return ( 

    
     );
}
 
export default BookSearch;