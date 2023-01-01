function changeProject(e) {
  this.setState({
    ...this.state,
    selectedProject: Number(e.target.selectedOptions[0].dataset.taskid),
  });
};

export default changeProject;