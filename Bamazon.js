var inquirer= require('inquirer');
var mysql= require('mysql');

var PricePay;
var currentDepartment
var SalesX;

var connection= mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon_db'
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id:" + connection.threadID)	
});

function PromptProduct(){
	connection.query('SELECT * FROM products', function(err, res){
		if(err) throw err;
		console.log("-----------------");
		console.log("-----------------");
		console.log("Current items in store");
		console.log("------------------");
		console.log("------------------");

		for(i=0; i<res.length; i++){
			console.log('Item ID:' + res[i].id + 'Product Name: ' + res[i].ProductName + 'Price: ' + '$' + res[i].Price + 'Avaiable' + res[i].StockQuantity);
		}
		order();		
	})
}

function order(){
	inquirer.prompt([{
		type: 'input',
		message: 'please input the ID of the product you want',
		name: 'id'
	},{
		type: 'input',
		message: 'how many would you like to buy?',
		name: "StockQuantity"

	},
	]).then(function (toBuy){
		var quantity= toBuy.StockQuantity;
		var ItemID= toBuy.id;
		connection.query('SELECT * FROM products WHERE id=', [toBuy.selectID], function(err, res){
			if(toBuy.StockQuantity > res[0].StockQuantity){
				console.log("sorry we do not have the product avaiable");
				console.log("Order canceled");
				nextOrder();
			}else{
				PricePay= res[0].Price * toBuy.StockQuantity;
				currentDepartment= res[0].DepartmentName * toBuy.DepartmentName;
				console.log("thank you for ordering")
				console.log("you owe $" + PricePay);
				connection.query('UPDATE products SET ? WHERE ?' , [{
					StockQuantity: res[0].StockQuantity - toBuy.StockQuantity
				nextOrder();
				};


function nextOrder(){
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'would you like to place another order?'
	}]).then(function(toBuy){
		if(toBuy.choice){
			placeorder();
		}else{
			console.log("thank you for shopping on Bamazon")
			connection.end();
		}
	})
};

PromptProduct();
		
