module.exports = {
  actionToBody,
  actionToBodyTask
};

function actionToBody(body) {
  return {
    ...body,
    completed: intToBoolean(body.completed),
  };
}

function actionToBodyTask(body) {
  return {
    ...body,
    task_completed: intToBoolean(body.task_completed),
  };
}

function intToBoolean(int) {
  return int === 1 ? true : false;
}