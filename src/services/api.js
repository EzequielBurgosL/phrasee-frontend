const db = {
  users: {
    'test.user@phrasee.co': 'testPassword1'
  }
}

export const getUserFromDb = async (user) => {
  const { username = '', password = '' } = user;
  let result;

  if (db.users[username] && db.users[username] === password) {
    result = {
      status: 200,
      message: 'login successful',
      body: user
    };
  } else {
    result = {
      status: 401,
      message: 'user was not found',
      body: {}
    };
  }

  return result;
};