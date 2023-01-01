function getTaskIndexByID(id) {
  const idNum = Number(id);
  return this.state.tasks.findIndex((task) => {
    return task.taskID === idNum;
  });
}

export default getTaskIndexByID;