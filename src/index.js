import { toDoFactory, tasks } from './appLogic';
import { buildUI } from './buildPage';
import { buildTasks } from './tasks';
import './style.css';

buildUI();
buildTasks(); // Adds tasks to the display