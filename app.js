// DOM variables
let nameInputNode = document.querySelector(".name")
let teamNumberNode = document.querySelector(".team")
let nameListNode = document.querySelector(".name-list")
let teamListNode = document.querySelector(".team-list")

// Array of Names and Teams
let namesArr = []
let teamNumArr = []



const addNamesList = function() {
    let nameValue = nameInputNode.value

    if(nameValue !== " ") {

    let newNameList = document.createElement('li')
    let deleteIcon = document.createElement('i')

    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>'
    newNameList.innerText = nameValue

    newNameList.appendChild(deleteIcon)
    nameListNode.appendChild(newNameList)

    nameInputNode.value = " "
    namesArr.push(nameValue)

    }
}



const takeNumTeams = function() {
    let teamNumberValue = teamNumberNode.value
    
    for (let i = 1; i <= teamNumberValue; i++) {

        let teamHeader = document.createElement('li')
        teamHeader.innerText = `Team ${i}`

        teamListNode.appendChild(teamHeader)
        teamNumberNode.value = " "

        teamNumArr.push(`team${i}`)
        

    }
    return teamNumberValue
}


const assignTeams = function() {
    let oneName = document.querySelectorAll('.name-list li')
    let randomNumName = Math.floor(Math.random() * namesArr.length)

    let oneTeam = document.querySelectorAll('.team-list li')
    let randomNumTeam = Math.floor(Math.random() * oneTeam.length)

    let teamMember = document.createElement('small')
    teamMember.innerText = oneName[randomNumName].innerText
    oneTeam[randomNumTeam].appendChild(teamMember)

    nameListNode.removeChild(nameListNode.childNodes[randomNumName])

}