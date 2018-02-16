Garuda('btn_modal_info').when('click',e=>{
	Garuda('#garudamodal').show()
	$('#modal_info').fadeIn(1000);
});

Garuda('btn_modal_warning').when('click',e=>{
	Garuda('#garudamodal').show()
	$('#modal_warning').fadeIn(1000);
});

Garuda('btn_modal_default').when('click',e=>{
	Garuda('#garudamodal').show()
	$('#modal_default').fadeIn(1000);
});

Garuda('btn_modal_success').when('click',e=>{
	Garuda('#garudamodal').show()
	$('#modal_success').fadeIn(1000);
});

Garuda('btn_modal_danger').when('click',e=>{
	Garuda('#garudamodal').show()
	$('#modal_danger').fadeIn(1000);
});

Garuda('#closeBtn').when('click',$=>{
	Garuda('#garudamodal').hide()
});