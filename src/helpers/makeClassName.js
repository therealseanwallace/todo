function makeClassName(type, task) {
  switch (type) {
    case "title":
      return 'task-title';
    case "due-date":
      return 'task-due-date';
  }
}

function makeID(type, task) {
  switch (type) {
    case "title":
      return `task-title-${task}`;
    case "due-date":
      return `task-due-date-${task}`;
  }
}

export { makeClassName, makeID };