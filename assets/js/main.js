function createGame(player1, initialsP1, group, hour, player2, initialsP2) {
    return `
    
        <li>
            <div class="player">
                <img src="./assets/svg/flag/icon-${player1}.svg" alt="Bandeira do país - ${player1}">
                <p>${initialsP1}</p>
            </div>
            <div class="hour">
                <p>${group}</p>
                <strong>${hour}</strong>
            </div>
            <div class="player">
                <img src="./assets/svg/flag/icon-${player2}.svg" alt="Bandeira do país - ${player2}">
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

    createCard('20/11', 'domingo', createGame('catar', 'qat', 'grupo a', '13:00', 'equador', 'equ',)) 
    +
    createCard('21/11', 'segunda', 
    createGame('inglaterra', 'ing', 'grupo b', '10:00', 'iran', 'ira')+
    createGame('senegal', 'sen', 'grupo a', '13:00', 'holanda', 'ned')+
    createGame('estados-unidos', 'eua', 'grupo b', '16:00', 'gales', 'pgl'))
    +
    createCard('22/11', 'terça', 
    createGame('argentina', 'arg', 'grupo c', '07:00', 'arabia-saudita', 'sau')+
    createGame('dinamarca', 'den', 'grupo d', '10:00', 'tunisia', 'tun')+
    createGame('mexico', 'mex', 'grupo c', '13:00', 'polonia', 'pol')+
    createGame('franca', 'fra', 'grupo d', '16:00', 'australia', 'aut'))
    +
    createCard('23/11', 'quarta', 
    createGame('marrocos', 'mar', 'grupo f', '07:00', 'croacia', 'cro')+
    createGame('alemanha', 'ale', 'grupo e', '10:00', 'japao', 'jap')+
    createGame('espanha', 'esp', 'grupo e', '13:00', 'costa-rica', 'cri')+
    createGame('belgica', 'bel', 'grupo f', '16:00', 'canada', 'can'))
    +
    createCard('24/11', 'quinta', 
    createGame('suica', 'swt', 'grupo g', '07:00', 'camaroes', 'cmr')+
    createGame('uruguai', 'uru', 'grupo h', '10:00', 'coreia-do-sul', 'kor')+
    createGame('portugal', 'por', 'grupo h', '13:00', 'gana', 'gha')+
    createGame('brasil', 'bra', 'grupo g', '16:00', 'servia', 'ser'))
    +
    createCard('25/11', 'sexta', 
    createGame('gales', 'pgl', 'grupo b', '07:00', 'iran', 'ira')+
    createGame('catar', 'qat', 'grupo a', '10:00', 'senegal', 'sen')+
    createGame('holanda', 'ned', 'grupo a', '13:00', 'equador', 'equ')+
    createGame('inglaterra', 'ing', 'grupo b', '16:00', 'estados-unidos', 'eua'))
    +
    createCard('26/11', 'sábado', 
    createGame('tunisia', 'tun', 'grupo d', '07:00', 'australia', 'aus')+
    createGame('polonia', 'pol', 'grupo c', '10:00', 'arabia-saudita', 'sau')+
    createGame('franca', 'fra', 'grupo d', '13:00', 'dinamarca', 'den')+
    createGame('argentina', 'arg', 'grupo c', '16:00', 'mexico', 'mex'))
    +
    createCard('27/11', 'domingo', 
    createGame('japao', 'jap', 'grupo e', '07:00', 'costa-rica', 'cri')+
    createGame('belgica', 'bel', 'grupo f', '10:00', 'marrocos', 'mar')+
    createGame('croacia', 'cro', 'grupo f', '13:00', 'canada', 'can')+
    createGame('espanha', 'esp', 'grupo e', '16:00', 'alemanha', 'ger'))
    +
    createCard('28/11', 'segunda', 
    createGame('camaroes', 'cam', 'grupo g', '07:00', 'servia', 'ser')+
    createGame('coreia-do-sul', 'kor', 'grupo h', '10:00', 'gana', 'gha')+
    createGame('brasil', 'bra', 'grupo g', '13:00', 'suica', 'sui')+
    createGame('portugal', 'por', 'grupo h', '16:00', 'uruguai', 'uru'))
    +
    createCard('29/11', 'terça', 
    createGame('equador', 'equ', 'grupo a', '12:00', 'senegal', 'sen')+
    createGame('holanda', 'ned', 'grupo a', '12:00', 'catar', 'qat')+
    createGame('iran', 'ira', 'grupo b', '16:00', 'estados-unidos', 'eua')+
    createGame('gales', 'pgl', 'grupo b', '16:00', 'inglaterra', 'ing'))
    +
    createCard('30/11', 'quarta', 
    createGame('tunisia', 'tun', 'grupo d', '12:00', 'franca', 'fra')+
    createGame('australia', 'aut', 'grupo d', '12:00', 'dinamarca', 'den')+
    createGame('polonia', 'pol', 'grupo c', '16:00', 'argentina', 'arg')+
    createGame('arabia-saudita', 'sau', 'grupo c', '16:00', 'mexico', 'mex'))
    +
    createCard('01/12', 'quinta', 
    createGame('croacia', 'cro', 'grupo f', '12:00', 'belgica', 'bel')+
    createGame('canada', 'can', 'grupo f', '12:00', 'marrocos', 'mar')+
    createGame('japao', 'jap', 'grupo e', '16:00', 'espanha', 'esp')+
    createGame('costa-rica', 'cri', 'grupo e', '16:00', 'alemanha', 'ger'))
    +
    createCard('02/12', 'sexta', 
    createGame('coreia-do-sul', 'kor', 'grupo h', '12:00', 'portugal', 'por')+
    createGame('gana', 'gha', 'grupo h', '12:00', 'uruguai', 'uru')+
    createGame('servia', 'ser', 'grupo g', '16:00', 'suica', 'sui')+
    createGame('camaroes', 'cam', 'grupo g', '16:00', 'brasil', 'bra'))
)
