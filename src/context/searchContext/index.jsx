import React, { createContext, useState } from 'react'
import { searchResquest } from '../../api/factory'
import { normalizeBookData } from '../../helpers/normalizeBookData'

export const SearchContext = createContext({})

export const SearchStorage = ({ children }) => {
  const [inputValue, setInputValue] = useState('')
  const [booksList, setBooksList] = useState([])
  const [lastValue, setLastValue] = useState('')

  const handleChange = ({ target }) => setInputValue(target.value)

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

  return (
    <SearchContext.Provider value={{ booksList, searchFetch, handleChange }}>
      {children}
    </SearchContext.Provider>
  )
}
