const demo = {
  demoProject1: {
    title: 'Default project',
    dueDate: '2021-12-31',
    priority: 1,
    isComplete: false,
    notes: '',
    isDemo: true,
    isProject: true,
    parent: null,
  },
  demoTask1: {
    title: 'Wash the dishes',
    parent: 0,
    dueDate: '2021-12-30',
    priority: 2,
    isComplete: false,
    notes: 'I hate dishes',
    isDemo: true,
    isProject: false,
  },
  demoTask2: {
    title: 'Cook dinner',
    parent: 0,
    dueDate: '2021-12-31',
    priority: 1,
    isComplete: false,
    notes: 'I love cooking',
    isDemo: true,
    isProject: false,
  },
};

export default demo;
