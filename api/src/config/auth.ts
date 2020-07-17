export default {
  jwt: {
    secret: process.env.APP_SECRET || 'def',
    expiresIn: '1d',
  },
};
