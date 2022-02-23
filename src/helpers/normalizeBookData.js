export const normalizeBookData = list =>
  list.map(
    ({
      id,
      volumeInfo: { description, pageCount, title, averageRating, authors },
    }) => ({
      description,
      pageCount,
      title,
      averageRating,
      authors,
      id,
    })
  )
