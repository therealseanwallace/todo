import { builder } from './builder';
import { addListeners } from './getInput';

const buildUI = () => {
  // Builds the main UI
  builder('menu', '#content', 'tabs');
  builder('input', '.tabs', 'tab', 'button', 'Tasks');
  builder('input', '.tabs', 'tab', 'button', 'Projects', undefined, 'projects');
  builder('main', '#content');
  builder('input', 'main', 'new-task-btn', 'button', 'New Task', undefined, 'new-task');
  builder('div', 'main', 'display');
  addListeners();
};

export {
  buildUI,
};
