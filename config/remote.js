module.exports = {
  port: 80,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://176.122.138.127:27017/myblog'
}
