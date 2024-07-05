const inputButton = document.querySelector(".ageDateOfBirthInput");
const calculateButton = document.querySelector(".calculateButton")
const calculateResult = document.querySelector(".ageResult")

calculateButton.addEventListener("click", () => {

    if (inputButton.value === "") {
        alert("Enter your date of birth : ");
    }
    else {
        console.log("Input ", inputButton.value)
        const dateOfBirth = new Date(inputButton.value)

        console.log("dateOfBirth ", dateOfBirth.value)
        const dateOfBirthYear = dateOfBirth.getFullYear()

        console.log("dateOfBirthYear ", dateOfBirthYear)

        const currentDate = new Date()
        console.log("currentDate  ", currentDate)

        const currentYear = currentDate.getFullYear()
        console.log("currentYear  ", currentYear)

        const age = currentYear - dateOfBirthYear
        console.log("age  ", age)

        calculateResult.innerHTML = `your age is ${age}`

    }

});
