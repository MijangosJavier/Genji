const altNav = $("#navbarNavAltMarkup");
const cards = document.querySelectorAll(".card");

const HideAltNav = ()=>{
	altNav.collapse('hide');
}

const CollapseCard = (cardBtn)=>{
	return () =>{
		var cardBody = $("#" + cardBtn.parentElement.nextElementSibling.id);
		var collapsed = true;

		const length = cardBody[0].classList.length;
		for(var i = 0 ; i< length; i++){
			if(cardBody[0].classList[i] === "show"){
				collapsed = false;
				break;
			}
		}

		if(collapsed){
			cardBody.collapse('show');
		}
	}
}

const SetNavEvents = ()=>{
	const navItems = document.querySelectorAll("a.nav-item");

	navItems.forEach((elem) =>{
		elem.addEventListener("click", HideAltNav);
	})

}

const SetCardEvents = ()=>{
	const buttons = cards[0].parentElement.querySelectorAll("div div button")
	buttons.forEach((elem) =>{
		elem.addEventListener("click", CollapseCard(elem));
	})
}

SetNavEvents();
SetCardEvents();

