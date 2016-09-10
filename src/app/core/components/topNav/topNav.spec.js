// http://twofuckingdevelopers.com/2014/07/solving-spyon-problems-in-jasmine/

import AppTopNavComponent from './'
import TopNavController from './topNav.controller';
import TopNavComponent from './topNav.component';
import TopNavService from './topNav.service';
import TopNavTemplate from './topNav.template.html';

describe('TopNav', () => {
  let _$rootScope,
    _mockService,
    _$scope,
    makeService,
    makeMockService,
    makeController;

  // Init module
  beforeEach(window.module(AppTopNavComponent));

  // Init variables
  beforeEach(inject(($rootScope) => {
    _$rootScope = $rootScope;
    makeService = () => {
      return new TopNavService(_$rootScope);
    };
    makeMockService = () => {
      return {
        _pageTitle: 'Sang',
        pageTitle: jasmine.createSpy('pageTitle')
      };
    };
    makeController = ($scope, mockService) => {
      return new TopNavController($scope, mockService);
    };
  }));


  /**************************************************
   ***************** Module Tests *******************
   **************************************************/
  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });


  /**************************************************
   *************** Controller Tests *****************
   **************************************************/
  describe('Controller', () => {
    let controller;
    // let controller;
    beforeEach(() => {
      // Mocks
      _$scope = _$rootScope.$new();
      _mockService = makeMockService();
      _mockService.pageTitle.and.returnValue('Shawn');
      controller = makeController(_$scope, _mockService);
    });
    // controller specs
    it('should bind correct default value', () => {
      expect(controller.pageTitle).toEqual('Shawn');
    });

    // it('should listen \'TopNav.PageTitleChanged\' event', function () {
    //   spyOn(_$scope, '$on');
    //   expect(_$scope.$on).toHaveBeenCalled();
    // });
  });


  /**************************************************
   **************** Template Tests ******************
   **************************************************/
  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(HeroTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });


  /**************************************************
   **************** Component Tests *******************
   **************************************************/
  describe('Component', () => {
    // component/directive specs
    let component = TopNavComponent;
    it('includes the intended template', () => {
      expect(component.template).toEqual(TopNavTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(TopNavController);
    });
  });


  /**************************************************
   **************** Service Tests *******************
   **************************************************/
  // https://github.com/tomastrajan/angular-js-es6-testing-example/blob/master/src/feature-b/todo-component/todo-component.test.js
  describe('Service', ()=> {
    let service;
    beforeEach(()=> {
      service = makeService();
    });

    describe('._pageTitle', ()=> {
      it('should be defined', ()=> {
        expect(service._pageTitle).toBeDefined();
      });

      it('should have correct default value', ()=> {
        expect(service._pageTitle).toEqual('Sang Dao');
      });
    });

    describe('pageTitleChanged()', ()=> {
      beforeEach(()=> {
        service = makeService();
      });

      it('should broadcast event \'TopNav.PageTitleChanged\'', ()=> {
        spyOn(_$rootScope, "$broadcast");
        service.pageTitleChanged();
        expect(_$rootScope.$broadcast).toHaveBeenCalledWith('TopNav.PageTitleChanged');
      });
    });

    describe('pageTitle()', ()=> {
      beforeEach(()=> {
        service = makeService();
      });

      it('should should return default page title', ()=> {
        expect(service.pageTitle()).toEqual('Sang Dao');
      });

      it('should should change page title', ()=> {
        spyOn(service, "pageTitleChanged");
        let changedValue = 'Shawn Dao 123';
        service.pageTitle(changedValue);
        expect(service._pageTitle).toEqual(changedValue);
        expect(service.pageTitleChanged).toHaveBeenCalled();
      });

      it('should should change page title and return new one', ()=> {
        spyOn(service, "pageTitleChanged");
        let changedValue = 'Shawn Dao';
        let returnValue = service.pageTitle(changedValue);
        expect(returnValue).toEqual(changedValue);
        expect(service.pageTitleChanged).toHaveBeenCalled();
      });
    });
  });
});
