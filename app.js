// DOM variables
let nameInputNode = document.querySelector(".name")
let teamNumberNode = document.querySelector(".team")
let nameListNode = document.querySelector(".name-list")
let teamListNode = document.querySelector(".team-list")

// Array of Names and Teams
let namesArr = []
let teamArr = []

const addNamesList = function() {
    let nameValue = nameInputNode.value

    if(nameValue !== " ") {

    let newNameList = document.createElement('li')
    newNameList.innerText = nameValue
    nameListNode.appendChild(newNameList)
    nameInputNode.value = " "
    namesArr.push(nameValue)

    }
}

const takeNumTeams = function() {
    let teamNumberValue = teamNumberNode.value
    
    for (let i = 1; i <= teamNumberValue; i++) {
        let teamHeader = document.createElement('p')
        teamHeader.innerText = `Team ${i}`
        teamListNode.appendChild(teamHeader)
        teamNumberNode.value = " "
    }
}