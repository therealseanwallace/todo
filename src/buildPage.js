import { builder } from './builder';
import { addListeners } from './getInput';

const buildUI = () => {
  // Builds the main UI
  builder('menu', '#content', 'tabs');
  builder('input', '.tabs', 'tab', 'button', 'Tasks', undefined, 'tasks');
  builder('input', '.tabs', 'tab', 'button', 'Projects', undefined, 'projects');
  builder('main', '#content');
  builder('div', 'main', 'display');
  addListeners();
};

export {
  buildUI,
};
