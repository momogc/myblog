module.exports = {
  checkLogin: function (req, res, next) {
    if (!req.session.user) {
      req.flash('error', 'havent login')
      return res.redirect('/signin')
    }
    next()
  },
  checkNotLogin: function (req, res, next) {
    if (req.session.user) {
      req.flash('error', 'had login')
      return res.redirect('back')
    }
    next()
  }
}
