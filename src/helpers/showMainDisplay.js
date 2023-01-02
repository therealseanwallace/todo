function showMainDisplay() {
  this.setState({
    ...this.state,
    showNewTaskDisplay: false,
    showNewProjectDisplay: false,
  });
}

export default showMainDisplay;