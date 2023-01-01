function makeClassName(type, prio) {
  switch (type) {
    case "title":
      return 'task-title';
    case "due-date":
      return 'task-due-date';
    case "notes":
      return 'task-notes';
    case "priority":
      return 'task-priority';
    default:
      console.log('Error! Class name not found in makeClassName.js');
  }

}

export default makeClassName;