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

  const handleChange = ({ target }) => setInputValue(target.value)

  const handleFavoriteBooks = item => {
    setFavoritesBooks([...favoritesBooks, item])
    setFavoritesBooksInStorage(item)
  }

  const searchFetch = async () => {
    if ([lastValue, ''].includes(inputValue)) {
      return
    }

    const {
      data: { items },
    } = await searchResquest(inputValue)
    setBooksList(normalizeBookData(items))
    setLastValue(inputValue)
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
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
