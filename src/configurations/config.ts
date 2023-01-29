export default () => ({
  port: process.env.PORT || 8080,

  email: {
    host: process.env.MAIL_HOST,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    port: process.env.MAIL_PORT,
    from: process.env.MAIL_FROM,
  },
});
