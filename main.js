var firstPike = {
    name: "First and Pike",
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,

    cookPerHr: function() {
        //Create list element
        // var header = document.createElement('h6');   // Create a <h2> element
        // header.textContent = this.name

        var listContainer = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(listContainer);

        // var header = document.createElement('h6');   // Create a <h2> element
        // header.textContent = this.name;
        // document.getElementsByTagName('h6')[0].appendChild(header);                                                   
        // var text = document.createTextNode("1st and Pike");     // Create a text node
        // header.appendChild(text);   // Append the text to <h6> 

        var listEl = document.createElement('ul');
        document.getElementsByTagName('ul')[0].appendChild(listEl);

        listContainer.appendChild(listEl);

        var myArr1 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
            
            myArr1.push(num1);
            console.log(myArr1);

            // Add the item text
            var meridiem = 'am';
            if(i > 4) {
                meridiem = 'pm';
            }
            var mod = (18 + i) % 12; 
            var line = mod + meridiem + ' : ' + myArr1[i] + ' cookies';
            // list.innerHTML = myArr1[i];

            // Placing contents:
            item.innerHTML = line;


            //var newText = document.createTextNode(line);
            listEl.appendChild(item);

        } return myArr1;
    },
};

firstPike.cookPerHr();


var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,

    cookPerHr: function() {
        //Create list element
        var listContainer = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(listContainer);

        // var header = document.createElement('h6');   // Create a <h2> element
        // document.getElementsByTagName('h6')[0].appendChild(header);                                                   
        // var text = document.createTextNode("SeaTac Airport");     // Create a text node
        // header.appendChild(text);   // Append the text to <h2> 

        var listEl = document.createElement('ul');
        document.getElementsByTagName('ul')[0].appendChild(listEl);

        listContainer.appendChild(listEl);

        var myArr2 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num2 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr2.push(num2);
            console.log(myArr2);

            // Add the item text
            var meridiem = 'am';
            if(i > 4) {
                meridiem = 'pm';
            }
            var mod = (18 + i) % 12; 
            var line = mod + meridiem + ' : ' + myArr2[i] + ' cookies';
            // list.innerHTML = myArr1[i];

            // Placing contents:
            item.innerHTML = line;


            //var newText = document.createTextNode(line);
            listEl.appendChild(item);

        } return myArr2;
    },
}

seaTac.cookPerHr();

var seaCent = {
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,

    cookPerHr: function() {
        //Create list element
        var listContainer = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(listContainer);

        // var header = document.createElement('h6');   // Create a <h2> element
        // document.getElementsByTagName('h6')[0].appendChild(header);                                                   
        // var text = document.createTextNode("Seattle Center");     // Create a text node
        // header.appendChild(text);   // Append the text to <h2> 

        var listEl = document.createElement('ul');
        document.getElementsByTagName('ul')[0].appendChild(listEl);

        listContainer.appendChild(listEl);

        var myArr3 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num3 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr3.push(num3);
            console.log(myArr3);

            // Add the item text
            var meridiem = 'am';
            if(i > 4) {
                meridiem = 'pm';
            }
            var mod = (18 + i) % 12; 
            var line = mod + meridiem + ' : ' + myArr3[i] + ' cookies';
            // list.innerHTML = myArr1[i];

            // Placing contents:
            item.innerHTML = line;


            //var newText = document.createTextNode(line);
            listEl.appendChild(item);

        } return myArr3;
    },
}

seaCent.cookPerHr();


var capHill = {
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,

    cookPerHr: function() {
        //Create list element
        var listContainer = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(listContainer);

        // var header = document.createElement('h6');   // Create a <h2> element
        // document.getElementsByTagName('h6')[0].appendChild(header);                                                   
        // var text = document.createTextNode("Capitol Hill");     // Create a text node
        // header.appendChild(text);   // Append the text to <h2>

        var listEl = document.createElement('ul');
        document.getElementsByTagName('ul')[0].appendChild(listEl);

        listContainer.appendChild(listEl);

        var myArr4 = [];

        for(var i = 0; i < 15; i++) {
           // Creates the list item:
           var item = document.createElement('li');

           // Creates random number of cookies sold each hour and stores all 15 results in array
           num4 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
           
           myArr4.push(num4);
           console.log(myArr4);

           // Add the item text
           var meridiem = 'am';
           if(i > 4) {
               meridiem = 'pm';
           }
           var mod = (18 + i) % 12; 
           var line = mod + meridiem + ' : ' + myArr4[i] + ' cookies';
           // list.innerHTML = myArr4[i];

           // Placing contents:
           item.innerHTML = line;


           //var newText = document.createTextNode(line);
           listEl.appendChild(item);

        } return myArr4;
    },
}

capHill.cookPerHr();

var alki = {
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,

    cookPerHr: function() {
           //Create list element
        var listContainer = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(listContainer);

        // var header = document.createElement('h6');   // Create a <h2> element
        // header.appendChild(document.createTextNode('Alki'));
        // var text = document.createTextNode("Alki");     // Create a text node
        // header.appendChild(text);   // Append the text to <h2>

        var listEl = document.createElement('ul');
        document.getElementsByTagName('ul')[0].appendChild(listEl);

        listContainer.appendChild(listEl);

        var myArr5 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num5 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr5.push(num5);
            console.log(myArr5);

            // Add the item text
            var meridiem = 'am';
            if(i > 4) {
                meridiem = 'pm';
            }
            var mod = (18 + i) % 12; 
            var line = mod + meridiem + ' : ' + myArr5[i] + ' cookies';
            // list.innerHTML = myArr1[i];

            // Placing contents:
            item.innerHTML = line;


            //var newText = document.createTextNode(line);
            listEl.appendChild(item);

        } return myArr5;
    },
}

alki.cookPerHr();

