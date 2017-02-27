
// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import { Config, browser, by } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [
    'tests/**/*.js'
  ],
  params: {
    //define global parameters

  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
		//define login logic, have a look at
		//example https://github.com/angular/protractor/blob/master/spec/withLoginConf.js#L18
		browser.driver.get('http://google.com');
		return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /google/.test(url);
      });
    }, 10000);
  },
  jasmineNodeOpts: {
    print: () => {}
  },

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
  useAllAngular2AppRoots: true
};
