export const logIn = (data) => {
    console.log("action is called", data)
    return {
        type: 'login',
        data: data
    }
}