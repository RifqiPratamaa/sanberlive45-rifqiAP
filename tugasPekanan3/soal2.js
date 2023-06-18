var jsonData = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
};

function getTotalQty(jsonData, productCode) {
  var totalQty = 0;
  
  for (var i = 0; i < jsonData.data.length; i++) {
    var item = jsonData.data[i];
    if (item.productCode === productCode) {
      totalQty += item.quantity;
    }
  }
  return totalQty;
}

var productCode = "FBR00040101";
var productName = "(FloBrand-DressBSPink)";
var totalQty = getTotalQty(jsonData, productCode);
console.log("Total quantity dari productCode", productCode, productName, "is", totalQty);