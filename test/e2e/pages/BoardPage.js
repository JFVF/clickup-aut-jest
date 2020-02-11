class BoardPage {
  
  get boardTitle() { return $('.cu-panel-board__main-title'); }
 
  statusColumn(status) { return $(` //div[contains(text(), "${status}")]`); }

  createTaskButton(index) { return $(`(//div[contains(@class, 'cu-panel-board__plus')])[${index}]`); }
  
  get taskTitle() { return $('.cu-panel-board__clickable-name'); }

  get statusNameInput() { return $('//input[@placeholder=\'STATUS NAME\']'); }
 
}

module.exports = new BoardPage();
