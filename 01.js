	class Product{
		constructor(name, callories){
			this.title = name;
			this.callories = callories;	
		}
	}
	class Dish{
		constructor(name){
			this.name = name;
			this.product = [];		
		}
		addProduct(product, weight){
			this.productWeight = weight;
			this.product.push({...product,weight:weight});

		}
		getCallories(){
			this.productCallories = 0;
			for(const key of this.product){
				const i = key.callories/100;
				const j = i*key.weight;
			}
			 return this.productCallories;
		}
	}
	class CaloriesCalculator{
		constructor(){
			this.dish = [];
		}
		addDish(dish){
			this.dish.push(dish);
		}
		getTotalCalories(){			
			this.sum = 0;
			for(const key of this.dish[0].product){				
				let i = key.callories/100;
	
				this.sum+=key.callories/100*key.weight
			}
			return this.sum;
		}
		getAllDishesInfo(){
			const info = `                        ${this.dish[0].name } - 1 порция, ${this.sum} ккал:
			*${this.dish[0].product[0].title}, ${this.dish[0].product[0].weight} гр., ${this.dish[0].product[0].callories/100*this.dish[0].product[0].weight} ккал
			*${this.dish[0].product[1].title}, ${this.dish[0].product[1].weight} гр., ${this.dish[0].product[1].callories/100*this.dish[0].product[1].weight} ккал
			*${this.dish[0].product[2].title}, ${this.dish[0].product[2].weight} гр., ${this.dish[0].product[2].callories/100*this.dish[0].product[2].weight} ккал
			*${this.dish[0].product[3].title}, ${this.dish[0].product[3].weight} гр., ${this.dish[0].product[3].callories/100*this.dish[0].product[3].weight} ккал`;
return info
		}
	}
	

const meat = new Product('Филе говядина', 158);

const rice = new Product('Рис', 130);

const onion = new Product('Лук', 40);

const carrot = new Product('Морковь', 41);

 

const plov = new Dish('Плов');

plov.addProduct(meat, 200);

plov.addProduct(rice, 150);

plov.addProduct(onion, 25);

plov.addProduct(carrot, 25);


 

const calculator = new CaloriesCalculator();

calculator.addDish(plov);

const calories = calculator.getTotalCalories(); 

console.log(calories); // должно вывести 373.25 
 

const totals = calculator.getAllDishesInfo();

console.log(totals); 