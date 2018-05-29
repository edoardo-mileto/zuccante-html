class Simone {

	static __init(L) {
		this.coda = [];
		this.max = 3;
		Simone.__makeLvl(L);
	}

	static __makeLvl(N) {
		Simone.__pulisci();

		for (var i = 0; i < N; i++) {
			this.coda.push(Simone.__rand(this.max));
		}
	}

	static __getAt(i) {
		return this.coda[i];
	}

	static __pulisci() {

		for (var i = this.coda.length - 1; i >= 0; i--) {
			delete this.coda[i];
		}

	}

	static __rand(max) {
		return Math.floor((Math.random() * max));
	}

	static N() {
		return this.coda.length;
	}

}

class Controller {

	static __gen(n,array,last_indice) {

		var indice = Simone.__getAt(n);
		Controller.__accendi(document.getElementById(array[last_indice]),"white");
		Controller.__accendi(document.getElementById(array[indice]), array[indice]);
		last_indice = indice;

		setTimeout(function () {
				Controller.__accendi(document.getElementById(array[last_indice]),"white");
			}, 400);

		if (n < Simone.N()) {
			
			setTimeout(
				function () {
					Controller.__gen(n + 1,array,last_indice);
				}
			, 1000);
		}
	}

	static __gioca(L) {
		this.n = 0;
		
		Simone.__init(L);

		var array = ["red", "green", "blue"];
		var last_indice = 0;

		Controller.__gen(0,array,last_indice);
	}

	static __accendi(elemento, colore) {
		elemento.style.backgroundColor = colore;
	}

	static sleep(milliseconds) {
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	}

	static __on_click(pos){
		if(Simone.__getAt(this.n++)!=pos){
			alert("perso");
		}
		
		if(this.n==Simone.N()){
			Controller.__gioca(++this.L);
		}

	}

}


/*
 * 
 * 	var elem_rosso = document.getElementById("red");
 var elem_verde = document.getElementById("green");
 var elem_blu = document.getElementById("blue");
 */

