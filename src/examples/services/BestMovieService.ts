
type SwapiResponse = {
  title: string;
  opening_crawl: string;
}

const BestMovieService = { 
  getMovie: async (movieNumber: number = 2): Promise<SwapiResponse> => {
    const request = await fetch(`https://swapi.dev/api/films/${movieNumber}`);
    const data: SwapiResponse = await request.json();
    return data;
  }
}
export { BestMovieService };