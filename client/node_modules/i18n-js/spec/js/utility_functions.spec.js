var I18n = require("../../app/assets/javascripts/i18n");

describe("Utility Functions", function(){
  beforeEach(function(){
    I18n.reset();
  });

  describe("I18n.lookup", function() {
    it("does not change locale on failed lookup", function(){
      var fallback_locales = ['fallback1', 'fallback2'];

      I18n.locales['lang'] = fallback_locales.slice();
      expect(I18n.locales.lang).toEqual(fallback_locales);

      I18n.lookup('anything', {locale: 'lang'})
      expect(I18n.locales.lang).toEqual(fallback_locales);
    });
  });

  describe("I18n.splitReplace", function() {
    it("replaces the placeholder with value and splits the string by the placeholders", function() {
      var delimiter = "{{name}}";
      expect(I18n.splitReplace("Name: {{name}}", delimiter, "John")).toEqual(["Name: ", "John"]);
      expect(I18n.splitReplace("Name: {{name}}, nickname: {{name}}", delimiter, "John")).toEqual(["Name: ", "John", ", nickname: ", "John"]);
      expect(I18n.splitReplace("Name twice: {{name}} {{name}}", delimiter, "John")).toEqual(["Name twice: ", "John", " ", "John"]);
      expect(I18n.splitReplace("Name twice no space: {{name}}{{name}}", delimiter, "John")).toEqual(["Name twice no space: ", "John", "John"]);
    });
  });
});
