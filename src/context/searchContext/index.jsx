import React, { createContext, useEffect, useState } from 'react'
import { searchResquest } from '../../api/factory'
import { normalizeBookData } from '../../helpers/normalizeBookData'
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

  const handleChange = ({ target }) => setInputValue(target.value)

  /* TODO: Add functionality to remove favorites card */
  const handleFavoriteBooks = item => {
    setFavoritesBooks([...favoritesBooks, item])
    setFavoritesBooksInStorage(item)
  }

  const searchFetch = async () => {
    if ([lastValue, ''].includes(inputValue)) {
      return
    }
    setLoading(true)
    const {
      data: { items },
    } = await searchResquest(inputValue)
    setBooksList(normalizeBookData(items))
    setLastValue(inputValue)
    setLoading(false)
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
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
