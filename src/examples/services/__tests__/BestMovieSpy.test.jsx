import { BestMovieService } from '../BestMovieService';

function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve(data),
      })
    })
  }
}

test("if BestMovieService retrieves the complete API response", async () => {
  
  const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(setupFetchStub({ title: "The Empire Strikes Back"}))
  const response = await BestMovieService.getMovie();

  expect(fetchSpy).toHaveBeenCalledWith("https://swapi.dev/api/films/2");
  expect(response.title).toBe("The Empire Strikes Back");
});
