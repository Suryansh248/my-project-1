		function welcome() {
			return document.getElementById('welcome').innerHTML = 
			playerNames() ;

		}
		function playerNames() {
			var player1 = 
			document.getElementById('player1').value;
			 player2 = 
			document.getElementById('player2').value;
			return "1. welcome " + player1 + " and " + player2 + 
			"<br>" + "2. to play this game you both must be familiar with it's rules." + " <br>" + "3. to study rules click on the button below. "
			 + player1 + " will have first turn.";

		}


		function rules() { 
			document.getElementById('rules').innerHTML = "1. here, you  have 21 pens in total." + "<br>" +"2. \ the player which will get turn has to select\
			a number of pens in between 1-4." + "<br>" + 
			"3. the person which will get last pen will lose this game." + "so, best of luck to both of you."
		}

	function input1() {
		input1 = document.getElementById('input1').value;
		var player2 =
		document.getElementById('player2').value;
		return document.getElementById('output1').innerHTML =
		"total input pens = " + input1 + " now, it's your turn " +
		player2 +"<br> " + show() ;
}


function show() {
	
return document.getElementById('show').style.display = "block" ;
}


function input2() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	total =Number(input1) + Number(input2);
	var player1 = 
			document.getElementById('player1').value;
return document.getElementById('output2').innerHTML = "total input pens = " + total + " now it's your turn " + 
player1 + "<br>" + show1();

}

function show1() {
	
return document.getElementById('show1').style.display = "block" ;
}

function input3() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	total = Number(input1) + Number(input2) + Number(input3);
	var player2 =
		document.getElementById('player2').value;
	return document.getElementById('output3').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show2();
}

function show2() {
	
return document.getElementById('show2').style.display = "block" ;
}

function input4() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4);
	var player1 =
		document.getElementById('player1').value;
	return document.getElementById('output4').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show3();
}

function show3() {
	
return document.getElementById('show3').style.display = "block" ;
}

function input5() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5);
	var player2 =
		document.getElementById('player2').value;
	return document.getElementById('output5').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show4();
}

function show4() {
	
return document.getElementById('show4').style.display = "block" ;
}


function input6() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
	if(total < 21)
	 {
		return document.getElementById('output6').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 + "<br> " + show5();
    }
    else
    {
    	return document.getElementById('output6').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    }

}

function show5() {
	
return document.getElementById('show5').style.display = "block" ;
}

function input7() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7);
	var player2 =
		document.getElementById('player2').value;
    var player1 =
		document.getElementById('player1').value;
    if(total < 21)
    {
	    return document.getElementById('output7').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show6();
	}
	else
    {
    	return document.getElementById('output7').innerHTML =
    	"hey, " + player1 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    }

}

function show6() {
	
return document.getElementById('show6').style.display = "block" ;
}



function input8() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
if(total < 21)
{	return document.getElementById('output8').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show7();
}
else
{
	return document.getElementById('output8').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    
}
}

function show7() {
	
return document.getElementById('show7').style.display = "block" ;
}



function input9() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9);
	var player2 =
		document.getElementById('player2').value;
	var player1 =
		document.getElementById('player1').value;
		if( total < 21)
		{
	return document.getElementById('output9').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show8();
	}else
	{
	return document.getElementById('output9').innerHTML =
    	"hey, " + player1 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    	
	}
}

function show8() {
	
return document.getElementById('show8').style.display = "block" ;
}


function input10() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
		if(total < 21) {
	return document.getElementById('output10').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show9();
	}else {
		return document.getElementById('output10').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show9() {
	
return document.getElementById('show9').style.display = "block" ;
}


function input11() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11);
	var player2 =
		document.getElementById('player2').value;
	var player1 =
		document.getElementById('player1').value;
		if( total < 21){
	return document.getElementById('output11').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show10();
	}else
	{
		return document.getElementById('output11').innerHTML =
    	"hey, " + player1 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    
	}
}

function show10() {
	
return document.getElementById('show10').style.display = "block";
}


function input12() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
	if(total < 21) {
		return document.getElementById('output12').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show11();
	}else{
		return document.getElementById('output12').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show11() {
	
return document.getElementById('show11').style.display = "block";
}


function input13() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13);
	var player2 =
		document.getElementById('player2').value;
	var player1 =
		document.getElementById('player1').value;
	if(total < 21) {return document.getElementById('output13').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show12();
}else {
	return document.getElementById('output13').innerHTML =
    	"hey, " + player1 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

}
}

function show12() {
	
return document.getElementById('show12').style.display = "block";
}


function input14() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	input14 = document.getElementById('input14').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13) + Number(input14);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
		if(total < 21) {
	return document.getElementById('output14').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show13();
	}else {
		return document.getElementById('output14').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show13() {
	
return document.getElementById('show13').style.display = "block";
}



function input15() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	input14 = document.getElementById('input14').value;
	input15 = document.getElementById('input15').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13) + Number(input14) + Number(input15);
	var player2 =
		document.getElementById('player2').value;
	var player1 =
		document.getElementById('player1').value;
		if(total < 21) {
	return document.getElementById('output15').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show14();
	}else {

		return document.getElementById('output15').innerHTML =
    	"hey, " + player1 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show14() {
	
return document.getElementById('show14').style.display = "block";
}


function input16() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	input14 = document.getElementById('input14').value;
	input15 = document.getElementById('input15').value;
	input16 = document.getElementById('input16').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13) + Number(input14) + Number(input15) + 
	 Number(input16);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
		if(total < 21) {
				return document.getElementById('output16').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show15();
	}else {
		return document.getElementById('output16').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show15() {
	
return document.getElementById('show15').style.display = "block";
}



function input17() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	input14 = document.getElementById('input14').value;
	input15 = document.getElementById('input15').value;
	input16 = document.getElementById('input16').value;
	input17 = document.getElementById('input17').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13) + Number(input14) + Number(input15) + 
	 Number(input16) + Number(input17);
	var player2 =
		document.getElementById('player2').value;
	var player1 =
		document.getElementById('player1').value;
		if(total < 21) {
	return document.getElementById('output17').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show16();
	}else {
		return document.getElementById('output17').innerHTML =
    	"hey, " + player1 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}

}

function show16() {
	
return document.getElementById('show16').style.display = "block";
}




function input18() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	input14 = document.getElementById('input14').value;
	input15 = document.getElementById('input15').value;
	input16 = document.getElementById('input16').value;
	input17 = document.getElementById('input17').value;
	input18 = document.getElementById('input18').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13) + Number(input14) + Number(input15) + 
	 Number(input16) + Number(input17) + Number(input18);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
		if(total < 21) {
	return document.getElementById('output18').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show18();
	}
	else {
		return document.getElementById('output18').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show17() {
	
return document.getElementById('show17').style.display = "block";
}



function input19() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	input14 = document.getElementById('input14').value;
	input15 = document.getElementById('input15').value;
	input16 = document.getElementById('input16').value;
	input17 = document.getElementById('input17').value;
	input18 = document.getElementById('input18').value;
    input19 = document.getElementById('input19').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13) + Number(input14) + Number(input15) + 
	 Number(input16) + Number(input17) + Number(input18) +
	  Number(input19);
	var player2 =
		document.getElementById('player2').value;
	var player1 =
		document.getElementById('player1').value;
		if(total < 21) {
	return document.getElementById('output19').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player2 +"<br> " + show19();
	}else {
		return document.getElementById('output19').innerHTML =
    	"hey, " + player1 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show18() {
	
return document.getElementById('show18').style.display = "block";
}



function input120() {
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	input3 = document.getElementById('input3').value;
	input4 = document.getElementById('input4').value;
		input5 = document.getElementById('input5').value;

	input6 = document.getElementById('input6').value;
	input7 = document.getElementById('input7').value;
	input8 = document.getElementById('input8').value;
	input9 = document.getElementById('input9').value;
	input10 = document.getElementById('input10').value;
	input11 = document.getElementById('input11').value;
	input12 = document.getElementById('input12').value;
	input13 = document.getElementById('input13').value;
	input14 = document.getElementById('input14').value;
	input15 = document.getElementById('input15').value;
	input16 = document.getElementById('input16').value;
	input17 = document.getElementById('input17').value;
	input18 = document.getElementById('input18').value;
    input19 = document.getElementById('input19').value;
    input20 = document.getElementById('input20').value;
	total = Number(input1) + Number(input2) + Number(input3) +
	Number(input4) + Number(input5) + Number(input6) + 
	Number(input7) + Number(input8) + Number(input9) + 
	Number(input10) + Number(input11) + Number(input12)  +
	 Number(input13) + Number(input14) + Number(input15) + 
	 Number(input16) + Number(input17) + Number(input18) +
	  Number(input19) + Number(input20);
	var player1 =
		document.getElementById('player1').value;
	var player2 =
		document.getElementById('player2').value;
	if(total < 21) {
		return document.getElementById('output20').innerHTML =
		"total input pens = " + total + " now, it's your turn " +	player1 +"<br> " + show20();
	}else {
		return document.getElementById('output20').innerHTML =
    	"hey, " + player2 +" you lose this time " + 
    	"<br>" + "better luck next time!";
    

	}
}

function show19() {
	
return document.getElementById('show19').style.display = "block";
}

