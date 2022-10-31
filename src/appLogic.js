import { demo } from './objects';

const tasks = (() => {
  const projectArray = [];
  const returnProjectArray = () => (projectArray);
  let taskCounter = 0;
  const taskFactory = (task) => {
    let {
      title, dueDate, priority, notes, isProject, completed, taskID, deleted, parentTask,
    } = task;
    const {
      isDemo,
    } = task;
    const taskList = [];
    return {
      taskList,
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
      get isProject() {
        return (isProject);
      },
      set isProject(value) {
        isProject = value;
      },
      get completed() {
        return (completed);
      },
      set completed(newValue) {
        completed = newValue;
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
      set deleted(newValue) {
        deleted = newValue;
      },
    };
  };

  const returnEmptyTask = (task) => {
    let {
      title, dueDate, priority, notes, isProject, completed, taskID, deleted, parentTask,
    } = task;
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
      get isProject() {
        return (isProject);
      },
      set isProject(value) {
        isProject = value;
      },
      get completed() {
        return (completed);
      },
      set completed(newValue) {
        completed = newValue;
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
      set deleted(newValue) {
        deleted = newValue;
      },
    };
  };

  // Takes a taskID and returns an array of 2 numbers. [0] is the parent
  // project's projectArray reference. [1] is the task's reference in that
  // project's taskList, unless the task is itself a project, in which case [1]
  // is null
  const getTaskByID = (IDtoCheck) => {
    const IDNumber = Number(IDtoCheck);
    let result = [];
    for (let i = 0; i < projectArray.length; i += 1) {
      const project = projectArray[i];
      if (project.taskID === IDNumber) {
        result = [i, null];
        break;
      }
      if (project.taskList !== undefined) {
        for (let index = 0; index < project.taskList.length; index += 1) {
          const task = project.taskList[index];
          if (task.taskID === IDNumber) {
            result = [i, index];
            break;
          }
        }
      }
    }
    return (result);
  };

  const storeTask = (task) => {
    const taskToStore = JSON.stringify(task);
    const deJSONTask = JSON.parse(taskToStore);
    delete deJSONTask.taskList;
    const taskAsString = JSON.stringify(deJSONTask);
    window.localStorage.setItem(task.taskID, taskAsString);
  };

  const addTask = (task) => {
    const newTask = task;
    let newNewTask;
    if (newTask.isProject === true) {
      newTask.taskID = taskCounter;
      newNewTask = taskFactory(newTask);
      if (!newNewTask.isDemo) {
        projectArray.push(newNewTask);
        projectArray[projectArray.length - 1].taskList = [];
      }
    }
    if (newTask.isProject === false) {
      const parentProject = getTaskByID(newTask.parentTask)[0];
      if (!task.isDemo && projectArray[parentProject].deleted) {
        projectArray[parentProject].deleted = false;
      }
      if (projectArray[parentProject]) {
        if (projectArray[parentProject].taskList === undefined) {
          projectArray[parentProject].taskList = [];
        }
      }

      newTask.taskID = taskCounter;
      newNewTask = taskFactory(newTask);

      if (!newNewTask.isDemo) {
        projectArray[parentProject].taskList.push(newNewTask);
      }
    }
    if (!newNewTask.isDemo) {
      storeTask(newNewTask);
    }
    taskCounter += 1;
    return (newNewTask);
  };

  const addDemo = (() => {
    if (window.localStorage.length === 0) {
      const demo0 = addTask(demo.demoProject1);
      const demo1 = addTask(demo.demoTask1);
      const demo2 = addTask(demo.demoTask2);
      storeTask(demo0);
      storeTask(demo1);
      storeTask(demo2);
    }
  })();

  const retrieveTasksFromStorage = (() => {
    // localStorage.Clear
    const retrievedProjects = [];
    const retrievedTasks = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const item = window.localStorage.getItem(key);
      const itemObject = JSON.parse(item);
      const sentToTaskFactory = taskFactory(itemObject);
      if (sentToTaskFactory.isProject === true) {
        retrievedProjects.push(sentToTaskFactory);
      } else {
        retrievedTasks.push(sentToTaskFactory);
      }
    }
    const sortedProjects = retrievedProjects.sort((a, b) => a.taskID - b.taskID);
    for (let i = 0; i < sortedProjects.length; i += 1) {
      const element = sortedProjects[i];
      projectArray.push(element);
      if (element.taskID >= taskCounter) {
        taskCounter = element.taskID + 1;
      }
    }
    const sortedTasks = retrievedTasks.sort((a, b) => a.taskID - b.taskID);
    for (let i = 0; i < sortedTasks.length; i += 1) {
      const element = sortedTasks[i];
      const parentProj = element.parentTask;
      const parentArrayIndex = getTaskByID(parentProj)[0];
      projectArray[parentArrayIndex].taskList.push(element);
      if (element.taskID === taskCounter) {
        taskCounter = element.taskID + 1;
      }
    }
  })();

  // attr is used to determine which attribute of the destination task
  // should be altered
  const modifyTask = (project, task, attr, newValue) => {
    if (attr === 0) { // i.e. if this is a task title
      if (task === null) {
        projectArray[project].title = newValue;
        storeTask(projectArray[project]);
        return (projectArray[project].title);
      }
      projectArray[project].taskList[task].title = newValue;
      storeTask(projectArray[project].taskList[task]);
      return (projectArray[project].taskList[task].title);
    }
    if (attr === 1) { // i.e. if this is a dueDate
      if (task === null) {
        projectArray[project].dueDate = newValue;
        storeTask(projectArray[project]);
        return (projectArray[project].dueDate);
      }
      projectArray[project].taskList[task].dueDate = newValue;
      storeTask(projectArray[project].taskList[task]);
      return (projectArray[project].taskList[task].dueDate);
    }
    if (attr === 2) { // i.e. if this is a project selector
      const getNewProject = getTaskByID(newValue)[0];
      const taskToMove = projectArray[project].taskList[task];
      taskToMove.parentTask = newValue;
      storeTask(taskToMove);
      if (!projectArray[getNewProject].taskList) {
        projectArray[getNewProject].taskList = [];
      }
      projectArray[getNewProject].taskList.push(taskToMove);
      projectArray[project].taskList.splice(task, 1);
      return (projectArray[getNewProject].taskList);
    }
    if (attr === 3) { // i.e. if this is a priority selector
      if (task === null) {
        projectArray[project].priority = newValue;
        storeTask(projectArray[project]);
        return (projectArray[project].priority);
      }
      projectArray[project].taskList[task].priority = newValue;
      storeTask(projectArray[project].taskList[task]);
      return (projectArray[project].taskList[task].priority);
    }
    if (attr === 4) { // i.e. if this is notes
      if (task === null) {
        projectArray[project].notes = newValue;
        storeTask(projectArray[project]);
        return (projectArray[project].notes);
      }
      projectArray[project].taskList[task].notes = newValue;
      storeTask(projectArray[project].taskList[task]);
      return (projectArray[project].taskList[task].notes);
    }
    if (attr === 5) { // i.e. toggle complete
      if (task === null) {
        projectArray[project].completed = !projectArray[project].completed;
        storeTask(projectArray[project]);
        return (projectArray[project].completed);
      }
      projectArray[project].taskList[task].completed = !projectArray[project].taskList[task].completed;
      storeTask(projectArray[project].taskList[task]);
      return (projectArray[project].taskList[task].completed);
    }
    if (attr === 6) { // i.e. delete task
      if (task === null) { // i.e. if the task to be deleted is a project
        projectArray[project].deleted = !projectArray[project].deleted;
        storeTask(projectArray[project]);
        const projectTasks = projectArray[project].taskList;
        if (projectTasks !== undefined) {
          for (let i = 0; i < projectTasks.length; i += 1) {
            const element = projectTasks[i];
            element.deleted = true;
          }
        }
        return (projectArray[project].deleted);
      }
      projectArray[project].taskList[task].deleted = !projectArray[project].taskList[task].deleted;
      storeTask(projectArray[project].taskList[task]);
      return (projectArray[project].taskList[task].deleted);
    }
  };

  return {
    returnProjectArray, getTaskByID, addTask, taskFactory, modifyTask, returnEmptyTask, storeTask,
  };
})();

export { tasks };
