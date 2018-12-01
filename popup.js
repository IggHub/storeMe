const texti = document.getElementById("texti")
const buttoni = document.getElementById("buttoni")
const button_geti = document.getElementById("button_geti")

buttoni.addEventListener("click", () => {
    chrome.storage.sync.set({"awesomeKey": texti.value}, function() {
        alert('Value is set to ' + texti.value);
    });
})

button_geti.addEventListener("click", () => {
    chrome.storage.sync.get(["awesomeKey"], (result) => {
        alert("Key is " + result.awesomeKey)
    })
})
