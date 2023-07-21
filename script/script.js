const validateForm = formSelector => {
    const formElement = document.querySelector(formSelector)

    const validationOptions = [
        {
            attribute: 'ischaracter',
            isValid: input => {
                const patternRegex = new RegExp(/^[a-zA-Z ]{2,30}$/)
                return patternRegex.test(input.value)
            },
            errorMessage: (input, errText) => `${errText.placeholder}is not a character, or less than 2 or greater than 30 characters` 
        },
        {
            attribute: 'emailvalid',
            isValid: input => {
                const patternRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                return patternRegex.test(input.value)
            },
            errorMessage: (input, errText) => `${errText.placeholder} is an invalid format`   
        },
        {
            attribute: 'required',
            isValid: input => input.value.trim() !== '',
            errorMessage: (input, errText) => `${errText.placeholder} is empty` 
        },
    ]

    const validateSingleGroup = formGroup => {
        const input = formGroup.querySelector('input')
        const errText = formGroup.querySelector('#input')
        const errIcon = formGroup.querySelector('#errorIcon')
        const errMssg = formGroup.querySelector('#error')
        
        let formError = false
        for(const option of validationOptions){
            if(input.hasAttribute(option.attribute) && !option.isValid(input)){
                input.classList.remove('border-gray-400')
                input.classList.add('border-componentRed')
                errMssg.classList.remove('hidden')
                errIcon.classList.remove('hidden')
                errMssg.textContent = option.errorMessage(input, errText)
                formError = true;
            }
        }
        if(!formError){
            input.classList.add('border-gray-400')
            input.classList.remove('border-componentRed')
            errMssg.classList.add('hidden')
            errIcon.classList.add('hidden')
            errMssg.textContent = ''
        }

        return !formError
    }

    formElement.setAttribute('novalidate', '')
    
    Array.from(formElement.elements).forEach(element =>{
        element.addEventListener('blur', event=>{
            validateSingleGroup(event.srcElement.parentElement)
        })
    })

    const validateAllForm = formToValidate => {
        const formGroups = Array.from(formToValidate.querySelectorAll('.formGroup'))
        
        return formGroups.every(formGroup => validateSingleGroup(formGroup))
    }

    formElement.addEventListener('submit', (event) => {
        const formValid = validateAllForm(formElement)

        if(!formValid){
            event.preventDefault()
        }else{
            console.log('form is valid')
        }
    })
}

validateForm('#regForm')