const colorPick = document.getElementById('colorPick')
const mode = document.getElementById('mode')
const generate = document.getElementById('generate-btn')

function render() {
    const hexCode = colorPick.value.slice(1, 7);
    const url = `https://www.thecolorapi.com/scheme?hex=${hexCode}&format=json&mode=${mode.value}&count=5`;


    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
                document.getElementById(`rec-color${i + 1}`).style.background = data.colors[`${i}`].hex.value
                document.getElementById(`hexCode${i + 1}`).textContent = data.colors[`${i}`].hex.value
            }
        })
}

document.addEventListener('DOMContentLoaded', function() {
    generate.addEventListener('click', render);
});