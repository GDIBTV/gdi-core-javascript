var purchases = [ 
    { item: "Tote bag", timestamp: "Jan 21 2016 09:12:31 GMT-0500 (EST)", amount: 45.99 },
    { item: "Seitan", timestamp: "Jan 22 2016 18:47:22 GMT-0500 (EST)", amount: 15.76 },
    { item: "Bicycle", timestamp: "Jan 21 2016 12:45:47 GMT-0500 (EST)", amount: 100.00 },
    { item: "PBR", timestamp: "Jan 17 2016 01:12:33 GMT-0500 (EST)", amount: 35.98 },
    { item: "Sriracha", timestamp: "Jan 14 2016 14:18:12 GMT-0500 (EST)", amount: 24.99 },
    { item: "McSweeney's", timestamp: "Jan 07 2016 11:11:11 GMT-0500 (EST)", amount: 78.90 },
    { item: "Schlitz", timestamp: "Jan 13 2016 13:45:12 GMT-0500 (EST)", amount: 22.87 },
    { item: "Hoodie", timestamp: "Jan 24 2016 05:14:22 GMT-0500 (EST)", amount: 50.00 },
    { item: "Cardigan", timestamp: "Jan 22 2016 13:33:32 GMT-0500 (EST)", amount: 45.67 },
    { item: "Narwhal Heirloom", timestamp: "Jan 21 2016 09:01:00 GMT-0500 (EST)", amount: 134.00 } 
];

function salesReport(){
    var reportList = document.createElement('ul');
    var startDate = new Date("Jan 21 2016 09:00:00 GMT-0500 (EST)").getTime();

    for (var i = 0; i < purchases.length; i++){
        var time = new Date(purchases[i].timestamp).getTime();
        if (purchases[i].amount > 40 && time > startDate) {
            var reportItem = document.createElement('li');
            reportItem.innerHTML = purchases[i].item;
            reportList.appendChild(reportItem);
        }
    }

    if (reportList.childNodes.length === 0) {
        var reportItem = document.createElement('li');
        reportItem.innerHTML = "There were no big sales in the past three days";
        reportList.appendChild(reportItem);
    }

    document.body.appendChild(reportList);
}