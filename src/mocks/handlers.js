import { rest } from 'msw';

export const handlers = [
  rest.get('https://swapi.dev/api/films/2', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ title: 'The Phantom Menace', opening_crawl: 'NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO' })
    );
  }),
];
