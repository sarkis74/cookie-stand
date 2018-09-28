var pikePlace = {
    name: "1st and Pike",
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    cookiesSoldPerHr: [],
};
     pikePlace.calcCustPerHr = function() {
        var randPerHr = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * Math.ceil(this.avgSale); 
        
};

    pikePlace.calcCookiesPerHr = function() {
        console.log(this);
        for(var i = 0; i < 16; i++) {  
        this.cookiesSoldPerHr.push(this.calcCustPerHr());
        }
    };

    pikePlace.renderHours = function() {
        this.calcCookiesPerHr();

        //Reference containing element
        var listContainer = document.getElementById('sales-list');
        //console.log(listContainer);
        //Creating new element 
        var headEl = document.createElement('h3');
        headEl.textContent = this.name;
        //Appending child element to parent
        listContainer.appendChild(headEl);

        var listEl = document.createElement('ul');

        var total = 0;

        for(var i in this.cookiesSoldPerHr) {
        console.log(this.cookiesSoldPerHr);
        // Add the items' text for store hours
        var meridiem = 'am';
        if(i > 5) {
            meridiem = 'pm';
        }
        var mod = ((22 + i) % 12) + 2; 
        if(mod === 13) {
            mod = 1;
        }

        var itemEl = document.createElement('li');
        itemEl.textContent = mod + meridiem + ' : ' + this.cookiesSoldPerHr[i] + ' cookies';
        listEl.appendChild(itemEl);

        total += this.cookiesSoldPerHr[i];
        console.log(total);
    }   
        this.cookiesSoldPerHr.push(total);
        itemEl.textContent = 'Total: ' + total + ' cookies';
        listEl.appendChild(itemEl);
        listContainer.appendChild(listEl); //Append ul to div
};

pikePlace.renderHours();


var seaTac = {
    name: 'Sea-Tac Airport',
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    cookiesSoldPerHr: [],
};
seaTac.calcCustPerHr = function() {
   var randPerHr = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * Math.ceil(this.avgSale); 
   
};

seaTac.calcCookiesPerHr = function() {
   console.log(this);
   for(var i = 0; i < 16; i++) {  
   this.cookiesSoldPerHr.push(this.calcCustPerHr());
   }
};

seaTac.renderHours = function() {
   this.calcCookiesPerHr();

   //Reference containing element
   var listContainer = document.getElementById('sales-list');
   //console.log(listContainer);
   //Creating new element 
   var headEl = document.createElement('h3');
   headEl.textContent = this.name;
   //Appending child element to parent
   listContainer.appendChild(headEl);

   var listEl = document.createElement('ul');

   var total = 0;

   for(var i in this.cookiesSoldPerHr) {
   console.log(this.cookiesSoldPerHr);
   // Add the items' text for store hours
   var meridiem = 'am';
   if(i > 5) {
       meridiem = 'pm';
   }
   var mod = ((22 + i) % 12) + 2; 
   if(mod === 13) {
       mod = 1;
   }

   var itemEl = document.createElement('li');
   itemEl.textContent = mod + meridiem + ' : ' + this.cookiesSoldPerHr[i] + ' cookies';
   listEl.appendChild(itemEl);

   total += this.cookiesSoldPerHr[i];
   console.log(total);
}   
   this.cookiesSoldPerHr.push(total);
   itemEl.textContent = 'Total: ' + total + ' cookies';
   listEl.appendChild(itemEl);
   listContainer.appendChild(listEl); //Append ul to div
};

seaTac.renderHours();


var seaCent = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    cookiesSoldPerHr: [],
};
seaCent.calcCustPerHr = function() {
   var randPerHr = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * Math.ceil(this.avgSale); 
   
};

seaCent.calcCookiesPerHr = function() {
   console.log(this);
   for(var i = 0; i < 16; i++) {  
   this.cookiesSoldPerHr.push(this.calcCustPerHr());
   }
};

seaCent.renderHours = function() {
   this.calcCookiesPerHr();

   //Reference containing element
   var listContainer = document.getElementById('sales-list');
   //console.log(listContainer);
   //Creating new element 
   var headEl = document.createElement('h3');
   headEl.textContent = this.name;
   //Appending child element to parent
   listContainer.appendChild(headEl);

   var listEl = document.createElement('ul');

   var total = 0;

   for(var i in this.cookiesSoldPerHr) {
   console.log(this.cookiesSoldPerHr);
   // Add the items' text for store hours
   var meridiem = 'am';
   if(i > 5) {
       meridiem = 'pm';
   }
   var mod = ((22 + i) % 12) + 2; 
   if(mod === 13) {
       mod = 1;
   }

   var itemEl = document.createElement('li');
   itemEl.textContent = mod + meridiem + ' : ' + this.cookiesSoldPerHr[i] + ' cookies';
   listEl.appendChild(itemEl);

   total += this.cookiesSoldPerHr[i];
   console.log(total);
}   
   this.cookiesSoldPerHr.push(total);
   itemEl.textContent = 'Total: ' + total + ' cookies';
   listEl.appendChild(itemEl);
   listContainer.appendChild(listEl); //Append ul to div
};

seaCent.renderHours();


var capHill = {
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,
    cookiesSoldPerHr: [],
};
capHill.calcCustPerHr = function() {
   var randPerHr = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * Math.ceil(this.avgSale); 
   
};

capHill.calcCookiesPerHr = function() {
   console.log(this);
   for(var i = 0; i < 16; i++) {  
   this.cookiesSoldPerHr.push(this.calcCustPerHr());
   }
};

capHill.renderHours = function() {
   this.calcCookiesPerHr();

   //Reference containing element
   var listContainer = document.getElementById('sales-list');
   //console.log(listContainer);
   //Creating new element 
   var headEl = document.createElement('h3');
   headEl.textContent = this.name;
   //Appending child element to parent
   listContainer.appendChild(headEl);

   var listEl = document.createElement('ul');

   var total = 0;

   for(var i in this.cookiesSoldPerHr) {
   console.log(this.cookiesSoldPerHr);
   // Add the items' text for store hours
   var meridiem = 'am';
   if(i > 5) {
       meridiem = 'pm';
   }
   var mod = ((22 + i) % 12) + 2; 
   if(mod === 13) {
       mod = 1;
   }

   var itemEl = document.createElement('li');
   itemEl.textContent = mod + meridiem + ' : ' + this.cookiesSoldPerHr[i] + ' cookies';
   listEl.appendChild(itemEl);

   total += this.cookiesSoldPerHr[i];
   console.log(total);
}   
   this.cookiesSoldPerHr.push(total);
   itemEl.textContent = 'Total: ' + total + ' cookies';
   listEl.appendChild(itemEl);
   listContainer.appendChild(listEl); //Append ul to div
};

capHill.renderHours();


var alki = {
    name: 'Alki',
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,
    cookiesSoldPerHr: [],
};
alki.calcCustPerHr = function() {
   var randPerHr = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * Math.ceil(this.avgSale); 
   
};

alki.calcCookiesPerHr = function() {
   console.log(this);
   for(var i = 0; i < 16; i++) {  
   this.cookiesSoldPerHr.push(this.calcCustPerHr());
   }
};

alki.renderHours = function() {
   this.calcCookiesPerHr();

   //Reference containing element
   var listContainer = document.getElementById('sales-list');
   //console.log(listContainer);
   //Creating new element 
   var headEl = document.createElement('h3');
   headEl.textContent = this.name;
   //Appending child element to parent
   listContainer.appendChild(headEl);

   var listEl = document.createElement('ul');

   var total = 0;

   for(var i in this.cookiesSoldPerHr) {
   console.log(this.cookiesSoldPerHr);
   // Add the items' text for store hours
   var meridiem = 'am';
   if(i > 5) {
       meridiem = 'pm';
   }
   var mod = ((22 + i) % 12) + 2; 
   if(mod === 13) {
       mod = 1;
   }

   var itemEl = document.createElement('li');
   itemEl.textContent = mod + meridiem + ' : ' + this.cookiesSoldPerHr[i] + ' cookies';
   listEl.appendChild(itemEl);

   total += this.cookiesSoldPerHr[i];
   console.log(total);
}   
   this.cookiesSoldPerHr.push(total);
   itemEl.textContent = 'Total: ' + total + ' cookies';
   listEl.appendChild(itemEl);
   listContainer.appendChild(listEl); //Append ul to div
};

alki.renderHours();


