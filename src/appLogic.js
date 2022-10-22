import { demo } from './objects';
export { tasks };

const tasks = (() => {
  const projectArray = [];
  let taskCounter = 1;
  let projectCounter = 1;

  const taskFactory = (task) => {
    let {
      title, dueDate, priority, project, notes, taskList, type, isProject, completed, taskID,
    } = task;
    console.log('taskFactory active. taskList is', taskList);
    return {
      title,
      dueDate,
      priority,
      project,
      notes,
      type,
      isProject,
      completed,
      taskID,
      taskList,
    };
  };

  const returnEmptyTask = (task) => {
    const {
      title, dueDate, priority, project, notes, type, isProject, completed, taskID,
    } = task;
    let { taskList } = task;
    console.log('taskList is', taskList, '- but WHY?');
    taskList = [];
    return {
      title, dueDate, priority, project, notes, taskList, type, isProject, completed, taskID,
    };
  };

  const addTask = (task) => {
    const newTask = task;
    console.log('addTask!!! newTask is', newTask);
    if (newTask.type === 'project') {
      console.log('adding project! new project is', newTask);
      newTask.project = projectCounter;
      newTask.taskID = taskCounter;
      const newNewTask = taskFactory(newTask);
      projectArray.push(newNewTask);
      projectCounter += 1;
      taskCounter += 1;
      console.log('PROJECT ADDED by addTask. projectArray is', projectArray);
    }
    if (newTask.type === 'task') {
      console.log('addTask adding task');
      const newProjectRef = newTask.project;
      console.log('newProjectRef is', newProjectRef);
      newTask.taskID = taskCounter;
      console.log('making new task. project is', newTask.project);
      console.log('projectArray[newProjectRef] is', projectArray[newProjectRef]);
      const newNewTask = taskFactory(newTask);
      projectArray[newProjectRef].taskList.push(newNewTask);
      console.log('TASK ADDED by addTask. projectArray is', projectArray);
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
      //console.log('element is', element);
    }
    return (result);
  };
  
  // Attr is used to determine which attribute of the destination task
  // should be altered
  const modifyTask = (project, task, attr, newValue) => {
    //console.log('modifying task! arguments are: ', project, task, attr, newValue);
    if (attr === 0) { // i.e. if this is a task title
      //console.log('TITLE!!!!');
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
      //console.log('moving task! projectArray=', projectArray);
      projectArray[project].taskList[task].project = newValue;
      projectArray[newValue].taskList.push(projectArray[project].taskList[task]);
      
      //console.log('task moved! projectArray=', projectArray);
      return (projectArray[project].taskList[task].project);
    }
    if (attr === 4) {
      //console.log('NOTES!!!');
      if (task === null) {
        //console.log('task is null!');
        projectArray[project].notes = newValue;
        return (projectArray[project].notes);
      }
      //console.log('task! projectArray[project].taskList[task].notes is', projectArray[project].taskList[task].notes);
      projectArray[project].taskList[task].notes = newValue;
      //console.log('projectArray[project].taskList[task].notes is now', projectArray[project].taskList[task].notes);
      return (projectArray[project].taskList[task].notes);
    }
    
    
  };

  const returnProjectArray = () => { return (projectArray) }

  const deleteTask = (project, task) => {
    // this should not actually remove the task from the array, but rather set a
    // 'deleted' attribute. Tasks will then be available for undeletion, trash bin,
    // etc. in future version.
  };
  
  
  
  return {
    returnProjectArray, getTaskByID, addTask, taskFactory, modifyTask, returnEmptyTask,
  };
})();


/*
const oldTasks = (() => {
  const projectArray = [[]];
  const addProject = (newProject) => {
    if (newProject !== undefined) {
      projectArray.push([newProject]);
    } else {
      projectArray.push([]);
    }
  };
  const addTask = (newTask, project) => {
    // console.log('addtask active, projectArray, project are', projectArray, ',', project);
    if (projectArray[project] === undefined) {
      addProject();
      projectArray[projectArray.length - 1].push(newTask);
    } else { projectArray[project].push(newTask); }
  };

  const deleteTask = (project, task) => {
    console.log('project is', projectArray[project][task]);
    try {
      projectArray[project].pop(task);
    } catch {console.log("task doesn't exist");
    }
  };

  const returnProjects = projectArray;
  const getObjectFromArray = (id) => {
    for (let i = 0; i < projectArray.length; i++) {
      const idCompare = Number(id);
      const project = projectArray[i];
      for (let index = 0; index < project.length; index++) {
        const element = project[index];
        const elementCompare = Number(element.taskID);
        if (elementCompare === idCompare) {
          return (element);
        }
      }
    }
  };

  const getIndex = (project, elementID) => {
    const elementIDCompare = Number(elementID);
    const index = projectArray[project].findIndex((item) => item.taskID === elementIDCompare);
    return (index);
  };

  const changeProject = (project, elementID, newProject) => {
    const index = projectArray[project].findIndex((item) => item.taskID === elementID);
    const poppedObject = projectArray[project].pop(index);
    projectArray[newProject].push(poppedObject);
  };

  const changeTask = (project, elementID, newValue, attribute) => {
    const index = getIndex(project, elementID);
    if (attribute === 'title') {
      projectArray[project][index].title = newValue;
    }
    if (attribute === 'date') {
      projectArray[project][index].dueDate = newValue;
    }
    if (attribute === 'notes') {
      projectArray[project][index].notes = newValue;
    }
  };

  return {
    addTask,
    addProject,
    returnProjects,
    getObjectFromArray,
    changeProject,
    changeTask,
    deleteTask,
  };
})();


*/