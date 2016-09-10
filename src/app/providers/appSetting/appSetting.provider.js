/*@ngInject*/
export default class AppSettingsProvider {
  constructor() {
    this.settings = {
      languages: [],
      name: '',
      logo: '',
      version: ''
    };
  }

  /**
   * addLanguage
   * @param newLanguage
   */
  addLanguage(newLanguage) {
    this.settings.languages.push(newLanguage);
  }

  /**
   * setLogo
   * @param logo
   */
  setLogo(logo) {
    this.settings.logo = logo;
  }

  /**
   * setName
   * @param name
   */
  setName(name) {
    this.settings.name = name;
  }

  /**
   * setVersion
   * @param version
   */
  setVersion(version) {
    this.settings.version = version;
  }

  $get() {
    return {
      languages: this.settings.languages,
      name: this.settings.name,
      logo: this.settings.logo,
      version: this.settings.version
    };
  }
}
