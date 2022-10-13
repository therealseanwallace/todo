const builder = (element, parent, classes, type, value, text, id, placeholder, source) => {
  // Builds and appends DOM nodes according to supplied arguments
  // console.log('parent is', parent);
  const selectParent = document.querySelector(parent);
  const makeComponent = document.createElement(element);
  if (classes !== undefined) {
    makeComponent.classList.add(classes);
    if (classes === 'tab' || classes === 'new-task-btn') {
      makeComponent.classList.add('button');
    }
  }
  if (type !== undefined) {
    makeComponent.type = type;
  }
  if (value !== undefined) {
    makeComponent.value = value;
  }
  if (text !== undefined) {
    makeComponent.textContent = text;
  }
  if (id !== undefined) {
    makeComponent.id = id;
  }
  if (placeholder !== undefined) {
    makeComponent.placeholder = placeholder;
  }
  if (source !== undefined) {
    if (source === 'new-task') {
      makeComponent.setAttribute('data-source', 'new-task');
    }
    if (source === 'new-project') {
      makeComponent.setAttribute('data-source', 'new-project');
    }
  }
  selectParent.append(makeComponent);
};

const clearDisplay = () => {
  const selectDisplay = document.querySelector('.display');
  selectDisplay.innerHTML = '';
};

export { builder, clearDisplay };
