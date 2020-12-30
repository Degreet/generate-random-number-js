generateNumberButton.onclick = () => {
  const number = Math.floor(Math.random() * 90 + 10)

  generateNumberButton.classList.add("success")
  setTimeout(() =>
    generateNumberButton.classList.remove("success"), 500)

  resultSpan.innerText = number
}