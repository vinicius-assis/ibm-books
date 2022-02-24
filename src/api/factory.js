import service from './service'

export const searchResquest = async (term, page) => {
  const response = await service.get('/volumes', {
    params: {
      q: term,
      maxResults: 16,
      startIndex: page,
    },
  })

  return response
}
