export default function useCategoryMap() {
  const categoryMap = {
    none: "Categoria desconhecida",
    games: "Jogos",
    books: "Livros",
    movies: "Filmes",
    collectibles: "Colecionáveis",
  };

  const categorySelectValue = {
    "Categoria desconhecida": " none",
    Jogos: "games",
    Livros: "books",
    Filmes: "movies",
    Colecionáveis: "collectibles",
  };

  const getCategory = (category) => categoryMap[category];
  const getCategorySelectValue = (category) => categorySelectValue[category];

  return { getCategory, getCategorySelectValue };
}
