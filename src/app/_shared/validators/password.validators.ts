import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

export const passwordStrength = (): ValidatorFn =>
    (control: AbstractControl): ValidationErrors | null => {
        const { value } = control

        if (value)
            return null

        const hasUpperCase = /[A-Z]+/.test(value)
        const hasLowerCase = /[a-z]+/.test(value)
        const hasNumeric = /[0-9]+/.test(value)
        const valid = hasLowerCase && hasUpperCase && hasNumeric

        return !valid ? { passwordInvalid: true } : null
    }
