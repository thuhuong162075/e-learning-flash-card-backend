const authService = require('../services/auth')
const register = async (req, res) => {
    const { email, password, againPassword, username, role } = req.body
    const result = await authService.register({ email, password, againPassword, username, role })
    return res.send(result)
}
const login = async (req, res) => {
    const { email, password } = req.body
    const result = await authService.login({ email, password })
    return res.send(result)
}

module.exports = {
    register,
    login
}
