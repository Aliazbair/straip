module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e0cc2c640ec7c6465cb6210cff18ab8'),
  },
});
