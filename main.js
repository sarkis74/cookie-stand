var cookieStore = function(name, minCust, maxCust, avgSale) {
    this.name = name;
    this.min = minCust;
    this.max = maxCust;
    this.avgSale = avgSale;
    this.cookiesSoldPerHour = [];
    this.storesTimes = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
    };
  
    cookieStore.prototype.calcCustPerHour = function() {
        var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return Math.round(randomAmount * this.avgSale);
    };

    cookieStore.prototype.calculateCookiesPerHour = function() {
        console.log(this);
        var total = 0;
        for(var i = 0; i < 15; i++) {  
        this.cookiesSoldPerHour.push(this.calcCustPerHour());
        total += this.cookiesSoldPerHour[i];
        } this.cookiesSoldPerHour.push(total);
    };
    
    cookieStore.prototype.renderHours = function() {
        this.calculateCookiesPerHour();
        if(!this.cookiesSoldPerHour.length){ //Avoiding double array
          
        this.calculateCookiesPerHour(); //Placing cookies sold each our array
            }
        };      

    cookieStore.prototype.salesLayout = function() {
        this.renderHours();
        console.log(this.renderHours);

        //Reference containing element
        var listContainer = document.getElementById('sales-list');
        //console.log(listContainer);
        //Creating new element 
        var headEl = document.createElement('h3');
        headEl.textContent = this.name;
        //Appending child element to parent
        listContainer.appendChild(headEl);

        var listEl = document.createElement('ul');
        //var total = 0;
        for(var i = 0; i < 16; i++) {

        var itemEl = document.createElement('li');
        itemEl.textContent = this.storesTimes[i] + ' : ' + this.cookiesSoldPerHour[i] + ' cookies';
        console.log(itemEl);
        listEl.appendChild(itemEl);
        //total += this.cookiesSoldPerHour[i];  
        //itemEl.textContent = 'Total: ' + total + ' cookies';
        listEl.appendChild(itemEl);
        listContainer.appendChild(listEl); //Append ul to div
        }
    };

var pikePlace = new cookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new cookieStore('SeaTac', 3, 24, 1.2);
var seaCent = new cookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new cookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new cookieStore('Alki', 2, 16, 4.6);

pikePlace.salesLayout();
seaTac.salesLayout();
seaCent.salesLayout();
capHill.salesLayout();
alki.salesLayout();


