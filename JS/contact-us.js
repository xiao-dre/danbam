// form
var form = document.forms["register-form"]

// form components
var first_name = form["first-name"]
var last_name = form["last-name"]
var gender = form["gender"]
var locations = form["location"]
var subject = form["subject"]

// validations
form.addEventListener("submit", function(e) {
    var error = false

    if(first_name.value.length < 7) {
        alert("First Name must be at least 7 characters!")
        error = true
        e.preventDefault()
    }

    if(last_name.value.length < 7) {
        alert("Last Name must be at least 7 characters!")
        error = true
        e.preventDefault()
    }

    if(gender.value == "" && error == false) {
        alert("Please choose a gender")
        error = true
        e.preventDefault()
    }

    if(locations.value == "" && error == false) {
        alert("Please choose a location")
        error = true
        e.preventDefault()
    }

    if(subject.value.length < 1) {
        alert("Subject cannot be empty!")
        error = true
        e.preventDefault()
    }

})