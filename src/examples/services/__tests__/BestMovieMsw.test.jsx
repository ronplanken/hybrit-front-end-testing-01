import { BestMovieService } from '../BestMovieService';

test("if BestMovieService retrieves the complete API response", async () => {

  const response = await BestMovieService.getMovie();

  expect(response.title).toBe("The Phantom Menace");
  expect(response.opening_crawl).toBe("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
});
