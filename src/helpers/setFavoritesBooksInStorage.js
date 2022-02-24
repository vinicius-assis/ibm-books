export const favoriteStorage = 'FAVORITES_BOOKS'

export const setFavoritesBooksInStorage = book => {
  const storageItens = localStorage.getItem(favoriteStorage) ?? []
  const concatedBooks = storageItens.length
    ? [...JSON.parse(storageItens), book]
    : [book]
  localStorage.setItem(favoriteStorage, JSON.stringify(concatedBooks))
}
