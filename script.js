let name = document.getElementById('name');
let sal = document.getElementById('sales');
let salary = document.getElementById('salary');
let but = document.getElementById('but');




but.addEventListener('click', ()=>{
	if(sales.value>100000){
		incentive = (salary.value/100) * 80;
	}
	else if(sales.value>750000){
		incentive = (salary.value/100) * 60;
	}
	else if(sales.value>500000){
		incentive = (salary.value/100) * 40;
	}
	else if(sales.value>250000){
		incentive = (salary.value/100) * 20;
	}
	console.log(incentive);
	
})





