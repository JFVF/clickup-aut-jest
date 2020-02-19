class BoardPage {

  get boardTitle() { return $('.cu-panel-board__main-title'); }

  statusColumn(status) { return $(` //div[contains(text(), "${status}")]`); }

  createTaskButton(index) { return $(`(//div[contains(@class, 'cu-panel-board__plus')])[${index}]`); }

  get statusNameInput() { return $('//input[@placeholder=\'STATUS NAME\']'); }

  get nameTaskByListTabInput() { return ('input[class = "cu-task-row-new__input"]'); }

  get nameTask() { return ('cu-task-row-main[class = "cu-task-row-main ng-star-inserted"]'); }

  get taskCard() { return ('div[class = cu-panel-board__header-container]'); }

  get headerBoard() { return ('div[class = cu-panel-board__status-info]'); }

  get doneTaskIcon() { return ('div[class = \'done-task-btn__icon icon\']'); }
}

module.exports = new BoardPage();
