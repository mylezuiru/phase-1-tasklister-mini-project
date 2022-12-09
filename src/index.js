document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.addEventListener("DOMContentLoaded", (e) => {
  form = document.querySelector('form')
  form.addEventListener('submit', addToDo)

  function addToDo(event){
            event.preventDefault()
            const inputValue = form.querySelector('#new-task-description').value
            const p = document.createElement('p')
            const btn = document.createElement('button')
            btn.innerText = 'x'
            p.innerText = `${inputValue} `
            form.appendChild(p).appendChild(btn)
            btn.addEventListener('click', () => {
              p.remove()
            })
            form.reset()
  }



});
