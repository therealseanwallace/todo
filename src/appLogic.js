/* eslint-disable spaced-comment */
/* eslint-disable max-len */
import { demo } from './objects';

const tasks = (() => {
  const projectArray = [];
  const returnProjectArray = () => (projectArray);
  let taskCounter = 0;
  const taskFactory = (task) => {
    let {
      title, dueDate, priority, notes, taskList, isProject, completed, taskID, deleted, parentTask,
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
      get isProject() {
        return (isProject);
      },
      set isProject(value) {
        isProject = value;
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
      title, dueDate, priority, taskList, notes, isProject, completed, taskID, deleted, parentTask,
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
      get isProject() {
        return (isProject);
      },
      set isProject(value) {
        isProject = value;
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
  const getTaskByID = (IDtoCheck, isProjectSelector) => {
    const IDNumber = Number(IDtoCheck);
    if (isProjectSelector === true) {
      //console.log('isProjectSelector! getTaskByID! IDNumber=', IDNumber);
    }
    
    let result = [];
    for (let i = 0; i < projectArray.length; i += 1) {
      if (isProjectSelector === true) {
        //console.log('getTaskByID is looping,', i);
      }
      
      const project = projectArray[i];
      if (isProjectSelector === true) {
        //console.log('project is', project);
        //console.log('project.taskID is', project.taskID);
      }
      
      if (project.taskID === IDNumber) {
        if (isProjectSelector === true) {
          //console.log('found parent project! i is', i);
        }
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
    console.log('storing task', task);
    const taskAsString = JSON.stringify(task);
    window.localStorage.setItem(task.taskID, taskAsString);
  };

  const deleteTaskFromStorage = (taskID) => {
    window.localStorage.removeItem(taskID);
  };

  const addTask = (task) => {
    const newTask = task;
    //console.log('adding task. newTask is', newTask);
    let newNewTask;
    //console.log('addTask! task is', task);
    if (newTask.isProject === true) {
      newTask.taskID = taskCounter;
      newNewTask = taskFactory(newTask);
      //console.log('new project after taskFactory is', newNewTask);
      if (!newNewTask.isDemo) {
        projectArray.push(newNewTask);
      }
      taskCounter += 1;
      //console.log('Is this task a demo?', newNewTask.isDemo);
    }
    if (newTask.isProject === false) {
      //console.log('type === task. parentTask is', newTask.parentTask);
      const parentProject = getTaskByID(newTask.parentTask)[0];
      //console.log('parentProject is', parentProject);
      newTask.taskID = taskCounter;
      newNewTask = taskFactory(newTask);
      //console.log('new task after taskFactory is', newNewTask);
      //console.log('newNewTask before adding is', newNewTask);
      //console.log('projectArray before adding is', projectArray);
      //console.log('projectArray[parentProject is', projectArray[parentProject]);
      //console.log('parentProject is', parentProject);
      if (!newNewTask.isDemo) {
        projectArray[parentProject].taskList = newNewTask;
       }
      taskCounter += 1;
      //console.log('newNewTask after adding is', newNewTask);
      //console.log('projectArray after adding is', projectArray);
      //console.log('Is this task a demo?', newNewTask.isDemo);
    }
    //console.log('adding task. newNewTask is', newNewTask, 'projectArray is', projectArray);
    //console.log('adding task, localStorage is', window.localStorage);
    if (!newNewTask.isDemo) {
      //console.log('this is not a demo! storing task');
      storeTask(newNewTask);
    }
    //console.log('added task, localStorage is', window.localStorage, 'projectArray is', projectArray);
    return (newNewTask);
  };

  const addDemo = (() => {
    //localStorage.clear();
    //addTask(demo.demoTask1);
    //addTask(demo.demoTask2);
    if (window.localStorage.length === 0) {
      //console.log('addDemo active. projectArray is', returnProjectArray());
      //console.log('window.localStorage.length=', window.localStorage.length);
      const demo0 = addTask(demo.demoProject1);
      const demo1 = addTask(demo.demoTask1);
      const demo2 = addTask(demo.demoTask2);
      storeTask(demo0);
      storeTask(demo1);
      storeTask(demo2);
    } else {console.log('localStorage is populated. Skipping addDemo.')}

    //console.log('addDemo finished. localStorage is', localStorage);
    //console.log('addDemo finished. projectArray is', returnProjectArray());
  })();

  const retrieveTasksFromStorage = (() => {
    //localStorage.clear();
    console.log('retrieving localStorage. value is:', window.localStorage, 'projectArray is', projectArray);
    const retrievedProjects = [];
    const retrievedTasks = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const item = window.localStorage.getItem(key);
      const itemObject = JSON.parse(item);
      console.log('itemObject is', itemObject);
      const sentToTaskFactory = taskFactory(itemObject);
      console.log('sentToTaskFactory =', sentToTaskFactory);
      if (sentToTaskFactory.isProject === true) {
        retrievedProjects.push(sentToTaskFactory);
      } else {
        retrievedTasks.push(sentToTaskFactory);
      }
    }
    const sortedProjects = retrievedProjects.sort((a, b) => a.project - b.project);
    console.log('about to add sortedProjects, sortedProjects is', sortedProjects);
    for (let i = 0; i < sortedProjects.length; i += 1) {
      const element = sortedProjects[i];
      console.log('adding sorted projects. element is', element);
      projectArray.push(element);
      if (element.taskID > taskCounter) {
        taskCounter = element.taskID;
      }
    }
    const sortedTasks = retrievedTasks.sort((a, b) => a.taskID - b.taskID);
    console.log('about to add sortedTasks, sortedTasks is', sortedTasks);
    console.log('projectArray is', projectArray);
    for (let i = 0; i < sortedTasks.length; i += 1) {
      const element = sortedTasks[i];
      console.log('reading tasks. element is', element);
      const parentProj = element.parentTask;
      console.log('parentProj is', parentProj);
      const parentArrayIndex = getTaskByID(parentProj)[0];
      console.log('parentArrayIndex is', parentArrayIndex);
      projectArray[parentArrayIndex].taskList.push(element);
      if (element.taskID > taskCounter) {
        taskCounter = element.taskID;
      }
    }
  })();

  // attr is used to determine which attribute of the destination task
  // should be altered
  const modifyTask = (project, task, attr, newValue, taskID) => {
    //console.log('taskID is', taskID);
    const getTask = getTaskByID(taskID);
    const stripTaskList = (proj) => {
      const strippedProj = proj;
      strippedProj.taskList = [];
      return (strippedProj);
    };
    //console.log('getTask is', getTask);
    if (attr === 0) { // i.e. if this is a task title
      if (task === null) {
        projectArray[project].title = newValue;
        console.log('localStorage is', localStorage);
        const projWithTasksStripped = stripTaskList(projectArray[project]);
        storeTask(projWithTasksStripped);
        console.log('localStorage is', localStorage);
        return (projectArray[project].title);
      }
      projectArray[project].taskList[task].title = newValue;
      console.log('localStorage is', localStorage);
      storeTask(projectArray[project].taskList[task]);
      console.log('localStorage is', localStorage);
      return (projectArray[project].taskList[task].title);
    }
    if (attr === 1) { // i.e. if this is a dueDate
      if (task === null) {
        projectArray[project].dueDate = newValue;
        console.log('localStorage is', localStorage);
        const projWithTasksStripped = stripTaskList(projectArray[project]);
        storeTask(projWithTasksStripped);
        console.log('localStorage is', localStorage);
        return (projectArray[project].dueDate);
      }
      projectArray[project].taskList[task].dueDate = newValue;
      console.log('localStorage is', localStorage);
      storeTask(projectArray[project].taskList[task]);
      console.log('localStorage is', localStorage);
      return (projectArray[project].taskList[task].dueDate);
    }
    if (attr === 2) { // i.e. if this is a project selector
      const getNewProject = getTaskByID(newValue, true)[0];
      console.log('localStorage is', localStorage);
      projectArray[project].taskList[task].parentTask = newValue;
      storeTask(projectArray[project].taskList[task]);
      console.log('localStorage is', localStorage);
      //console.log('new parent task is', projectArray[project].taskList[task].parentTask);
      projectArray[getNewProject].taskList.push(projectArray[project].taskList[task]);
      projectArray[project].taskList.splice(task, 1);
      const { length } = projectArray[getNewProject].taskList;
      return (projectArray[getNewProject].taskList[length - 1]);
    }
    if (attr === 3) { // i.e. if this is a priority selector
      if (task === null) {
        projectArray[project].priority = newValue;
        console.log('localStorage is', localStorage);
        const projWithTasksStripped = stripTaskList(projectArray[project]);
        storeTask(projWithTasksStripped);
        console.log('localStorage is', localStorage);
        return (projectArray[project].priority);
      }
      projectArray[project].taskList[task].priority = newValue;
      console.log('localStorage is', localStorage);
      storeTask(projectArray[project].taskList[task]);
      console.log('localStorage is', localStorage);
      return (projectArray[project].taskList[task].priority);
    }
    if (attr === 4) { // i.e. if this is notes
      if (task === null) {
        projectArray[project].notes = newValue;
        console.log('localStorage is', localStorage);
        const projWithTasksStripped = stripTaskList(projectArray[project]);
        storeTask(projWithTasksStripped);
        console.log('localStorage is', localStorage);
        return (projectArray[project].notes);
      }
      projectArray[project].taskList[task].notes = newValue;
      console.log('localStorage is', localStorage);
      storeTask(projectArray[project].taskList[task]);
      console.log('localStorage is', localStorage);
      return (projectArray[project].taskList[task].notes);
    }
    if (attr === 5) {
      if (task === null) {
        projectArray[project].completed = !projectArray[project].completed;
        console.log('localStorage is', localStorage);
        const projWithTasksStripped = stripTaskList(projectArray[project]);
        storeTask(projWithTasksStripped);
        console.log('localStorage is', localStorage);
        return (projectArray[project].completed);
      }
      projectArray[project].taskList[task].completed = !projectArray[project].taskList[task].completed;
      console.log('localStorage is', localStorage);
      storeTask(projectArray[project].taskList[task]);
      console.log('localStorage is', localStorage);
      return (projectArray[project].taskList[task].completed);
    }
    if (attr === 6) {
      if (task === null) {
        projectArray[project].deleted = !projectArray[project].deleted;
        console.log('localStorage is', localStorage);
        const projWithTasksStripped = stripTaskList(projectArray[project]);
        storeTask(projWithTasksStripped);
        console.log('localStorage is', localStorage);
        return (projectArray[project].deleted);
      }
      projectArray[project].taskList[task].deleted = !projectArray[project].taskList[task].deleted;
      console.log('localStorage is', localStorage);
      storeTask(projectArray[project].taskList[task]);
      console.log('localStorage is', localStorage);
      return (projectArray[project].taskList[task].deleted);
    }
  };

  

  return {
    returnProjectArray, getTaskByID, addTask, taskFactory, modifyTask, returnEmptyTask, storeTask, deleteTaskFromStorage,
  };
})();

export { tasks };
