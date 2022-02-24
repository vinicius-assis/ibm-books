import service from './service'

export const searchResquest = async (term, page) => {
  const normalizePageNumber = page - 1
  // eslint-disable-next-line no-debugger
  debugger
  const response = await service.get('/volumes', {
    params: {
      q: term,
      maxResults: 16,
      startIndex: normalizePageNumber,
    },
  })

  return response
}
