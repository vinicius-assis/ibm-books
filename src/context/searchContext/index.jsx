import React, { createContext, useEffect, useState } from 'react'
import { searchResquest } from '../../api/factory'
import { normalizeBookData } from '../../helpers/normalizeBookData'
import { normalizeNumberOfPages } from '../../helpers/normalizeNumberOfPages'
import {
  setFavoritesBooksInStorage,
  favoriteStorage,
} from '../../helpers/setFavoritesBooksInStorage'

export const SearchContext = createContext({})

export const SearchStorage = ({ children }) => {
  const [inputValue, setInputValue] = useState('')
  const [booksList, setBooksList] = useState([])
  const [lastValue, setLastValue] = useState('')
  const [favoritesBooks, setFavoritesBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(undefined)
  const [currentPage, setCurrentPage] = useState(1)

  const handleChange = ({ target }) => setInputValue(target.value)

  /* TODO: Add functionality to remove favorites card */
  const handleFavoriteBooks = item => {
    setFavoritesBooks([...favoritesBooks, item])
    setFavoritesBooksInStorage(item)
  }

  const fetchData = async (inputValue, page = 0) => {
    setLoading(true)
    const {
      data: { items, totalItems },
    } = await searchResquest(inputValue, page)
    const numberOfPages = normalizeNumberOfPages(totalItems)
    setBooksList(normalizeBookData(items))
    setTotalPages(numberOfPages)
    setLastValue(inputValue)
    setLoading(false)
  }

  const searchFetch = async () => {
    if ([lastValue, ''].includes(inputValue)) {
      return
    }
    setCurrentPage(1)
    fetchData(inputValue)
  }
  // TODO FIX BUG IN PAGINATION
  const paginationFetch = async page => {
    console.log(page)
    setCurrentPage(page)
    fetchData(inputValue, page)
  }

  useEffect(() => {
    const storagedBooks = localStorage.getItem(favoriteStorage) ?? null

    if (storagedBooks) {
      setFavoritesBooks(JSON.parse(storagedBooks))
    }
  }, [])

  return (
    <SearchContext.Provider
      value={{
        booksList,
        searchFetch,
        handleChange,
        handleFavoriteBooks,
        favoritesBooks,
        loading,
        totalPages,
        paginationFetch,
        currentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
