var firstPike = {
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,

    custPerHr: function() {
        num = Math.floor(Math.random() * Math.floor()) 
    },

    cookPurch: function() {
        cook = num * this.avgSale
    }
}

var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,

    custPerHr: function() {
        num = Math.floor(Math.random() * Math.floor()) 
    },

    cookPurch: function() {
        cook = num * this.avgSale
    }
}

var seaCent = {
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,

    custPerHr: function() {
        num = Math.floor(Math.random() * Math.floor()) 
    },

    cookPurch: function() {
        cook = num * this.avgSale
    }
}

var capHill = {
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,

    custPerHr: function(num) {
        return Math.floor(Math.random() * Math.floor()) * this.avgSale
    },

    cookPurch: function() {
        cook = num * this.avgSale
    }
}

var alki = {
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,

    custPerHr: function(num) {
        return Math.floor(Math.random() * Math.floor()) * this.avgSale
    },

    cookPurch: function() {
        cook = num * this.avgSale
    }
}