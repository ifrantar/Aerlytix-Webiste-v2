let formElem = document.querySelector("form");
console.log(formElem,"ivan");
if (formElem.addEventListener("submit", handleSubmit)) {
  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('requestDemo');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }
}