import { TourOfHeroesPage } from './app.po';

describe('Search heroes Dashboard ', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateTo();
  });

  it('should add a new hero', () => {
    page.navigateToHeroes();
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('TestMan');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
  
  //Search for a Hero 
  it('should set text to input search', () => {
    page.navigateTo();
    var text=page.enterHeroSearchInInput('Zero');
    expect(text.getText()).toEqual('Zero');
  });
  
  //Delete a Hero
  it('should delete hero', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
    page.deleteHero('20');
    expect(page.getAllHeroes().count()).toBe(10);
  });

  //Edit a Hero
  it('should edit a hero', () => {
    //const currentHeroes = page.getAllHeroes().count();    
    page.editHero('0','TestMan');
    expect(page.getCurrentUrl()).toBe('http://localhost:49152/dashboard');
  });

  //Browse for a Hero from dashboard
  it('should go to hero from dashboard', () => {
    page.navigateTo();
    page.goHeroFromDashBoard('Zero');
    //Tour of Heroes
    expect(page.getCurrentUrl()).toContain('/detail/');
  });

  //Browse for a Hero from Heroes list
  it('go to hero from list ', () => {
    page.navigateToHeroes();
    //const currentHeroes = page.getAllHeroes().count();
    page.goToHeroFromListHeros('Zero');
    expect(page.getCurrentUrl()).toContain('/detail/');
  });
  
  //Browse for a Hero from search
  it('should set text to input search and go to hero edit', () => {
    page.navigateTo();
    page.goHeroSearchInInput('Zero');
    //Tour of Heroes
    expect(page.getCurrentUrl()).toContain('/detail/');
  });
  
});



