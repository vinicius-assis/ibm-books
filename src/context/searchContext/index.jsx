import React, { createContext, useEffect, useState } from 'react'
import { searchResquest } from '../../api/factory'
import { normalizeBookData } from '../../helpers/normalizeBookData'
import { normalizeNumberOfPages } from '../../helpers/normalizeNumberOfPages'
import {
  setFavoritesBooksInStorage,
  favoriteStorage,
  checkIfAlreadyExist,
} from '../../helpers/setFavoritesBooksInStorage'

export const SearchContext = createContext({})

export const SearchStorage = ({ children }) => {
  const [booksList, setBooksList] = useState([])
  const [term, setTerm] = useState('')
  const [lastValue, setLastValue] = useState('')
  const [favoritesBooks, setFavoritesBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(undefined)
  const [currentPage, setCurrentPage] = useState(1)

  /* TODO: Add functionality to remove favorites card */
  const handleFavoriteBooks = item => {
    const { id } = item
    const alreadyExist = checkIfAlreadyExist(favoritesBooks, id)
    if (alreadyExist) {
      const filteredFavoriteList = favoritesBooks.filter(
        ({ id: favoriteId }) => favoriteId !== id
      )
      setFavoritesBooks(filteredFavoriteList)
      setFavoritesBooksInStorage(filteredFavoriteList)
    } else {
      setFavoritesBooks([...favoritesBooks, item])
      setFavoritesBooksInStorage([...favoritesBooks, item])
    }
  }

  const fetchData = async (page = 1, query) => {
    setLoading(true)
    const {
      data: { items, totalItems },
    } = await searchResquest(query, page)
    const numberOfPages = normalizeNumberOfPages(totalItems)
    setBooksList(normalizeBookData(items))
    setTotalPages(numberOfPages)
    setLastValue(query)
    setLoading(false)
  }

  const searchFetch = query => {
    if ([lastValue, ''].includes(query)) {
      return
    }
    setCurrentPage(1)
    setTerm(query)
    fetchData(1, query)
  }
  // TODO FIX BUG IN PAGINATION
  const paginationFetch = (page, query) => {
    setCurrentPage(page)
    fetchData(page, query)
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
        handleFavoriteBooks,
        favoritesBooks,
        loading,
        term,
        lastValue,
        totalPages,
        paginationFetch,
        currentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
