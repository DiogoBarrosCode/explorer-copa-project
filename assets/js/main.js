function createGame(player1, initialsP1, group, hour, player2, initialsP2) {
    return `
    
        <li>
            <div class="player">
                <img src="./assets/svg/icon-${player1}.svg" alt="Bandeira do ${player1}">
                <p>${initialsP1}</p>
            </div>
            <div class="hour">
                <p>${group}</p>
                <strong>${hour}</strong>
            </div>
            <div class="player">
                <img src="./assets/svg/icon-${player2}.svg" alt="Bandeira do ${player2}">
                <p>${initialsP2}</p>
            </div>
        </li>
    
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    
    `
}

document.querySelector('#cards').innerHTML = (

    createCard('24/11', 'quinta', 
    createGame('brazil', 'bra', 'grupo a', '16:00', 'cameroon', 'cam',) + 
    createGame('brazil', '', '', '16:00', 'cameroon', '',)) 
    +
    createCard('28/11', 'sexta', createGame('cameroon', 'cam', 'grupo b', '08:00', 'brazil', 'bra',))
    +
    createCard('28/11', 'sábado', createGame('cameroon', '', '', '15:00', 'brazil', '',))
)
