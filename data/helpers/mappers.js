module.exports = {
  actionToBody,
};

function actionToBody(body) {
  return {
    ...body,
    completed: intToBoolean(body.completed),
  };
}

function intToBoolean(int) {
  return int === 1 ? true : false;
}