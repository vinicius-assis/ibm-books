import React, { useContext } from 'react'
import { SearchContext } from '../../../context/searchContext'
import Card from '../../molecules/Card/Card'

const CardList = () => {
  const { booksList } = useContext(SearchContext)

  return (
    <>
      {booksList.map(({ id, description, title, pageCount, averageRating }) => (
        <Card
          key={id}
          title={title}
          description={description}
          averageRating={averageRating}
          pagesCount={pageCount}
        />
      ))}
    </>
  )
}

export default CardList
