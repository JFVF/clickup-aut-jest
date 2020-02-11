class BoardPage {

  get boardTitle() { return $('.cu-panel-board__main-title'); }

  statusColumn(status) { return $(` //div[contains(text(), "${status}")]`); }

  createTaskButton(index) { return $(`(//div[contains(@class, 'cu-panel-board__plus')])[${index}]`); }

  get statusNameInput() { return $('//input[@placeholder=\'STATUS NAME\']'); }

  get nameTaskByListTabInput() { return ('input[class = "cu-task-row-new__input"]'); }

  get nameTask() { return ('cu-task-row-main[class = "cu-task-row-main ng-star-inserted"]'); }
}

module.exports = new BoardPage();
