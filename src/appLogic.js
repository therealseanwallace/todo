import { demo } from './objects';
export { tasks, constructNewTask };

const tasks = (() => {
  const projectArray = [];
  let taskCounter = 1;
  const taskFactory = (task) => {
    let {
      title, dueDate, priority, project, notes, taskList,
    } = task;
    const { type, taskID } = task;
    taskCounter += 1;
    let completed = false;
    let altered = false;
    const toggleComplete = () => {
      completed = !completed;
      return (completed);
    };
    const toggleAltered = () => {
      altered = !altered;
      return (altered);
    };
    const newTask = (taskToAdd) => {
      taskList.push(taskToAdd);
    };
    return {
      toggleComplete,
      toggleAltered,
      newTask,
      get title() { return title; },
      set title(newTitle) {
        title = newTitle;
      },
      get dueDate() { return dueDate; },
      set dueDate(newDate) {
        dueDate = newDate;
      },
      get priority() { return priority; },
      set priority(newPrio) {
        priority = newPrio;
      },
      get project() { return project; },
      set project(newProj) {
        project = newProj;
      },
      get notes() { return notes; },
      set notes(newNotes) {
        notes = newNotes;
      },
      get taskList() { return taskList; },
      get taskID() { return taskID; },
      get type() { return type; },
    };
  };

  const addTask = (task) => {
    const newTask = task;
    console.log('newTask is', newTask);
    newTask.taskID = taskCounter;
    const newTaskObject = taskFactory(task);
    if (newTask.type === 'project') {
      projectArray.push(newTaskObject);
    }
    if (newTask.type === 'task') {
      const newProjectRef = newTask.project;
      console.log(newProjectRef);
      console.log(projectArray[newProjectRef]);
      projectArray[newProjectRef].newTask(newTaskObject);
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
    console.log('projectArray post-demo push is', projectArray);
  })();

  const getObjectByID = () => {
    for (let i = 0; i < projectArray.length; i++) {
      const element = projectArray[i];
      console.log('element is', element);
    }
  };

  const returnProjectArray = projectArray;

  const deleteTask = () => {

  };

  return { returnProjectArray, getObjectByID, addTask, taskFactory };
})();

const constructNewTask = (() => {
  
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