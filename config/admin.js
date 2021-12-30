module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9cd70607ce8a3c7409ffe538b1c21c7b'),
  },
});
