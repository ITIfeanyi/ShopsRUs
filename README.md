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
```

```Node
npm run dev
```

<p> There will be seed data in the database with which you can use to make basic queries. </p>

<p>&nbsp; </p>

## Customer

<p>The <em>REST</em> service implement the following functionalities for Customers:</p>

<p>Gets all existing customers </p>

```Node
http://localhost:3001/api/v1/getall/customer

```

<p>Creats new customers </p>

```Node
http://localhost:3001/api/v1/createcustomers

```

<p>Finds customers by ID</p>

```Node
http://localhost:3001/api/v1/findcustomers/byid/613a41a66e1614b3b325fb2c

```

<p>Finds customers by Name</p>

```Node
http://localhost:3001/api/v1/findcustomers/byname/Ugonna

```

<details><summary class="section-title">The <em>GET Request to [http://localhost:3001/api/v1/getall/customer] returns all customers: </summary>
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
<p> The GET request above returns a status of <code>200 </code> along with an Object of data when it is successful or <code>500 </code> when an error occurs </p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title"><p><em> POST Request</em> to <em>http://localhost:3001/api/v1/createcustomers </em>, creates a new customer. </p></summary>
<div class="collapsable-details">
<pre>{
&nbsp; "name": String --<em> Required </em> <em>Must be unique </em>
&nbsp; "email" : String -- <em> Required </em> <em>Must be unique </em>
&nbsp; "is_affiliated" : Boolean -- <em>Default is false</em>
&nbsp; "is_employee" : Boolean --  <em>Default is false</em> 
&nbsp; "createdAt" : Date <em> Default is date.now </em> <em>YYYY-MM-DD </em>
}
</pre>
</div>
<p> The POST request above returns a status of <code>200 </code> along with an Object of data when it is successful or <code>500 </code> when an error occurs and <code> 400 </code></p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title">
<em> GET Request to [http://localhost:3001/api/v1/findcustomers/byid/61398131e59aea691e256622] </em>,  finds a customer by id </summary>

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
<p> The GET request above returns a status of <code>200 </code> along with an Object of data when it is successful or <code>500 </code> when an error occurs and <code> 404 </code> </p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title">
<em> GET Request to  [http://localhost:3001/api/v1/findcustomers/byname/Jude]</em>finds customer by name </summary>

<p> It is important to note that <em> Name </em> is unique for every customer</p>

<div class="collapsable-details">
<pre>{
&nbsp; "ok": true,
&nbsp; "users": [
&nbsp; &nbsp; "_id" : "6139134d629d0b71f76f92de"
&nbsp; &nbsp; "name": "Jude",
&nbsp; &nbsp; "email": "sirj@gmail.com",
&nbsp; &nbsp; "is_affiliated": false,
&nbsp; &nbsp; "is_employee": false,
&nbsp; &nbsp; "invoiceId": [],
&nbsp; &nbsp; "createdAt": "2021-09-08T19:47:25.887Z",
&nbsp; &nbsp;  "__v": 0
]
}
</div>
<p> The GET request above returns a status of <code>200 </code> along with an Object of data when it is successful or <code>500 </code> when an error occurs and <code> 404 </code> </p>
</details>

<p>&nbsp;</p>

## Discount

<p>The <em>REST</em> service implement the following functionalities for Discount:</p>

<p>Gets all existing discount in the database</p>

```Node
http://localhost:3001/api/v1/getall/discount

```

<p>Gets specific discount type </p>

```Node
http://localhost:3001/api/v1/specificpercentage/For every $100 on the bill

```

<p>Creates a new discount type </p>

```Node
http://localhost:3001/api/v1/creatediscount

```

<details><summary class="section-title"><em> GET Request to [http://localhost:3001/api/v1/getall/discount] </em>, returns all discount in the database 
</summary>
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
<p> The GET request above returns a status of <code>200 </code> along with an Object of data when it is successful or <code>500 </code> when an error occurs and </p>
</details>

<p>&nbsp;</p>

<details><summary class="section-title"><em>GET Request to [http://localhost:3001/api/v1/specificpercentage/For every $100 on the bill] </em> returns a single discount type
</summary>

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
<p> The GET request above returns a status of <code>200 </code> along with an Object of data when it is successful or <code>500 </code> when an error occurs and <code>404 </code> if it can't find it </p>

</details>

<p>&nbsp;</p>

<p>&nbsp;</p>

<details><summary class="section-title">POST Request to [<em>http://localhost:3001/api/v1/creatediscount</em>] creates a new discount type
</summary>

<div class="collapsable-details">
<pre>{
&nbsp; "discountType":"employee of the store", 
&nbsp; "discountPercentage":30
}
</pre>
</div>

<p> The POST request above returns a status of <code>200 </code> along with an Object of data when it is successful or <code>500 </code> when an error occurs</p>
</details>
 
<p>&nbsp;</p>

## Invoice

<p>The <em>REST</em> service implement the following functionalities for Invoice:</p>

<p>Creates a new Invoice</p>

```Node
http://localhost:3001/api/v1/invoice

```

<details><summary class="section-title"><em>POST Request to [http://localhost:3001/api/v1/invoice] </em>, creates a new invoice and store the Id of the invoice on the customer 
</summary>
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

<p><em>Note</em> If the customer has a boolean set to true for either <em>is_affliate or is_employee </em> the calculations would be made based on that, or if the customer is set with a date more than two years behind.</p>

<p>The POST request above returns a status of <code>200 </code> along with an Object of data when it is successful, <code>500 </code> when an error occurs or <code> 400 </code> when an error is made by the user.</p>

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
</details>

##License

[MIT]
