
type SwapiResponse = {
  name: string;
}

const RandomNameService = { 
  getName: async (): Promise<string> => {
    const request = await fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 9  + 1)}`);
    const { name }: SwapiResponse = await request.json();
    return name.toUpperCase();
  }
}
export { RandomNameService };