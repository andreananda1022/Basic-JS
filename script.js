const exitButton = (container, card, listApps) => {
  const button = document.createElement("div")
  button.className = "absolute top-16 left-16 text-white pointer bg-dark-glass rounded-full flex justify-center items-center w-32 h-32"
  button.textContent = "X"
  card.appendChild(button)
  button.addEventListener("click", function () {
    listApps.classList.remove("hidden")
    container.remove()
  })
}

function colorPickerApp() {
  const listApps = document.getElementById("listApps")
  listApps.classList.add("hidden")
  const container = document.createElement("section")
  container.className = "w-full h-screen flex justify-center items-center absolute z-2"
  document.body.insertBefore(container, listApps)
  const card = document.createElement("div")
  card.className = "w-500 bg-dark-glass p-32 rounded flex flex-col justify-center items-center shadow relative"
  container.appendChild(card)
  const appTitle = document.createElement("h1")
  appTitle.className = "mb-64 text-white"
  appTitle.textContent = "Color Picker"
  card.appendChild(appTitle)
  const colorInput = document.createElement("input")
  colorInput.type = "color"
  colorInput.className = "border-none outline-none pointer p-0"
  card.appendChild(colorInput)
  const colorCodeDisplay = document.createElement("p")
  colorCodeDisplay.className = "tracking-wide text-white"
  colorCodeDisplay.textContent = "#ffffff"
  card.appendChild(colorCodeDisplay)
  const colorDisplay = document.createElement("div")
  colorDisplay.className = "w-400 h-300 border rounded transition"
  card.appendChild(colorDisplay)
  colorInput.addEventListener("input", function (event) {
    let selectedColor = event.target.value
    colorCodeDisplay.textContent = selectedColor
    colorDisplay.style.backgroundColor = selectedColor
  })
  exitButton(container, card, listApps)
}

function quoteGeneratorApp() {
  const listApps = document.getElementById("listApps")
  listApps.classList.add("hidden")
  const container = document.createElement("section")
  container.className = "w-full h-screen flex justify-center items-center absolute z-2"
  document.body.insertBefore(container, listApps)
  const card = document.createElement("div")
  card.className = "w-500 bg-dark-glass p-32 rounded flex flex-col justify-center items-center shadow relative"
  container.appendChild(card)
  const appTitle = document.createElement("h1")
  appTitle.className = "mb-64 text-white"
  appTitle.textContent = "Quote Generator"
  card.appendChild(appTitle)
  const quoteText = document.createElement("p")
  quoteText.className = "text-white text-xl text-center"
  quoteText.textContent = "Click the button to generate quote"
  card.appendChild(quoteText)
  const quoteAuthor = document.createElement("p")
  quoteAuthor.className = "text-white text-xl text-center mb-64"
  quoteAuthor.textContent = "~ Author"
  card.appendChild(quoteAuthor)
  const generateButton = document.createElement("button")
  generateButton.className = "pointer border-none outline-none p-8 rounded"
  generateButton.textContent = "Generate"
  card.appendChild(generateButton)
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" }
  ]
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    quoteText.textContent = `"${randomQuote.text}"`
    quoteAuthor.textContent = `~ ${randomQuote.author}`
  }
  generateButton.addEventListener("click", generateQuote)
  exitButton(container, card, listApps)
}

function countdownTimerApp() {
  const listApps = document.getElementById("listApps")
  listApps.classList.add("hidden")
  const container = document.createElement("section")
  container.className = "w-full h-screen flex justify-center items-center absolute z-2"
  document.body.insertBefore(container, listApps)
  const card = document.createElement("div")
  card.className = "w-500 bg-dark-glass p-32 rounded flex flex-col justify-center items-center shadow relative"
  container.appendChild(card)
  const appTitle = document.createElement("h1")
  appTitle.className = "mb-64 text-white"
  appTitle.textContent = "Countdown Timer"
  card.appendChild(appTitle)
  const displayCountdown = document.createElement("div")
  displayCountdown.className = "flex justify-center items-center gap-16 mb-32"
  card.appendChild(displayCountdown)
  const displayDay = document.createElement("p")
  displayDay.textContent = "00 Days"
  displayDay.className = "text-white text-xl"
  displayCountdown.appendChild(displayDay)
  const displayHours = document.createElement("p")
  displayHours.textContent = "00 Hours"
  displayHours.className = "text-white text-xl"
  displayCountdown.appendChild(displayHours)
  const displayMinutes = document.createElement("p")
  displayMinutes.textContent = "00 Minutes"
  displayMinutes.className = "text-white text-xl"
  displayCountdown.appendChild(displayMinutes)
  const displaySeconds = document.createElement("p")
  displaySeconds.textContent = "00 Seconds"
  displaySeconds.className = "text-white text-xl"
  displayCountdown.appendChild(displaySeconds)
  const inputCountdown = document.createElement("div")
  inputCountdown.className = "flex justify-center items-center gap-16 mb-32"
  card.appendChild(inputCountdown)
  const inputHours = document.createElement("input")
  inputHours.type = "number"
  inputHours.className = "bg-none text-white border outline-none p-8 rounded w-64"
  inputHours.placeholder = "00"
  inputCountdown.appendChild(inputHours)
  const inputMinutes = document.createElement("input")
  inputMinutes.type = "number"
  inputMinutes.className = "bg-none text-white border outline-none p-8 rounded w-64"
  inputMinutes.placeholder = "00"
  inputCountdown.appendChild(inputMinutes)
  const inputSeconds = document.createElement("input")
  inputSeconds.type = "number"
  inputSeconds.className = "bg-none text-white border outline-none p-8 rounded w-64"
  inputSeconds.placeholder = "00"
  inputCountdown.appendChild(inputSeconds)
  const startButton = document.createElement("button")
  startButton.type = "button"
  startButton.textContent = "Start"
  startButton.className = "p-8 outline-none border-none pointer"
  card.appendChild(startButton)
  startButton.addEventListener("click", () => {
    startButton.textContent = "Stop"
    startCountdown()
  })
  function startCountdown() {
    let hours = parseInt(inputHours.value) || 0
    let minutes = parseInt(inputMinutes.value) || 0
    let seconds = parseInt(inputSeconds.value) || 0
    let totalTime = hours * 3600 + minutes * 60 + seconds
    if (totalTime <= 0) {
      alert("Please enter a valid time.")
      return
    }
    inputHours.value = ""
    inputMinutes.value = ""
    inputSeconds.value = ""
    countdownInterval = setInterval(() => {
      const days = Math.floor(totalTime / 86400)
      const hours = Math.floor(totalTime % 86400 / 3600)
      const minutes = Math.floor(totalTime % 3600 / 60)
      const seconds = Math.floor(totalTime % 60)
      displayDay.textContent = days.toString().padStart(2, "0")
      displayHours.textContent = hours.toString().padStart(2, "0")
      displayMinutes.textContent = minutes.toString().padStart(2, "0")
      displaySeconds.textContent = seconds.toString().padStart(2, "0")
      totalTime--
      if (totalTime < 0) {
        alert("Time is up!!")
        clearInterval(countdownInterval)
      }
    }, 1000)

  }
  exitButton(container, card, listApps)
}