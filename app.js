const btn = document.querySelector("button");
const roll = document.querySelector("#dice")
const faces = document.querySelector("#faces")
const divbar = document.querySelector(".dicebar")
const h = document.querySelector(".h");


btn.addEventListener("click", (e) => {
    e.preventDefault();


    const barfar = document.querySelectorAll(".diceinfo")
    const h2bars = document.querySelectorAll(".hai")
    console.log(h2bars)

    for (let i = 0; i < barfar.length; i++) {
        barfar[i].remove()
    }
    for (let i = 0; i < h2bars.length; i++) {
        h2bars[i].remove()
    }


    let count = 0;
    const totaldice = parseInt(roll.value);
    const totalfaces = parseInt(faces.value);
    for (i = 1; i <= totaldice; i++) {
        const div = document.createElement("div")
        const p = document.createElement("p")

        const rand = Math.floor(Math.random() * totalfaces) + 1;
        count += rand;




        p.innerHTML = `<p>dice ${i}  <br> value ${rand}</p>`;

        div.classList.add("diceinfo")
        div.appendChild(p)
        divbar.appendChild(div)



    }
    const h2 = document.createElement("h2");
    h2.classList.add("hai")
    h2.innerHTML = `Total number of faces on dice <span class="a">${totalfaces}</span><br>
                    Total number of dices roller <span class="a">${totaldice}</span><br>
                    Total count of dice is <span class="a">${count}</span>`
    h.appendChild(h2)
    roll.value = "1",
        faces.value = "4"

})