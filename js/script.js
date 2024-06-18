// var initial_value = document.querySelector(#user_input).value
console.log("Hello World and Everybody!")

// Changing The HTML Element by the Buttons in JavaScript
document.addEventListener('DOMContentLoaded',function addingFirst() {
	
			document.querySelectorAll(".numbers").forEach(function(nav){
				nav.onclick = function(){
					var one = document.querySelector('#first-number')
					one.innerHTML += nav.dataset.num;
			}	
			});

	
		});


// Changing The Second HTML Element by the Buttons in JavaScript


//Chnging the Operators by Clicking them and the Second Number
document.addEventListener('DOMContentLoaded', function () {
			document.querySelectorAll(".operators").forEach(function(nav){
				nav.onclick = function(){

					var action  = document.querySelector('#operator-sign')
					action.innerHTML = nav.dataset.operator;
					document.querySelector('#operator-sign').style.display = "block";

					document.querySelectorAll(".numbers").forEach(function(nav){
					nav.onclick = function(){
						var two = document.querySelector('#second-number')
						two.innerHTML += nav.dataset.num;
				}
				});
				}

			});

			
		});

// Clearing All the Inputs by the AC button

	
	



