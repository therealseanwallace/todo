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
    default:
      console.log('Error! ID not found in makeID.js');
  }
}

export default makeID;