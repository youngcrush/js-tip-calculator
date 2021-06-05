document.body.style.cssText = `background: #8E0E00; font-family: Roboto;background: -webkit-linear-gradient(to left, #8E0E00, #1F1C18; background: linear-gradient(to left, #8E0E00, #1F1C18`
//create heading
let topHeading = createElem('h1')

// add top heading css
topHeading.style.cssText = `background: #1F030C;color: white;margin: 0;padding: 10px 100px;text-transform: uppercase;font-size: 18px;font-weight: normal;border-top-left-radius: 20px;border-top-right-radius: 20px;`

//add text in topheading
topHeading.innerText='Tip Calculator'

let calcdiv = createElem('div')
attr(calcdiv, 'id', 'calculator')
calcdiv.style.cssText = `margin-left: 15px;`

//create form
let calcForm = createElem('form')

//create first p of form
let calcFormFirstP = createElem('p')
calcFormFirstP.innerText = "How much was your bill?"

//create bill amount input
let billAmntInput = createElem('input')
attr(billAmntInput, 'type', 'text')
attr(billAmntInput, 'id', 'billamt')
attr(billAmntInput, 'placeholder', 'Bill Amount')
billAmntInput.style.cssText = `padding-left: 20px; width=90px; font-size: 14px; color: #red; background-color: #f7f7f7; width: 60%; padding: 5px 5px 8px 8px;`

//create second p of form
let calcFormSecondP = createElem('p')
calcFormSecondP.innerText = "How was your service?"

//create people amt input
let peopleAmtInput = createElem('input')
attr(peopleAmtInput, 'type', 'text')
attr(peopleAmtInput, 'id', 'peopleamt')
attr(peopleAmtInput, 'placeholder', 'Number of People')
peopleAmtInput.style.cssText = `padding-left: 20px; width=90px; font-size: 14px; color: #red; background-color: #f7f7f7; width: 60%; padding: 5px 5px 8px 8px;`

//create select dropdown
let selectQual = createElem('select')
attr(selectQual, 'id', 'serviceQual')
selectQual.style.cssText = `padding: 13px 13px 20px 20px; font-size: 15px;`
selectQual.options.add( new Option("-- Choose an Option --", "0", 'disabled', 'selected'))
selectQual.options.add( new Option("30% Outstanding", "0.3"))
selectQual.options.add( new Option("20% Good", "0.2"))
selectQual.options.add( new Option("15% It was OK", "0.15"))
selectQual.options.add( new Option("10% Bad", "0.1"))
selectQual.options.add( new Option("5% Terrible", "0.05"))

//create second p of form
let calcFormThirdP = createElem('p')
calcFormThirdP.innerText = "How many people are sharing the bill?"

//create calculate button
let calculateBtn = createElem('button')
calculateBtn.innerText = 'Calculate'
attr(calculateBtn, 'type', 'button')
attr(calculateBtn, 'id', 'calculate')
calculateBtn.style.cssText = `text-transform: uppercase; font-weight: bold; display: block; margin: 30px auto; background: #AD133A; border-radius: 5px; width: 200px; height: 50px; font-size: 17px; color: white;`

//add tooltip div
let tooldiv = createElem('div')
attr(tooldiv, 'id', 'totalTip')
tooldiv.style.cssText = `font-size: 30px; margin-top: 5px; text-align: center;`

//create sup tag
let sup = createElem('sup')
sup.innerText = '$'
sup.style.cssText = `font-size: 20px; top: -18px;`

//create tip span tag
let tipSpan = createElem('span')
attr(tipSpan, 'id', 'tip')
tipSpan.innerText = '0.00'

//create small tag
let smallEach = createElem('small')
attr(smallEach, 'id', 'each')
smallEach.innerText = 'each'
smallEach.style.cssText = `font-size: 20px; font-weight: bold; display: block;`

//get container element
let elem = document.getElementsByClassName('container')
apTag(elem[0], topHeading)
apTag(elem[0], calcdiv)
apTag(elem[0].children[1], calcForm)
apTag(elem[0].children[1].children[0], calcFormFirstP)
apTag(elem[0].children[1].children[0], billAmntInput)
apTag(elem[0].children[1].children[0], calcFormSecondP)
apTag(elem[0].children[1].children[0], selectQual)
apTag(elem[0].children[1], calcFormThirdP)
apTag(elem[0].children[1], peopleAmtInput)
apTag(elem[0].children[1], calculateBtn)
apTag(elem[0], tooldiv)
apTag(elem[0].children[2], sup)
apTag(elem[0].children[2], tipSpan)
apTag(elem[0].children[2], smallEach)

// Add dollor sign before bill amount
let billamt = document.getElementById("billamt")
billamt.before('$ ')


elem[0].style.cssText = `height: 525px; width: 360px; margin: 100px auto; background: #f7f7f7; box-shadow: 0 0 3px rgba(0,0,0,0.1); border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px;`

//create new element
function createElem(tag) {
    return document.createElement(tag)
}

//append child in container
function apTag(container, tag) {
    return container.appendChild(tag)
}

//set new attribute
function attr(elemName, attName, attrValue) {
    return elemName.setAttribute(attName, attrValue)
}


//working
document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

//click to call function
document.getElementById('calculate').onclick = function() {
    //calling function
    calculateTip()
}

//define calculateTip function
function calculateTip() {
    let billAmount = document.getElementById('billamt').value
    let serviceQual = document.getElementById('serviceQual').value
    let people = document.getElementById('peopleamt').value

     //validate input
    if(billAmount === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }

    //Check to see if this input is empty or less than or equal to 1
    if(people === "" || people <= 1) {
        people = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }

    //Calculate tip
    var total = (billAmount*serviceQual)/people
    //round to two decimal places
    total = Math.round(total*100)/100
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2)
    document.getElementById('totalTip').style.display = 'block'
    document.getElementById('tip').innerText = total
}