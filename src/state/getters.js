const getters={
    token: state=>state.user.token,
    username: state=>state.user.username,
    role: state=>state.user.role,
    sidebar: state=>state.app.sidebar,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    language: state => state.app.language
}
export default getters