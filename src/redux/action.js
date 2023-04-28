export const signUp = (data) => {
    console.log("action is called", data)
    return {
        type: 'signup',
        data: data
    }
}