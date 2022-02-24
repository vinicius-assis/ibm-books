import React, { useContext } from 'react'
import { SearchContext } from '../../../context/searchContext'
import Card from '../../molecules/Card/Card'

const CardList = () => {
  const { booksList } = useContext(SearchContext)

  return (
    <>
      {booksList.map(card => (
        <Card key={card.id} cardData={card} />
      ))}
    </>
  )
}

export default CardList
