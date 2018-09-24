var firstPike = {
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,

    cookPerHr: function() {
        var list = document.createElement('ul');//Create list element

        for(var i = 0; i < 15; i++) {
            // Create the list item:
            var item = document.createElement('li');

            num1 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            return num1;
            myArr1 = [];
            myArr1.push(num1)

            // Placing contents:
            item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr1[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);
        }
    },
}

firstPike.cookPerHr();


var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,

    cookPerHr: function() {
        var list = document.createElement('ul');//Create list element

        for(var i = 0; i < 15; i++) {
            // Create the list item:
            var item = document.createElement('li');

            num2 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            return num2;
            myArr2 = [];
            myArr2.push(num2)

            // Placing contents:
            item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr2[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);
        }
    },
}

    


var seaCent = {
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,

    cookPerHr: function() {
        var list = document.createElement('ul');//Create list element

        for(var i = 0; i < 15; i++) {
            // Create the list item:
            var item = document.createElement('li');

            num3 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            return num3;
            myArr3 = [];
            myArr3.push(num3)

            // Placing contents:
            item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr3[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);
        }
    },
}


var capHill = {
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,

    cookPerHr: function() {
        var list = document.createElement('ul');//Create list element

        for(var i = 0; i < 15; i++) {
            // Create the list item:
            var item = document.createElement('li');

            num4 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            return num4;
            myArr4 = [];
            myArr4.push(num4)

            // Placing contents:
            item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr4[i] + ' cookies'));

            // Add it to list:
            list.appendChild(item);
        }
    },
}


var alki = {
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,

    cookPerHr: function() {
        var list = document.createElement('ul');//Create list element

        for(var i = 0; i < 15; i++) {
            // Create the list item:
            var item = document.createElement('li');

            num5 = Math.floor(Math.random() * 10) * Math.ceil(this.avgSale);
            return num5;
            myArr5 = [];
            myArr5.push(num5)

            //Placing contents:
            item.appendChild(document.createTextNode((18 + i - 12) + ' am: ' + myArr5[i] + ' cookies'));
            // Add to the list:
            list.appendChild(item);
        }
    },
}
