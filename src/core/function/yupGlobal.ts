import * as yup from 'yup'

declare module 'yup' {
  interface StringSchema {
    password(message: string): StringSchema
  }
}

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/
const REGEX_ONLY_NUMBER = /^\d+$/

yup.addMethod(yup.string, 'password', function password(message) {
  return this.matches(REGEX_PASSWORD, { message, excludeEmptyString: true })
})

yup.addMethod(yup.string, 'onlyNumber', function onlyNumber(message) {
  return this.matches(REGEX_ONLY_NUMBER, { message, excludeEmptyString: true })
})

export default yup
