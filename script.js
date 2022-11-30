

function check(){
	userGuess=[];
	result=[];
	computerGuess=[];
	  
	  for(i=0 ; i<5 ; i++){
		  
				user1 = prompt("User 1 please select: Rock, Paper or Scissors?");
				userGuess[i] = user1;
				myArray = ["Rock","Paper","Scissors"];
				user2 = myArray[Math.floor(Math.random()*myArray.length)];
				computerGuess[i] = user2;
				
					
				
	  
	  			if(user1!="Paper" && user1!="Rock" && user1!="Scissors"){
					alert("Invalid input, please try again!");
				}
					else if(user2!="Paper" && user2!="Rock" && user2!="Scissors"){
						alert("Invalid input, please try again!");
					}
		
	  
					else if(user1=="Paper" && user2=="Paper"){
						alert("It's a draw");
						//userGuess[i] = user1;
						//computerGuess[i] = user2;
						result[i]="Draw";
						
					}
					else if(user1=="Rock" && user2=="Rock"){
						alert("It's a draw");
						result[i]="Draw";
						
					}
					else if(user1=="Scissors" && user2=="Scissors"){
						alert("It's a draw");
						result[i]="Draw";
						
					}
					else if(user1=="Rock" && user2=="Paper"){
						alert("Computer wins!");
						result[i]="Computer wins";
						
					}
					else if(user1=="Paper" && user2=="Rock"){
						alert("Player wins!");
						result[i]="Player wins";
						
						
					}
					else if(user1=="Rock" && user2=="Scissors"){
						alert("Player wins!");
						result[i]="Player wins";
						
						
					}
					else if(user1=="Scissors" && user2=="Rock"){
						alert("Computer wins!");
						result[i]="Computer wins";
						
					}
					else if(user1=="Paper" && user2=="Scissors"){
						alert("Computer wins!");
						result[i]="Computer wins";
						
					}
					else if(user1=="Scissors" && user2=="Paper"){
						alert("Player wins!");
						result[i]="Player wins";
						
						
					}
					else{
						alert("Invalid input, please try again!");
					}
					
	  }
	 	document.getElementById("results").innerHTML+=("<br/>"+"User guesses: ");
	for(i=0; i<userGuess.length; i++){ 
		document.getElementById("results").innerHTML+=(userGuess[i]+", ");
	}
		document.getElementById("results").innerHTML+=("<br/>"+"<br/>"+"Computer guesses: ");
	for(i=0; i<result.length; i++){
		document.getElementById("results").innerHTML+=(computerGuess[i]+", ");
	}
		document.getElementById("results").innerHTML+=("<br/>"+"<br/>"+"Results: ");
	for(i=0; i<result.length; i++){
		document.getElementById("results").innerHTML+=(result[i]+", ");
	} 
}

/*function guesses(){
		document.getElementById("guesses").innerHTML+=("<br/>"+"User guesses: ");
	for(i=0; i<userGuess.length; i++){ 
		document.getElementById("guesses").innerHTML+=(userGuess[i]+", ");
	}
		document.getElementById("guesses").innerHTML+=("<br/>"+"<br/>"+"Computer guesses: ");
	for(i=0; i<result.length; i++){
		document.getElementById("guesses").innerHTML+=(computerGuess[i]+", ");
	}
		document.getElementById("guesses").innerHTML+=("<br/>"+"<br/>"+"Results: ");
	for(i=0; i<result.length; i++){
		document.getElementById("guesses").innerHTML+=(result[i]+", ");
	}
}*/



/*function beer(){

	for( i=99; i>=1; i--){
			if(i>=2){
				document.getElementById("beer").innerHTML+="<br/>"+i+" bottles of beer on the wall, "+i+" bottles of beer";
				document.getElementById("beer").innerHTML+="<br/>"+"Take one down and pass it around, "+(i-1)+" bottles of beer on the wall";
			}
			else{
			document.getElementById("beer").innerHTML+="<br/>"+"1 bottle of beer on the wall, 1 bottle of beer";
			document.getElementById("beer").innerHTML+="<br/>"+"Take one down and pass it around, no more bottles of beer on the wall";
			document.getElementById("beer").innerHTML+="<br/>"+"No more bottles of beer on the wall, no more bottles of beer";
			document.getElementById("beer").innerHTML+="<br/>"+"Go to the store and buy some more, 99 bottles of beer on the wall";
				}

			}
}
*/
