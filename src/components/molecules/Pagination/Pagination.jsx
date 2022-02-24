import React, { useContext } from 'react'
import { Paginator, Container, PageGroup } from 'chakra-paginator'
import { SearchContext } from '../../../context/searchContext'
import { useEffect, useState } from 'react'

const Pagination = () => {
  const { totalPages, paginationFetch, term, lastValue, currentPage } =
    useContext(SearchContext)
  const [page, setPage] = useState()

  const handleChangePage = newPage => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    paginationFetch(newPage, term)
  }

  useEffect(() => {
    if (page === 1) {
      return
    }

    if (term !== lastValue) {
      setPage(1)
      return handleChangePage(1, term)
    }

    if (page && term) {
      return handleChangePage(page, term)
    }
  }, [page, term])

  if (!totalPages) {
    return null
  }

  return (
    <Paginator
      pagesQuantity={totalPages}
      currentPage={currentPage}
      outerLimit={2}
      innerLimit={1}
      // TODO: ADD STYLE IN ACTIVE AND DEFAULT BUTTON
      activeStyles={{ border: '1px solid green' }}
      onPageChange={setPage}
    >
      <Container align="center" justify="center" w="full" p={4}>
        <PageGroup isInline align="center" />
      </Container>
    </Paginator>
  )
}

export default Pagination
