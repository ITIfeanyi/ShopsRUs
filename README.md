# ShopsRUs : Coding Challenge

<br>

## Installation

<p>To get started, copy the github link below: </p>

```bash

git clone https://github.com/ITIfeanyi/ShopsRUs.git

```

## Usage

```Node
npm install

#This install all neccessary dependencies
```

<p> There will be seed data in the database with which you can use to make basic queries. </p>

<p>&nbsp; </p>

<p>The <code>Consumer</code> data</p>

<p>The <em>REST</em> service implement the following functionalities for Customers:</p>

<em> GET Request: </em>

```node
#get and  return all the available customers in the database

 http://localhost:3001/api/v1/getall/customer

```

<details><summary class="section-title">The <em>GET Request returns the following: </summary>
<div class="collapsable-details">
<pre>{
&nbsp; "ok": true,
&nbsp; "users": [
&nbsp; &nbsp; "_id" : "6139134d629d0b71f76f92de"
&nbsp; &nbsp; "name": "Jude okeke",
&nbsp; &nbsp; "email": "sirj@gmail.com",
&nbsp; &nbsp; "is_affiliated": false,
&nbsp; &nbsp; "is_employee": false,
&nbsp; &nbsp; "invoiceId": [],
&nbsp; &nbsp; "createdAt": "2021-09-08T19:47:25.887Z",
&nbsp; &nbsp;  "__v": 0
]
}
</pre>
</div>
<p> The route above returns a status and <code>200 </code> and  <code>500 </code> when error occurs </p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title">
<p>The following fields are available for a <em> POST Request [createCustomer] </em> </p>
<em>http://localhost:3001/api/v1/createcustomers </em>

<div class="collapsable-details">
<pre>{
&nbsp; "name": String --<em> Required </em> <em>Must be unique </em>
&nbsp; "email" : String -- <em> Required </em> <em>Must be unique </em>
&nbsp; "is_affiliated" : Boolean -- <em>Default is false</em>
&nbsp; "is_employee" : Boolean --  <em>Default is false</em> 
&nbsp; "createdAt" : Date <em> Default is date.now </em> <em>YYYY:MM:DD </em>
}
</pre>
</div>
<p> The route above returns a status and <code>200 </code> and <code>400 </code>, <code>500 </code> when error occurs </p>

</details>

<p>&nbsp;</p>

<details><summary class="section-title">
<p><em> GET Request: </em> This route finds customer by id  </p>
<em>http://localhost:3001/api/v1/findcustomers/byid/61398131e59aea691e256622 </em>

<div class="collapsable-details">
<pre>{
&nbsp; "ok": true,
&nbsp; "users": [
&nbsp; &nbsp; "_id" : "6139134d629d0b71f76f92de"
&nbsp; &nbsp; "name": "Jude okeke",
&nbsp; &nbsp; "email": "sirj@gmail.com",
&nbsp; &nbsp; "is_affiliated": false,
&nbsp; &nbsp; "is_employee": false,
&nbsp; &nbsp; "invoiceId": [],
&nbsp; &nbsp; "createdAt": "2021-09-08T19:47:25.887Z",
&nbsp; &nbsp;  "__v": 0
]
}
</div>
<p> The route above returns a status and <code>200 </code> and  <code>500 </code>, <code>404 </code> when error occurs </p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title">
<p><em> GET Request: </em> This route finds customer by name  </p>

<p> It is important to note that <em> Name </em>  are unique </p>

<em>http://localhost:3001/api/v1/findcustomers/byname/Ifeanyi igweh </em>

<div class="collapsable-details">
<pre>{
&nbsp; "ok": true,
&nbsp; "users": [
&nbsp; &nbsp; "_id" : "6139134d629d0b71f76f92de"
&nbsp; &nbsp; "name": "Jude okeke",
&nbsp; &nbsp; "email": "sirj@gmail.com",
&nbsp; &nbsp; "is_affiliated": false,
&nbsp; &nbsp; "is_employee": false,
&nbsp; &nbsp; "invoiceId": [],
&nbsp; &nbsp; "createdAt": "2021-09-08T19:47:25.887Z",
&nbsp; &nbsp;  "__v": 0
]
}
</div>
<p> The route above returns a status and <code>200 </code> and  <code>500 </code>, <code>404 </code> when error occurs </p>

</details>

<p>&nbsp;</p>

```node
#gets and return all the available discount in the database

http://localhost:3001/api/v1/getall/discount

```

<details><summary class="section-title">
<p><em> GET Request: </em> This route returns the total discount in the database </p>

<div class="collapsable-details">
<pre>{
&nbsp; "ok": true,
&nbsp; "allDiscount": [{ 
&nbsp; &nbsp; "_id" : "61384c29542890846cd84d66"
&nbsp; &nbsp; "discountType": "affiliate of the store",
&nbsp; &nbsp; "discountPercentage":  10,
&nbsp; &nbsp;  "__v": 0
},
{ 
&nbsp; &nbsp; "_id" : "61384d36542890846cd84d69"
&nbsp; &nbsp; "discountType": "For every $100 on the bill",
&nbsp; &nbsp; "discountPercentage":  5,
&nbsp; &nbsp;  "__v": 0
},
{ 
&nbsp; &nbsp; "_id" : "6139398e275226c26253324a"
&nbsp; &nbsp; "discountType": "customer for over 2 years",
&nbsp; &nbsp; "discountPercentage":  5,
&nbsp; &nbsp;  "__v": 0
},
{ 
&nbsp; &nbsp; "_id" : "6139405c7d2262576a68a472"
&nbsp; &nbsp; "discountType": "employee of the store",
&nbsp; &nbsp; "discountPercentage":  30,
&nbsp; &nbsp;  "__v": 0
}
]
}
</div>
<p> The route above returns a status and <code>200 </code> and <code>500 </code> when error occurs </p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title">
<p>The following fields are available for a <em> GET Request to discount </em> </p>

<em>http://localhost:3001/api/v1/specificpercentage/For every $100 on the bill</em>

<div class="collapsable-details">
<pre>{
&nbsp; "ok": true,
&nbsp; "allDiscount": [{ 
&nbsp; &nbsp; "_id" : "61384d36542890846cd84d69"
&nbsp; &nbsp; "discountType": "For every $100 on the bill",
&nbsp; &nbsp; "discountPercentage":  5,
&nbsp; &nbsp;  "__v": 0
},
}
</pre>
</div>
<p> The route above returns a status and <code>200 </code> and  <code>500 </code> when error occurs </p>

</details>

<p>&nbsp;</p>

<p>&nbsp;</p>

<details><summary class="section-title">
<p>The following fields are available for a <em> POST Request [discount]</em> </p>

<em>http://localhost:3001/api/v1/creatediscount</em>

<div class="collapsable-details">
<pre>{
&nbsp; "discountType":"employee of the store", 
&nbsp; "discountPercentage":30
}
</pre>
</div>

<p> The route above returns a status of 200. We have 4 seed data inside the database </p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title">
<p>The following fields are available for a <em> POST Request [invoice] </em> </p>
<em>http://localhost:3001/api/v1/invoice </em>

<div class="collapsable-details">
<pre>{
&nbsp; "bill":[{ 
&nbsp; &nbsp; "item":"dstv",
&nbsp; &nbsp; "amount":390
},
{&nbsp; &nbsp; "item":"electricity",
&nbsp; &nbsp; "amount":300
},
{&nbsp; &nbsp; "item":"groceries",
&nbsp; &nbsp; "amount":300
},
],
&nbsp; "customer_id":"61398131e59aea691e256622"
}
</pre>
</div>

<p><em>Note</em> If the customer has a boolean set to true for either <em>is_affliate or is_employee </em> the calculations would be made based on that, or if the customer is set with a date more than two behind.</p>

<p> This route above will return a status of <code>200 </code> with the following field </p>

<div class="collapsable-details">
<pre>{
&nbsp; "ok": true,
&nbsp; "invoice": [
&nbsp; &nbsp; {
&nbsp; &nbsp; "item": "dstv",
&nbsp; &nbsp; "amount": 390
&nbsp; &nbsp; },
&nbsp; &nbsp; {
&nbsp; &nbsp; "item": "electricity"
&nbsp; &nbsp; "amount": 300
&nbsp; &nbsp; },
&nbsp; &nbsp;{
&nbsp; &nbsp; "item": "groceries"
&nbsp; &nbsp; "amount": 300
&nbsp; &nbsp; },
]
&nbsp; "totalAmountBeforeDiscount": 990
&nbsp; "discountValue": 34.5,
&nbsp; "totalAmountAfterDiscountSubracted": 955.5,
&nbsp; "user_iscreatedOverTwoYear": true,
&nbsp; "users": [
&nbsp; &nbsp; "_id" : "6139134d629d0b71f76f92de"
&nbsp; &nbsp; "name": "Jude okeke",
&nbsp; &nbsp; "email": "sirj@gmail.com",
&nbsp; &nbsp; "is_affiliated": false,
&nbsp; &nbsp; "is_employee": false,
&nbsp; &nbsp; "invoiceId": ["6139b9381f600f33607db83e"],
&nbsp; &nbsp; "createdAt": "2021-09-08T19:47:25.887Z",
&nbsp; &nbsp;  "__v": 0
}
</div>
</details>

## License

[MIT](https://choosealicense.com/licenses/mit/)
