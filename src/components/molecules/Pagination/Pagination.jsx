import React, { useContext } from 'react'
import { Paginator, Container, PageGroup } from 'chakra-paginator'
import { SearchContext } from '../../../context/searchContext'

const Pagination = () => {
  const { totalPages, paginationFetch, currentPage } = useContext(SearchContext)

  if (!totalPages) {
    return null
  }

  const handleChangePage = page => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    paginationFetch(page)
  }

  return (
    <Paginator
      pagesQuantity={totalPages}
      currentPage={currentPage}
      outerLimit={2}
      innerLimit={1}
      // TODO: ADD STYLE IN ACTIVE AND DEFAULT BUTTON
      activeStyles={{ border: '1px solid green' }}
      onPageChange={page => handleChangePage(page)}
    >
      <Container align="center" justify="center" w="full" p={4}>
        <PageGroup isInline align="center" />
      </Container>
    </Paginator>
  )
}

export default Pagination
