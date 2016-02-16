// Facebook Hasskommentar-Generator

var HateList = ["Empörungsbeschleuniger", "Wir ", "Die Regierung", "Das Volk", "WIR", "Die Bürger", "Die mündigen Bürger", "Die einfachen Bürger", "Besorgte Bürger", "Unser Adolf", "Flüchtlinge", "Asylanten", "Asylant", "wird überhaupt", "werden überhaupt", "verschwören sich gegen", "verschwört sich gegen", "behandeln uns", "behandelt", "kämpfen gegen", "bekämpft", "unterdrücken", "verprassen", "verschwenden", "bräuchten", "verkaufen", "wie Dreck", "nicht ernst genommen", "uns", "das Volk", "Dumm wie Brot!", "Steuergelder", "99%", "Pfui!!!!", "Früher war alles besser", "Das wird man doch noch sagen dürfen!", "Unerträglich!!!!", "Peinlich!!!!", "Volksverräter!!!", "Sie sollten sich schämen!!!!!!!", "Wenn ich die schon sehe!", "MERKEL MUSS WEG!!!", "Armes Deutschland!", "NICHT ERNST GENOMMEN!", "Lügenpresse!!!"]

var inputClass = "input"

function makeSelect(inputArray, inputBox, needParent) {
	var mySelect = "<select class='FHG' onchange='document.getElementsByClassName(\"input\")[0].value += this.options[this.selectedIndex].text + \" \"; document.getElementsByClassName(\"mentionsHidden\")[0].value += this.options[this.selectedIndex].text + \" \";'>"
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
    if (Post.length > 0) {
        if (!Post[0].classList.contains("FHGon")) {
            makeSelect(HateList, Post[0], false)
        }
    }
}

window.setInterval(start, 1000);
