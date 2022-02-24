export const favoriteStorage = 'FAVORITES_BOOKS'

export const setFavoritesBooksInStorage = list =>
  localStorage.setItem(favoriteStorage, JSON.stringify(list))

export const checkIfAlreadyExist = (booksList, id) =>
  booksList.some(({ id: favoriteId }) => favoriteId === id)
