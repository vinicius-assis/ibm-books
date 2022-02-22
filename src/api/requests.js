import instanceAPI from './instanceAPI'

export const getAllItems = async () => {
  const response = await instanceAPI.get('/volumes', {
    params: {
      q: 'harry potter',
    },
  })

  return response
}
