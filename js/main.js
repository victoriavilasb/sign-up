document.addEventListener("DOMContentLoaded", function() { 
  const btn = document.querySelector('#btn-free-trial');
  btn.addEventListener('click', () => {
    let data = [ ...document.getElementsByTagName('input') ]
    let key
    data.forEach((element) => {
      key = element.parentNode.id
      const mail_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const error_message = document.querySelector(`#${key} #error-message`).style
      const warning_icon = document.querySelector(`#${key} .warning`).style
      const form_style = document.querySelector(`#${key} .form-group`).style
      if(!element.value.trim()) {
        error_message.display = "block"
        form_style.border = "2px solid hsl(0, 100%, 74%)"
        form_style.color =  "hsl(0, 100%, 74%)"
        warning_icon.display = "block"
      } else if (element.parentNode.id == "email" && !element.value.match(mail_re)){
        error_message.display = "block"
        form_style.border = "2px solid hsl(0, 100%, 74%)"
        form_style.color =  "hsl(0, 100%, 74%)"
        warning_icon.display = "block"
      } else {
        error_message.display = "none"
        form_style.border = "1px solid hsl(246, 25%, 77%, 50%)"
        form_style.color =  "#000"
        warning_icon.display = "none"
      }
    });
  })
});