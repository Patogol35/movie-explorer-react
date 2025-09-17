const _movies = [
  {
    id: 1,
    title: 'Titanic',
    year: 1997,
    genres: ['Drama', 'Romance'],
    rating: 7.8,
    overview: 'Una historia épica de amor en el famoso barco.',
    posterUrl: 'https://via.placeholder.com/300x450?text=Titanic'
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    genres: ['Acción', 'Ciencia ficción'],
    rating: 8.8,
    overview: 'Un ladrón que roba secretos a través de los sueños.',
    posterUrl: 'https://via.placeholder.com/300x450?text=Inception'
  },
  {
    id: 3,
    title: 'The Matrix',
    year: 1999,
    genres: ['Acción', 'Ciencia ficción'],
    rating: 8.7,
    overview: 'La realidad es distinta a lo que parece.',
    posterUrl: 'https://via.placeholder.com/300x450?text=The+Matrix'
  },
  {
    id: 4,
    title: 'Parasite',
    year: 2019,
    genres: ['Thriller', 'Drama'],
    rating: 8.6,
    overview: 'Un thriller social sobre clases y luchas económicas.',
    posterUrl: 'https://via.placeholder.com/300x450?text=Parasite'
  },
  {
    id: 5,
    title: 'Toy Story',
    year: 1995,
    genres: ['Animación', 'Familia'],
    rating: 8.3,
    overview: 'Las aventuras de los juguetes cuando no hay humanos.',
    posterUrl: 'https://via.placeholder.com/300x450?text=Toy+Story'
  },
  {
    id: 6,
    title: 'Interstellar',
    year: 2014,
    genres: ['Aventura', 'Ciencia ficción'],
    rating: 8.6,
    overview: 'Exploración espacial y amor familiar a través del tiempo.',
    posterUrl: 'https://via.placeholder.com/300x450?text=Interstellar'
  }
]
export function getMovies() {
  // retorna copia para evitar mutaciones fuera
  return _movies.map(m => ({ ...m }))
}
export function getAllGenres() {
  const s = new Set()
  _movies.forEach(m => m.genres.forEach(g => s.add(g)))
  return Array.from(s)
}
export function getById(id) {
  return _movies.find(m => m.id === id)
}