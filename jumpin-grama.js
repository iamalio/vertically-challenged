
class branch {
	     constructor(eyeColor, hairColor, vertical) {
		this.eyeColor   = "Green";
		this.hairColor = "Black";
		this.vertical = 2;
		 }

	    report() {

         return `
eyeColor: ${this.eyeColor},
hairColor: ${this.hairColor}`;
                }
}
	class parents extends branch {
	    constructor(eyeColor, hairColor, vertical) {
	        super(eyeColor, hairColor, vertical);
	    }
	    report() {
	         let title = "Parents";
            return `${title}  ${super.report()} 
            vertical: ${this.vertical + " Ft"}
            `;
	    }
	}

	class children extends branch {
         constructor(eyeColor, hairColor, verticalNew) {
	        super(eyeColor, hairColor, verticalNew);
	        this.verticalNew = this.vertical + 2 + " Ft";
	    }
   	  report() {
	         let title = "Children";
            return `${title} ${super.report()}  
            vertical: ${this.verticalNew}
            `;
	    }
}
    class grandchildren extends branch {
         constructor(eyeColor, hairColor, verticalNew) {
	        super(eyeColor, hairColor, verticalNew);
	        this.verticalNew = this.vertical + 4 + " Ft";
	    }
   	  report() {
	         let title = "Grandchildren";
            return `${title} ${super.report()}  
            vertical: ${this.verticalNew}
            `;
	    }
	}
   
	let mygrama = new parents();
	console.log(mygrama.report());

   
	let mymom = new children();
	console.log(mymom.report());

	
	let me = new grandchildren();
	console.log(me.report());

