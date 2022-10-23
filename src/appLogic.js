/* eslint-disable spaced-comment */
/* eslint-disable max-len */
import { demo } from './objects';
export { tasks };

const tasks = (() => {
  const projectArray = [];
  let taskCounter = 1;
  let projectCounter = 1;

  const taskFactory = (task) => {
    let {
      title, dueDate, priority, project, notes, taskList, type, isProject, completed, taskID, deleted,
    } = task;
    return {
      get title() {
        return (title);
      },
      set title(newTitle) {
        title = newTitle;
      },
      get dueDate() {
        return (dueDate);
      },
      set dueDate(newDueDate) {
        dueDate = newDueDate;
      },
      get priority() {
        return (priority);
      },
      set priority(newPriority) {
        priority = newPriority;
      },
      get project() {
        return (project);
      },
      set project(newProject) {
        project = newProject;
      },
      get notes() {
        return (notes);
      },
      set notes(newNotes) {
        notes = newNotes;
      },
      get taskList() {
        return (taskList);
      },
      set taskList(newTaskList) {
        taskList = newTaskList;
      },
      get type() {
        return (type);
      },
      set type(newType) {
        type = newType;
      },
      get isProject() {
        return (isProject);
      },
      set isProject(toggle) {
        isProject = !isProject;
      },
      get completed() {
        return (completed);
      },
      set completed(toggle) {
        completed = !completed;
      },
      get taskID() {
        return (taskID);
      },
      set taskID(newTaskID) {
        taskID = newTaskID;
      },
      get deleted() {
        return (deleted);
      },
      set deleted(toggle) {
        deleted = !deleted;
      },
    };
  };

  const returnEmptyTask = (task) => {
    let {
      title, dueDate, priority, taskList, project, notes, type, isProject, completed, taskID, deleted,
    } = task;
    taskList = [];
    return {
      get title() {
        return (title);
      },
      set title(newTitle) {
        title = newTitle;
      },
      get dueDate() {
        return (dueDate);
      },
      set dueDate(newDueDate) {
        dueDate = newDueDate;
      },
      get priority() {
        return (priority);
      },
      set priority(newPriority) {
        priority = newPriority;
      },
      get project() {
        return (project);
      },
      set project(newProject) {
        project = newProject;
      },
      get notes() {
        return (notes);
      },
      set notes(newNotes) {
        notes = newNotes;
      },
      get taskList() {
        return (taskList);
      },
      set taskList(newTaskList) {
        taskList = newTaskList;
      },
      get type() {
        return (type);
      },
      set type(newType) {
        type = newType;
      },
      get isProject() {
        return (isProject);
      },
      set isProject(toggle) {
        isProject = !isProject;
      },
      get completed() {
        return (completed);
      },
      set completed(toggle) {
        completed = !completed;
      },
      get taskID() {
        return (taskID);
      },
      set taskID(newTaskID) {
        taskID = newTaskID;
      },
      get deleted() {
        return (deleted);
      },
      set deleted(toggle) {
        deleted = !deleted;
      },
    };
  };

  const storeTask = (task) => {
    const taskAsString = JSON.stringify(task);
    window.localStorage.setItem(task.taskID, taskAsString);
  };

  const deleteTaskFromStorage = (taskID) => {
    window.localStorage.removeItem(taskID);
  };

  const addTask = (task) => {
    const newTask = task;
    if (newTask.type === 'project') {
      newTask.project = projectCounter;
      newTask.taskID = taskCounter;
      const newNewTask = taskFactory(newTask);
      projectArray.push(newNewTask);
      projectCounter += 1;
      taskCounter += 1;
    }
    if (newTask.type === 'task') {
      const newProjectRef = newTask.project;
      newTask.taskID = taskCounter;
      const newNewTask = taskFactory(newTask);
      projectArray[newProjectRef].taskList.push(newNewTask);
      taskCounter += 1;
    }
  };

  const addDemo = (() => {
    // Adds dummy content to projectArray
    const demoObjects = Object.entries(demo);
    addTask(demo.demoProject1);
    addTask(demo.demoProject2);
    addTask(demo.demoProject3);
    addTask(demo.demoTask1);
    addTask(demo.demoTask2);
    addTask(demo.demoTask3);
    addTask(demo.demoTask4);
    addTask(demo.demoTask5);
    addTask(demo.demoTask6);
    addTask(demo.demoTask7);
  })();

  const retrieveTasksFromStorage = (() => {
    const retrievedProjects = [];
    const retrievedTasks = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = window.localStorage.getItem(key);
      const itemObject = JSON.parse(item);
      itemObject.taskID = taskCounter;
      taskCounter += 1;
      const sendToTaskFactory = taskFactory(itemObject);
      if (sendToTaskFactory.type === 'project') {
        retrievedProjects.push(sendToTaskFactory);
      } else {
        retrievedTasks.push(sendToTaskFactory);
      }
      //retrievedTaskArray.push(sendToTaskFactory);
    }
    const sortedProjects = retrievedProjects.sort((a, b) => a.project - b.project);
    for (let i = 0; i < sortedProjects.length; i++) {
      const element = sortedProjects[i];
      projectArray.push(element);
    }
    const sortedTasks = retrievedTasks.sort((a, b) => a.taskID - b.taskID);
    for (let i = 0; i < sortedTasks.length; i++) {
      const element = sortedTasks[i];
      projectArray[element.project].taskList.push(element);
    }
  })();

  // Takes a taskID and returns an array of 2 numbers. [0] is the parent
  // project's projectArray reference. [1] is the task's reference in that
  // project's taskList, unless the task is itself a project, in which case [1]
  // is null
  const getTaskByID = (IDtoCheck) => {
    const IDNumber = Number(IDtoCheck);
    let result = [];
    for (let i = 0; i < projectArray.length; i++) {
      const project = projectArray[i];
      if (project.taskID === IDNumber) {
        result = [project.project - 1, null];
        break;
      }
      for (let index = 0; index < project.taskList.length; index++) {
        const task = project.taskList[index];
        if (task.taskID === IDNumber) {
          result = [project.project - 1, index];
          break;
        }
      }
    }
    return (result);
  };
  // Attr is used to determine which attribute of the destination task
  // should be altered
  const modifyTask = (project, task, attr, newValue) => {
    if (attr === 0) { // i.e. if this is a task title
      if (task === null) {
        projectArray[project].title = newValue;
        return (projectArray[project].title);
      }
      projectArray[project].taskList[task].title = newValue;
      return (projectArray[project].taskList[task].title);
    }
    if (attr === 1) { // i.e. if this is a dueDate
      if (task === null) {
        projectArray[project].dueDate = newValue;
        return (projectArray[project].dueDate);
      }
      projectArray[project].taskList[task].dueDate = newValue;
      return (projectArray[project].taskList[task].dueDate);
    }
    if (attr === 2) { // i.e. if this is a project selector
      projectArray[project].taskList[task].project = newValue;
      projectArray[newValue].taskList.push(projectArray[project].taskList[task]);
      projectArray[project].taskList.splice(task, 1);
      const { length } = projectArray[newValue].taskList;
      return (projectArray[newValue].taskList[length - 1]);
    }
    if (attr === 3) { // i.e. if this is a priority selector
      if (task === null) {
        projectArray[project].priority = newValue;
        return (projectArray[project].priority);
      }
      projectArray[project].taskList[task].priority = newValue;
      return (projectArray[project].taskList[task].priority);
    }
    if (attr === 4) {
      if (task === null) {
        projectArray[project].notes = newValue;
        return (projectArray[project].notes);
      }
      projectArray[project].taskList[task].notes = newValue;
      return (projectArray[project].taskList[task].notes);
    }
    if (attr === 4) {
      if (task === null) {
        projectArray[project].notes = newValue;
        return (projectArray[project].notes);
      }
      projectArray[project].taskList[task].notes = newValue;
      return (projectArray[project].taskList[task].notes);
    }
    if (attr === 5) {
      if (task === null) {
        projectArray[project].completed = !projectArray[project].completed;
        return (projectArray[project].completed);
      }
      projectArray[project].taskList[task].completed = !projectArray[project].taskList[task].completed;
      return (projectArray[project].taskList[task].completed);
    }
    if (attr === 6) {
      if (task === null) {
        projectArray[project].deleted = !projectArray[project].deleted;
        return (projectArray[project].deleted);
      }
      projectArray[project].taskList[task].deleted = !projectArray[project].taskList[task].deleted;
      return (projectArray[project].taskList[task].deleted);
    }
  };

  const returnProjectArray = () => { return (projectArray) }

  return {
    returnProjectArray, getTaskByID, addTask, taskFactory, modifyTask, returnEmptyTask, storeTask, deleteTaskFromStorage,
  };
})();
