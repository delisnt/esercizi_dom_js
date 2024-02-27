const addProduct = () => { 
  const input = document.getElementById('input_text').value;
  const ul = document.querySelector("ul")
  const task = document.createElement("li")
  const checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  task.textContent = input
  ul.appendChild(task)
  task.appendChild(checkbox)
};
