$(document).ready(function(){
	var source = $('#first-template').html();
	var template = Handlebars.compile(source);

	console.log(template);

	// not in instructions, took from handlebars site
	var context = {title: 'My New Post'};
	var html = template(context);

	for(var item in productsData.productsList) {
		var toAppend = template(productsData.productsList[item]);
		$('#product-container').append(toAppend);
	}
	
});