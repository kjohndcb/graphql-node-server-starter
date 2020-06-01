import shortid from 'shortid';
import db from '../db';

export default {
  Query: {
    users: () => db.get('users').value(),
    user: (_, { id }) => db.get('users').find({ id }).value(),
  },
  Mutation: {
    createUser: (_, { name }) => {
      const user = {
        id: shortid.generate(),
        name,
      };
      db.get('users').push(user).write();
      return user;
    },
    updateUser: (_, { id, name }) => {
      if (!id) return;
      const users = db.get('users');
      users.find({ id }).assign({ name }).write();
      return users.find({ id }).value();
    },
    deleteUser: (_, { id }) => {
      if (!id) return;
      const users = db.get('users');
      let user = users.find({ id }).value();
      users.remove({ id }).write();
      return user;
    },
  },
};
