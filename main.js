//1. reference a containing element - document.getElementById()
//2. Create a new element - document.createElement()
//3. Give that element content - element.textContent
//4. append that element to the containing element parentElement.appendChild(newChildElement)

var allStores = [];
var storesTimes = [];

var CookieStore = function(name, minCust, maxCust, avgSale) {
    this.name = name;
    this.min = minCust;
    this.max = maxCust;
    this.avgSale = avgSale;
    this.cookiesSoldPerHour = [];
    this.storesTimes = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Daily Location Total'];
    this.allStores = [pikePlace, seaTac, seaCent, capHill, alki];
};
    
    CookieStore.prototype.calcCustPerHour = function() { //This proto is to generate random sales qty
        var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return Math.round(randomAmount * this.avgSale);
    };

    CookieStore.prototype.calculateCookiesPerHour = function() { //This proto is to call previous proto and store values in array
        var total = 0;
        for(var i = 0; i < 15; i++) {  
            this.cookiesSoldPerHour.push(this.calcCustPerHour()); //
            cookieSales.push(this.cookiesSoldPerHour[i])
            total += this.cookiesSoldPerHour[i];
            } 
        this.cookiesSoldPerHour.push(total);
        cookieSales.push(total);
    };
    
    CookieStore.prototype.renderHours = function() { //This proto is to fetch store hrs/sales and avoid duplicate data
        this.calculateCookiesPerHour();
            if(!this.cookiesSoldPerHour.length){ //Avoiding duplicate array items
                this.calculateCookiesPerHour(); //Placing cookies sold each our array
            }
        }; 
        
    CookieStore.prototype.renderSales = function() {
        this.renderHours();
        this.salesHeader();
        var tableEl = document.getElementById('cookies-table');
        tableEl.style.border="2px solid black";
        var tabRowEl = document.createElement('tr');
        var tabHeadEl = document.createElement('th');
        tabHeadEl.textContent = this.name;
        tabRowEl.appendChild(tabHeadEl);
        tableEl.appendChild(tabRowEl);

            for(var i = 0; i < 16; i++) {
                tabRowEl.style.borderBottom = "thick solid #0000FF"; 
                var tabDataEl = document.createElement('td');
                //Create table-data cells and fill with store values
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
    };

    CookieStore.prototype.salesHeader = function() {
        var tableEl = document.getElementById('cookies-table');
        tableEl.style.border="2px solid black";
        var tabRowEl = document.createElement('tr');
        var tabHeadEl = document.createElement('th');
        tabHeadEl.textContent = '';
        //Appending child 'table-header' to parent 'table-row'
        tabRowEl.appendChild(tabHeadEl);
        //Appending child 'table-row' to parent 'table'
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
        var tabContainer = document.getElementById('sales-list');
        tabContainer.appendChild(tableEl);
    };

     var salesFooter = function() {
        //Reference containing element: 'table'
        //var tabContainer = document.getElementById('sales-list');
        var tableEl = document.getElementById('cookies-table');
        tableEl.style.border="2px solid black";
        //Creating new elements (table: row, headers)
        var tabRowEl = document.createElement('tr');
        var tabHeadEl = document.createElement('th');
        tabHeadEl.textContent = 'Total';
        //console.log(tabHeadEl);
        //Appending child 'table-header' to parent 'table-row'
        tabRowEl.appendChild(tabHeadEl);
        //Appending child 'table-row' to parent 'table'
        tableEl.appendChild(tabRowEl);
        
        //var sumTotal = [];
        var arrLength = storesTimes.length + 1;
        var sumTotalSize = arrLength;
        //Nested array to sort original array into columns and rows
        cookieSales.forEach((item)=>{ //Iterating through array items
            if(!sumTotal.length || sumTotal[sumTotal.length - 1].length === sumTotalSize) //Conditional to set limit to mumber of table columns 
                sumTotal.push([]); // Pushes smaller arrays into larger array
                sumTotal[sumTotal.length - 1].push(item); //Pushes array items into small arrays
                });

        var sum = 0;
            for(var i = 0; i < arrLength; i++) { //Containing array with i as columns
                sum = 0;
                    for(var j = 0; j < allStores.length; j++) { //Contained arrays with j as rows
                    //var tabDataEl = document.createElement('td');
                    sum += sumTotal[j][i]; //Indices captures [r][c] item
                   
        }
        var tabDataEl = document.createElement('td');
        tabDataEl.textContent = sum;  
        tabRowEl.appendChild(tabDataEl);
        sumTotal.push(sum);
        
    }
        var tabContainer = document.getElementById('sales-list');
        tabContainer.appendChild(tableEl);
    };
        
var cookieSales = [];
var sumTotal = [];
    
var pikePlace = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac', 3, 24, 1.2);
var seaCent = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);
allStores = [pikePlace, seaTac,seaCent, capHill, alki];
storesTimes = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//===================================
//Write function to render all stores
var renderAllStores = function() {
    for(var i in allStores) {
        allStores[i].renderSales();
    } 
//salesFooter();
};

renderAllStores();

//sumTotal.splice(5, 16);
console.log(cookieSales.length);
console.log(allStores.length);

rowsSum = allStores.length;
//console.log(rowsSum);

// This is the event handler, 4 arguments are required of user
var handlerStoreCreate = function(eventShowSales) {
    eventShowSales.preventDefault();
    eventShowSales.stopPropagation();
    var storeName = eventShowSales.target['store-name'].value;
    var miniCust = eventShowSales.target['minimum-customers'].value;
    var maxiCust = eventShowSales.target['maximum-customers'].value;
    var averageSales = eventShowSales.target['average-sales'].value;
    var NewStore = new CookieStore(storeName,miniCust,maxiCust,averageSales);
    allStores.push(NewStore); //Adds new store to stores array
    console.log(NewStore.cookiesSoldPerHour);
    renderAllStores();
    //     for(var i = 0; i < cookieSales.length + 1; i++) {
    //     cookieSales.splice(0, cookieSales.length); //Splice for deleting duplicate store sales values
    // }
    cookieSales.splice(0, cookieSales - NewStore.length);
    console.log(cookieSales.length);
    salesFooter();
        for(var i = 1; i < allStores.length; i++) { //Loop is to delete duplicate rows
        document.getElementById("cookies-table").deleteRow(i); 
    }
};

var salesForm = document.getElementById('store-generator-form');
salesForm.addEventListener('submit', handlerStoreCreate);

    
