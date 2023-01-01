function getSelectedProject() {
  const project = this.getTaskByID(this.state.selectedProject);
  return project;
};

export default getSelectedProject;