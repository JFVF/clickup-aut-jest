const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  createUser:() => {
    const user = {}
      user['firstName'] = 'juan',
      user['lastName'] = 'perez';
      return user;
    }
  };

module.exports = functions;
