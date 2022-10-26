/* eslint-disable spaced-comment */
/* eslint-disable max-len */
import { demo } from './objects';

const tasks = (() => {
  const projectArray = [];
  const returnProjectArray = () => (projectArray);
  let taskCounter = 0;
  const taskFactory = (task) => {
    let {
      title, dueDate, priority, notes, taskList, type, isProject, completed, taskID, deleted, parentTask,
    } = task;
    const {
      isDemo,
    } = task;
    //console.log('taskFactory active! task is', task);
    return {
      get parentTask() {
        return (parentTask);
      },
      set parentTask(newParent) {
        parentTask = newParent;
      },
      get isDemo() {
        return (isDemo);
      },
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
      get notes() {
        return (notes);
      },
      set notes(newNotes) {
        notes = newNotes;
      },
      get taskList() {
        return (taskList);
      },
      set taskList(newTask) {
        taskList.push(newTask);
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
      title, dueDate, priority, taskList, notes, type, isProject, completed, taskID, deleted, parentTask,
    } = task;
    taskList = [];
    return {
      get parentTask() {
        return (parentTask);
      },
      set parentTask(newParent) {
        parentTask = newParent;
      },
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

  // Takes a taskID and returns an array of 2 numbers. [0] is the parent
  // project's projectArray reference. [1] is the task's reference in that
  // project's taskList, unless the task is itself a project, in which case [1]
  // is null
  const getTaskByID = (IDtoCheck) => {
    const IDNumber = Number(IDtoCheck);
    //console.log('IDNumber=', IDNumber);
    let result = [];
    for (let i = 0; i < projectArray.length; i += 1) {
      //console.log('getTaskByID is looping,', i);
      const project = projectArray[i];
      //console.log('project is', project);
      //console.log('project.taskID is', project.taskID);
      if (project.taskID === IDNumber) {
        //console.log('found parent project! i is', i);
        result = [i, null];
        break;
      }
      for (let index = 0; index < project.taskList.length; index += 1) {
        const task = project.taskList[index];
        if (task.taskID === IDNumber) {
          result = [i, index];
          break;
        }
      }
    }
    return (result);
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
    //console.log('addTask! task is', task);
    if (newTask.type === 'project') {
      newTask.taskID = taskCounter;
      const newNewTask = taskFactory(newTask);
      //console.log('new project after taskFactory is', newNewTask);
      newNewTask.isProject = true;
      projectArray.push(newNewTask);
      taskCounter += 1;
      //console.log('Is this task a demo?', newNewTask.isDemo);
      if (!newNewTask.isDemo) {
        storeTask(newNewTask);
      }
    }
    if (newTask.type === 'task') {
      //console.log('type === task. parentTask is', newTask.parentTask);
      const parentProject = getTaskByID(newTask.parentTask)[0];
      //console.log('parentProject is', parentProject);
      //console.log('parentProject is', parentProject);
      newTask.taskID = taskCounter;
      const newNewTask = taskFactory(newTask);
      // console.log('new task after taskFactory is', newNewTask);
      newNewTask.isProject = false;
      //console.log('newNewTask before adding is', newNewTask);
      //console.log('projectArray before adding is', projectArray);
      //console.log('projectArray[parentProject is', projectArray[parentProject]);
      console.log('parentProject is', parentProject);
      projectArray[parentProject].taskList = newNewTask;
      taskCounter += 1;
      //console.log('newNewTask after adding is', newNewTask);
      //console.log('projectArray after adding is', projectArray);
      //console.log('Is this task a demo?', newNewTask.isDemo);
      if (!newNewTask.isDemo) {
        storeTask(newNewTask);
      }
    }
  };

  const addDemo = (() => {
    //console.log('addDemo active. projectArray is', returnProjectArray());
    if (!returnProjectArray()[0]) {
      // Adds dummy content to projectArray
      addTask(demo.demoProject1);
      addTask(demo.demoTask1);
      addTask(demo.demoTask2);
    }
    //console.log('addDemo finished. projectArray is', returnProjectArray());
  })();

  const retrieveTasksFromStorage = (() => {
    const retrievedProjects = [];
    const retrievedTasks = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const item = window.localStorage.getItem(key);
      const itemObject = JSON.parse(item);
      if (itemObject.isProject) {
      }
      const sendToTaskFactory = taskFactory(itemObject);
      if (sendToTaskFactory.type === 'project') {
        retrievedProjects.push(sendToTaskFactory);
      } else {
        retrievedTasks.push(sendToTaskFactory);
      }
      //retrievedTaskArray.push(sendToTaskFactory);
    }
    const sortedProjects = retrievedProjects.sort((a, b) => a.project - b.project);
    for (let i = 0; i < sortedProjects.length; i += 1) {
      const element = sortedProjects[i];
      projectArray.push(element);
    }
    const sortedTasks = retrievedTasks.sort((a, b) => a.taskID - b.taskID);
    //console.log(projectArray);
    for (let i = 0; i < sortedTasks.length; i += 1) {
      const element = sortedTasks[i];
      //console.log(element);
      projectArray[0].taskList.push(element);
    }
  })();


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
      const getNewProject = getTaskByID(newValue)[0];
      projectArray[project].taskList[task].parentTask = newValue;
      projectArray[getNewProject].taskList.push(projectArray[project].taskList[task]);
      projectArray[project].taskList.splice(task, 1);
      const { length } = projectArray[getNewProject].taskList;
      return (projectArray[getNewProject].taskList[length - 1]);
    }
    if (attr === 3) { // i.e. if this is a priority selector
      if (task === null) {
        projectArray[project].priority = newValue;
        return (projectArray[project].priority);
      }
      projectArray[project].taskList[task].priority = newValue;
      return (projectArray[project].taskList[task].priority);
    }
    if (attr === 4) { // i.e. if this is notes
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

  

  return {
    returnProjectArray, getTaskByID, addTask, taskFactory, modifyTask, returnEmptyTask, storeTask, deleteTaskFromStorage,
  };
})();

export { tasks };
