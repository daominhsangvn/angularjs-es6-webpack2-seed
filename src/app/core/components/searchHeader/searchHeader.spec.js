import AppSearchHeaderComponent from './'
import SearchHeaderController from './searchHeader.controller';
import SearchHeaderComponent from './searchHeader.component';
import SearchHeaderTemplate from './searchHeader.template.html';

describe('SearchHeader', () => {
  let makeController;

  beforeEach(window.module(AppSearchHeaderComponent));
  beforeEach(inject(() => {
    makeController = () => {
      return new SearchHeaderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
    //   let controller = makeController();
    //   expect(controller).to.have.property('name');
    // });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(HeroTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SearchHeaderComponent;
    it('includes the intended template',() => {
      expect(component.template).toEqual(SearchHeaderTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(SearchHeaderController);
    });
  });
});
