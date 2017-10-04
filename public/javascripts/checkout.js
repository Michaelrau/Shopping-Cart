var stripe = new Stripe('pk_test_cRhw0Z6dGDMTtXSt5OD9D6Tt');
var $form = $('#checkout-form');
$form.submit(function(event){
	$form.find('button').prop('disabled', true);
	return true;
});