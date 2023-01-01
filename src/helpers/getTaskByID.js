function getTaskByID(id) {
  const idNum = Number(id);
  return this.state.tasks.find((task) => {
    return task.taskID === idNum;
  });
}

export default getTaskByID;