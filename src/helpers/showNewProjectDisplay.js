function showNewProjectDisplay() {
  this.setState({
    ...this.state,
    showNewProjectDisplay: !this.state.showNewProjectDisplay,
  });
};

export default showNewProjectDisplay;