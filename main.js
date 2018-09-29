var cookieStore = function(name, minCust, maxCust, avgSale) {
    this.name = name;
    this.min = minCust;
    this.max = maxCust;
    this.avgSale = avgSale;
    this.cookiesSoldPerHour = [];
    this.storesTimes = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Daily Location Total'];
    this.salesForAll = [];
};
  
    cookieStore.prototype.calcCustPerHour = function() { //This proto is to generate random sales qty
        var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return Math.round(randomAmount * this.avgSale);
    };

    cookieStore.prototype.calculateCookiesPerHour = function() { //This proto is to call previous proto and store values in array
        console.log(this);
        var total = 0;
        for(var i = 0; i < 15; i++) {  
        this.cookiesSoldPerHour.push(this.calcCustPerHour());
        total += this.cookiesSoldPerHour[i];
        } this.cookiesSoldPerHour.push(total);
    };
    
    cookieStore.prototype.renderHours = function() { //This proto is to fetch store hrs/sales and avoid duplicate data
        this.calculateCookiesPerHour();
        if(!this.cookiesSoldPerHour.length){ //Avoiding duplicate array items
        this.calculateCookiesPerHour(); //Placing cookies sold each our array
            }
        }; 
        
    cookieStore.prototype.renderSales = function() {
        this.renderHours();
        console.log(this.renderHours);
        this.salesHeader();
        //Reference containing element: 'table'
        //var tabContainer = document.getElementById('sales-list');
        var tableEl = document.getElementById('cookies-table');
        tableEl.style.border="2px solid black";
        //Creating new elements (table: row, headers)
        var tabRowEl = document.createElement('tr');
        var tabHeadEl = document.createElement('th');
        tabHeadEl.textContent = this.name;
        console.log(tabHeadEl);
        //Appending child 'table-header' to parent 'table-row'
        tabRowEl.appendChild(tabHeadEl);
        //Appending child 'table-row' to parent 'table'
        tableEl.appendChild(tabRowEl);

            for(var i = 0; i < 16; i++) {
        tabRowEl.style.borderBottom = "thick solid #0000FF"; 
        //Create table-data cells and fill with store values
        var tabDataEl = document.createElement('td');
        tabDataEl.style.border = "1px solid black";
        tabDataEl.textContent = this.cookiesSoldPerHour[i];
        tabDataEl.style.fontSize = "18";
        //Appending child 'table-data' to parent 'table-row'
        tabRowEl.appendChild(tabDataEl);
        //Appending child 'table-row' to parent 'table'
        tableEl.appendChild(tabRowEl);
        } 
        var tabContainer = document.getElementById('sales-list');
        tabContainer.appendChild(tableEl);
        console.log(tableEl);
        //this.salesFooter();
    };

    cookieStore.prototype.salesHeader = function() {
        var tableEl = document.getElementById('cookies-table');
        tableEl.style.border="2px solid black";
       
        var tabRowEl = document.createElement('tr');
        var tabHeadEl = document.createElement('th');
        tabHeadEl.textContent = '';
        console.log(tabHeadEl);
        
        tabRowEl.appendChild(tabHeadEl);
        
        tableEl.appendChild(tabRowEl);

        for(var i = 0; i < this.storesTimes.length; i++) {
        
        var tabDataEl = document.createElement('td');
        tabDataEl.textContent = this.storesTimes[i];
        tabDataEl.style.fontWeight = "900";
        tabRowEl.appendChild(tabDataEl);
        tableEl.appendChild(tabRowEl);
        var rowCount = document.getElementById('cookies-table').rows.length;

        if(rowCount > 1) {
        document.getElementById("cookies-table").deleteRow(rowCount - 1); 
            }
        } 
        console.log(rowCount);
        var tabContainer = document.getElementById('sales-list');
        tabContainer.appendChild(tableEl);
        console.log(tableEl);
    };

    // cookieStore.prototype.salesFooter = function() {
    //     var tableEl = document.getElementById('cookies-table');
    //     tableEl.style.border="2px solid black";
    //     var tabRowEl = document.createElement('tr');
    //     var tabHeadEl = document.createElement('th');
    //     tabHeadEl.textContent = 'Total';
    //     console.log(tabHeadEl);
    //     tabRowEl.appendChild(tabHeadEl);
    //     tableEl.appendChild(tabRowEl);
            
    //     for(var row = 0; row < this.cookiesSoldPerHour[row]; row++) {
    //         var counter = cookiesSoldPerHour[row];
    //         }
    //             var sum = 1;
    //             for(col = 0; col < sum; col++) {
    //     }
    //     sum += counter;
    //     var tabDataEl = document.createElement('td');
    //     tabDataEl.textContent = sum;
    //     tabDataEl.style.fontWeight = "900";
    //     tabRowEl.appendChild(tabDataEl);
    //     tableEl.appendChild(tabRowEl);
    //     var rowCount = document.getElementById('cookies-table').rows.length;

    //     // if(rowCount > 1) {
    //     // document.getElementById("cookies-table").deleteRow(rowCount - 1); 
    //     //     }
    //     } 
        
    //     var tabContainer = document.getElementById('sales-list');
    //     tabContainer.appendChild(tableEl);
    //     console.log(tableEl);


    
var pikePlace = new cookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new cookieStore('SeaTac', 3, 24, 1.2);
var seaCent = new cookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new cookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new cookieStore('Alki', 2, 16, 4.6);

pikePlace.renderSales();
seaTac.renderSales();
seaCent.renderSales();
capHill.renderSales();
alki.renderSales();

// pikePlace.salesFooter();
// seaTac.salesFooter();
// seaCent.salesFooter();
// capHill.renderSales();
// alki.renderSales();
