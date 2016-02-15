// Facebook Hasskommentar-Generator

var HateList = ["Wir ", "Die Regierung", "Das Volk", "WIR", "Die Bürger", "Die mündigen Bürger", "Die einfachen Bürger", "Besorgte Bürger", "Unser Adolf", "Flüchtlinge", "Asylanten", "Asylant", "wird überhaupt", "werden überhaupt", "verschwören sich gegen", "verschwört sich gegen", "behandeln uns", "behandelt", "kämpfen gegen", "bekämpft", "unterdrücken", "verprassen", "verschwenden", "bräuchten", "verkaufen", "wie Dreck", "nicht ernst genommen", "uns", "das Volk", "Dumm wie Brot!", "Steuergelder", "99%", "Pfui!!!!", "Früher war alles besser", "Das wird man doch noch sagen dürfen!", "Unerträglich!!!!", "Peinlich!!!!", "Volksverräter!!!", "Sie sollten sich schämen!!!!!!!", "Wenn ich die schon sehe!", "MERKEL MUSS WEG!!!", "Armes Deutschland!", "NICHT ERNST GENOMMEN!", "Lügenpresse!!!"]

var inputClass = "input"

function insertHate(hateword, needParent) {
    if (needParent) {
        var InputTextfield = document.getElementsByClassName('activeHATE')
        // needworkaround for <br> if nothing is clicked...
        // document.querySelectorAll("br[data-text='true']")
        // diese rotze mit den kommentaren funzt nicht, weil da ein replace den text immer wieder killt
        document.getElementsByClassName('activeHATE')[0].parentNode.querySelectorAll("span[data-text='true']")[0].innerText
        // console.log("comment inset " + InputTextfield[0])
        
        // change parent innerText
        InputTextfield[0].parentNode.querySelectorAll("span[data-text='true'], br[data-text='true']")[0].innerText += hateword
    } else {
    	var InputTextfield = document.getElementsByClassName('input')
    	// hiddenfield sends content
    	var InputHiddenfield = document.getElementsByClassName('mentionsHidden')
    	// add to both
		InputTextfield[0].value += hateword + " "
		InputHiddenfield[0].value += hateword + " "
    }
}

function makeSelect(inputArray, inputBox, needParent) {
    // onactive=\"this.classList.toggle(\"activeHATE\")\"
	var mySelect = "<select class='FHG' onmouseover='this.classList.add(\"activeHATE\")' onmouseout='this.classList.remove(\"activeHATE\")' onchange='insertHate(this.options[this.selectedIndex].text, " + needParent + ")'>"
	for (var x = 0; x < inputArray.length; x++) {
		mySelect += "<option>" + inputArray[x] + "</option>"
	}
	mySelect += "</select>"
	inputBox.classList.add('FHGon')
	if (needParent) {
	    inputBox = inputBox.parentNode.parentNode.parentNode.parentNode
	}
	inputBox.insertAdjacentHTML('afterend', mySelect)
}

function start() {
    var Post = document.getElementsByClassName(inputClass)
    //var Comments = document.querySelectorAll("div[contenteditable='true']")
    if (Post.length > 0) {
        if (!Post[0].classList.contains("FHGon")) {
            makeSelect(HateList, Post[0], false)
        }
    }

    /*if (Comments.length > 0) {
        for (var x = 0; x < Comments.length; x++) {
            if (!Comments[x].classList.contains("FHGon")) {
                makeSelect(HateList, Comments[x], true)
            }
        }
    }*/
}

window.setInterval(start, 1000);
