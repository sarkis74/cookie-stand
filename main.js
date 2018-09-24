var firstPike = {
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,

    cookPerHr: function() {
        //Create list element
        var list = document.createElement('ul');

        var myArr1 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num1 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr1.push(num1);
            console.log(myArr1);

            // Add the item text
            list.innerHTML = myArr1[i];

            // Placing contents:
            //item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr1[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);

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
        var list = document.createElement('ul');

        var myArr2 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num2 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr2.push(num2);
            console.log(myArr2);

            // Add the item text
            list.innerHTML = myArr2[i];

            // Placing contents:
            //item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr2[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);

        } return myArr2;
    },
}

    


var seaCent = {
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,

    cookPerHr: function() {
        //Create list element
        var list = document.createElement('ul');

        var myArr3 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num3 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr3.push(num3);
            console.log(myArr3);

            // Add the item text
            list.innerHTML = myArr3[i];

            // Placing contents:
            //item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr3[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);

        } return myArr3;
    },
}


var capHill = {
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,

    cookPerHr: function() {
        //Create list element
        var list = document.createElement('ul');

        var myArr4 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num1 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr4.push(num4);
            console.log(myArr4);

            // Add the item text
            list.innerHTML = myArr4[i];

            // Placing contents:
            //item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr4[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);

        } return myArr4;
    },
}


var alki = {
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,

    cookPerHr: function() {
        //Create list element
        var list = document.createElement('ul');

        var myArr5 = [];

        for(var i = 0; i < 15; i++) {
            // Creates the list item:
            var item = document.createElement('li');

            // Creates random number of cookies sold each hour and stores all 15 results in array
            num5 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            
            myArr5.push(num1);
            console.log(myArr1);

            // Add the item text
            list.innerHTML = myArr5[i];

            // Placing contents:
            //item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr5[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);

        } return myArr5;
    },
}
