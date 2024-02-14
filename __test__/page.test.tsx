import { render, screen } from '@testing-library/react';
import Home from '@/page';

jest.mock('../app/services/fetchPokemons');
jest.mock('../app/components/search/search');

describe('Home', () => {
  beforeEach(async () => {
    const home = await Home({
        searchParams: {
          name: undefined
        }
      });
      render(home);
  });

  it('container div to be render', () => {
    const divElementContainet = screen.getByTestId("home")
    expect(divElementContainet).toBeInTheDocument()
  });

  it('container nav to be render', () => {
    const nav = screen.getByTestId("nav")
    expect(nav).toBeInTheDocument()
  });

  it('container div search to be render', () => {
    const search = screen.getByTestId("search")
    expect(search).toBeInTheDocument()
  });

  it('container div pokemons to be render', () => {
    const pokemons = screen.getByTestId("pokemons")
    expect(pokemons).toBeInTheDocument()
  });

  it('container footer to be render', () => {
    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  });
});
