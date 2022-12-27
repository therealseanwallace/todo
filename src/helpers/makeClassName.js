/* eslint-disable default-case */
function makeClassName(type, task) {
  switch (type) {
    case "title":
      return 'task-title';
    case "due-date":
      return 'task-due-date';
    case "notes":
      return 'task-notes';
    case "priority":
      return 'task-priority';
  }

}

function makeID(type, task) {
  switch (type) {
    case "title":
      return `task-title-${task}`;
    case "due-date":
      return `task-due-date-${task}`;
    case "notes":
      return `task-notes-${task}`;
    case "priority":
      return `task-priority-${task}`;
  }
}

export { makeClassName, makeID };