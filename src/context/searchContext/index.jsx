import React, { createContext, useEffect, useReducer, useState } from 'react'
import { searchResquest } from '../../api/factory'
import { normalizeBookData } from '../../helpers/normalizeBookData'
import { normalizeNumberOfPages } from '../../helpers/normalizeNumberOfPages'
import {
  setFavoritesBooksInStorage,
  favoriteStorage,
} from '../../helpers/setFavoritesBooksInStorage'

export const SearchContext = createContext({})

export const SearchStorage = ({ children }) => {
  const [inputValue, setInputValue] = useReducer((prev, next) => {
    console.log(next)
    return next
  }, '')
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

  const fetchData = async (page = 1) => {
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

  const searchFetch = () => {
    if ([lastValue, ''].includes(inputValue)) {
      return
    }
    setCurrentPage(1)
    fetchData()
  }
  // TODO FIX BUG IN PAGINATION
  const paginationFetch = page => {
    setCurrentPage(page)
    fetchData(page)
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
