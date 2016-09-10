import AppSideBarComponent from './'
import SideBarController from './sideBar.controller';
import SideBarComponent from './sideBar.component';
import SideBarTemplate from './sideBar.template.html';

describe('Sidebar', () => {
  let makeController;

  beforeEach(window.module(AppSideBarComponent));
  beforeEach(inject(() => {
    makeController = () => {
      return new SideBarController();
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
    let component = SideBarComponent;
    it('includes the intended template',() => {
      expect(component.template).toEqual(SideBarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(SideBarController);
    });
  });
});
