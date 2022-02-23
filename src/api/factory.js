import service from './service'

export const searchResquest = async term => {
  const response = await service.get('/volumes', {
    params: {
      q: term,
      maxResults: 8,
    },
  })

  return response
}
