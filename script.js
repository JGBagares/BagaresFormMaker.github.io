let counter = 1

const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break

    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    // container div
    let container = document.createElement('div')
    let divId = "div" + counter
    container.setAttribute('id', divId)

    // elements inside div
    let el = document.createElement('input')
    let title = document.createElement('p')

    
    title.textContent = label
    title.setAttribute('class', 'text-start mt-1 fw-bold')

    el.textContent = label
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('placeholder', placeholder)

    container.append(title)
    container.append(el)
    
    // delete button
    let delbtn = document.createElement('button')
    delbtn.textContent = "delete"
    delbtn.setAttribute('class', 'btn btn-primary btn-sm mt-1')
    delbtn.setAttribute('onclick', 'document.querySelector("#'+divId+'").innerHTML ="" ')
    container.append(delbtn)

    document.querySelector("#elements").append(container)

    let line = document.createElement('hr')
    document.querySelector("#elements").append(line)

    counter ++
}

function appendRadio(text = "No label", placeholder = "No placeholder") {
    let container = document.createElement('div')
    let divId = "div" + counter
    let br = document.createElement('br')
    container.setAttribute('class', 'd-flex mt-1')
    container.setAttribute('id', divId)

    let rd = document.createElement('input')

    rd.setAttribute('class', 'mt-1')
    rd.setAttribute('type', 'radio')
    
    let lbl =document.createElement('label')
    lbl.setAttribute('for', text)
    lbl.textContent = text

    let line = document.createElement('hr')
 
    container.append(rd)
    container.append(lbl)

    let delbtn = document.createElement('button')
    delbtn.textContent = "delete"
    delbtn.setAttribute('class', 'btn btn-primary btn-sm ms-auto ')
    delbtn.setAttribute('onclick', 'document.querySelector("#'+divId+'").innerHTML ="" ')
    container.append(delbtn)

    document.querySelector("#elements").append(container)
    
    counter ++
}

