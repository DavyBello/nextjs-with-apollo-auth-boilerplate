import cookie from 'cookie'

// Store the token in cookie
export default token => {
  document.cookie = cookie.serialize('token', token, {
    path: '/',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  })
}
