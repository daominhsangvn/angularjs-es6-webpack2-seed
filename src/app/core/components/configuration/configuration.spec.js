import AppConfigurationComponent from './'
import ConfigurationController from './configuration.controller';
import ConfigurationComponent from './configuration.component';
import ConfigurationTemplate from './configuration.template.html';

describe('Configuration', () => {
  let makeController;

  beforeEach(window.module(AppConfigurationComponent));
  beforeEach(inject(() => {
    makeController = () => {
      return new ConfigurationController();
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
    let component = ConfigurationComponent;
    it('includes the intended template',() => {
      expect(component.template).toEqual(ConfigurationTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(ConfigurationController);
    });
  });
});
