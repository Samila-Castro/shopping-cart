export const passwordValidate = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?!.*\d{2,})(?!.*[a-zA-Z]{2,})[0-9a-zA-Z$*&@#]{8,16}$/
    return !!password.match(regex)

};