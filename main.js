const form = document.querySelector('form');
const log = document.getElementById('message');
const input =document.querySelector('input');
form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    event.preventDefault();
    log.textContent = `Loading...`;
    fetch(`/weather?location=${input.value}`)
    .then((response)=>{
        return response.json()
    }).then(data=>{
        console.log(data);
        log.textContent = `${data.weather}`;
    })
  }