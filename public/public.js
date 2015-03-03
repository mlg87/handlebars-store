$(document).ready(function(){
	var initGet = $('#first-template').html();
	var initTemplate = Handlebars.compile(initGet);

	console.log(initTemplate);

	// not in instructions, took from handlebars site
	// var context = {title: 'My New Post'};
	// var html = initTemplate(context);

	for(var item in productsData.productsList) {
		var toAppend = initTemplate(productsData.productsList[item]);
		$('#product-container').append(toAppend);
	}

	/*$(document).on('click', '#wishlist-add', function() {
		var itemAdded = $(this).closest('.product');
		var toAppend = itemAdded.find('#wishlist-add').remove();
		var rmvBtn = itemAdded.append('<button type="button" class="btn btn-sm btn-danger" id="rmvBtn">Remove from Wishlist</button>');
		$('#wishlist').append(itemAdded);
	});*/

	$(document).on('click', '#wishlist-add', function() {
		var addSource = $('#wishlist-template').html();
		var wishlistTemplate = Handlebars.compile(addSource);
		var el = $(this);
		var product = productsData.productsList.filter(function(item) {
			return el.siblings('h3').text() === item.title;
		});
		var toAppend = wishlistTemplate(product[0]);
		$('#wishlist').append(toAppend);
	});

	$(document).on('click', '#rmvBtn', function() {
		console.log($(this).closest('.product'));
		$(this).closest('.product').remove();
		console.log('the remove button was clicked');
		// $('.product-container').append(itemToRmv);
	});
	
});