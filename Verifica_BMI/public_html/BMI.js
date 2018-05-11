function bmicalculate()
{
  var weight = document.bmi.weight.value;
  var sex = document.bmi.sex.options[document.bmi.sex.selectedIndex].value;
  var height = document.bmi.height.value;
  var sex = document.bmi.sex.options[document.bmi.sex.selectedIndex].value;
  var w1;
  var w2;
  
  w1 = weight / ((height/100) * (height/100)) ;
	
	  if  (document.bmi.height.value===0)
 {
     alert("Per favore inserisci la tua altezza per il calcolo del BMI");
     return;
    } 
	
	
  if  (document.bmi.weight.value===0)
 {
     alert("Per favore inserisci il tuo peso per il calcolo del BMI");
     return;
    } 

  
        if (w1 < 16.5)
        {
          w2="Grave Magrezza";
        }
        if (w1 >= 16.5 && w1 < 18.5)
        {
          w2="Sottopeso";
        }
        if (w1 >= 18.5 && w1 < 25)
        {
          w2="Normopeso";
        }
        if (w1 >= 25 && w1 < 30)
        {
          w2="Sovrappeso";
        }
        if (w1 >=30 && w1 < 35)
        {
          w2="Obesità lieve";
        }        
		if (w1 >=35 && w1 < 40)
        {
          w2="Obesità media";
        }
        if (w1 >=40)
        {
          w2="Obesità grave";
        }
		
		var w6= 25 * ((height/100) * (height/100));
var w7 = 18.5*  ((height/100) * (height/100));       

  
  document.bmi.bmi.value = Math.round(w1*100)/100;
  document.bmi.result.value = w2;
  
    document.bmi.bmi2.value = Math.round(w7*100)/100;
  document.bmi.bmi3.value = Math.round(w6*100)/100;

}



function bmiclear()

{
  document.bmi.bmi.value = "";
  document.bmi.result.value = "";
    document.bmi.bmi2.value="";
  document.bmi.bmi3.value="";

}



function weight1calculate()

{
  var heightunits = document.weight1.heightunits.options[document.weight1.heightunits.selectedIndex].value;
  var height = document.weight1.height.value;

  if (heightunits === "inches")
    {
        height *= 2.54;
    }

  var sex = document.weight1.sex.options[document.weight1.sex.selectedIndex].value;

  var a = height / 100;
  var a = a * a;
  var w1;
  var w2;
  var w3;
  var w4;

  if (sex == "Maschio")
    {
      w1 = a * 20.1;
      w2 = a * 25.0;
      w3 = w1 / 0.4536;
      w4 = w2 / 0.4536;
    }
  else
    {
       w1 = a * 18.7;
       w2 = a * 23.8;
       w3 = w1 / 0.4536;
       w4 = w2 / 0.4536;
    }
       
  document.weight1.w1.value = Math.round(w1);
  document.weight1.w2.value = Math.round(w2);
  document.weight1.w3.value = Math.round(w3);
  document.weight1.w4.value = Math.round(w4);
}


function valclear()

{
document.weight1.w1.value = "";
document.weight1.w2.value = "";
document.weight1.w3.value = "";
document.weight1.w4.value = "";
}