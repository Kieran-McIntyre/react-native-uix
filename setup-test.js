import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://localhost'
});
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });

/**
 * Ignore certain errors
 */
const errorsToSuppress = [
  'Use PascalCase for React components',
  'a non-boolean attribute',
  'If you intentionally want it to appear in the DOM as a custom attribute'
]

console.error = jest.fn().mockImplementation((error) => {
  if (errorsToSuppress.some(errorToSuppress => error.includes(errorToSuppress))) return
  throw new Error(error)
})