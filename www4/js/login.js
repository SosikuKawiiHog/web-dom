let sign = document.getElementById("loginin")
let signin = document.createElement("button")

signin.textContent = "I already have an account!"
signin.id = "test"
signin.onclick = function(){
    let form = document.createElement("form")
    let name = document.createElement("input")
    name.id = "name2"
    name.setAttribute("required", "")
    name.setAttribute("maxlength", "25")
    name.setAttribute("pattern", "[a-zA-Z]+")
    name.type = "name"
    name.placeholder = "Your Nickname"
    let em = document.createElement("input")
    em.type = "email"
    em.placeholder = "Email"
    em.setAttribute("required", "")
    em.id = "email2"
    let pw = document.createElement("input")
    pw.type = "password"
    pw.placeholder = "Password"
    pw.setAttribute("required", "")
    pw.id = "password2"
    pw.setAttribute("maxlength", "25")
    let submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Submit"
    submit.id = "submit2"
    form.appendChild(name)
    form.appendChild(em)
    form.appendChild(pw)
    form.appendChild(submit)
    sign.appendChild(form)
    sign.removeChild(signin)
}
sign.appendChild(signin)
sign.appendChild(bruh)