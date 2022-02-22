export const normalizeBookData = list =>
  list.map(
    ({
      id,
      volumeInfo: { description, pageCount, title, averageRating, authors },
    }) => ({
      description: `${description.substring(0, 255)}...`,
      pageCount,
      title,
      averageRating,
      authors,
      id,
    })
  )
