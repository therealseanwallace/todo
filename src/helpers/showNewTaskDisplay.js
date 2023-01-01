function showNewTaskDisplay() {
  this.setState({
    ...this.state,
    showNewTaskDisplay: !this.state.showNewTaskDisplay,
  });
};

export default showNewTaskDisplay;