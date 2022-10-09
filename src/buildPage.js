import { toDoFactory, tasks } from './appLogic';
import { builder } from './builder';
import { getInput, addListeners } from './getInput';

const buildUI = () => {
  // Builds the main UI
  builder('menu', '#content', 'tabs');
  builder('input', '.tabs', 'tab', 'button', 'Tasks');
  builder('input', '.tabs', 'tab', 'button', 'Projects');
  builder('main', '#content');
  builder('input', 'main', 'new-task-btn', 'button', 'New Task');
  builder('div', 'main', 'display');
  addListeners();
};

export {
  buildUI,
};
