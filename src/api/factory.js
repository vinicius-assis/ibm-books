import service from './service'

export const searchResquest = async (term, page) => {
  const normalizePageNumber = page - 1
  const response = await service.get('/volumes', {
    params: {
      q: term,
      maxResults: 16,
      startIndex: normalizePageNumber,
    },
  })

  return response
}
