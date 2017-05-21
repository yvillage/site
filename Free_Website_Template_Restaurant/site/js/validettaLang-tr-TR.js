(function($){
	$.fn.validettaLanguage = {};
	$.validettaLanguage = {
		init : function(){
			$.validettaLanguage.messages = {
				required	: 'שדה חובה!',
				email		: 'כתובת המייל לא תקינה!',
				number		: 'הכנס/י מספרים בלבד!',
				maxLength	: 'En fazla {count} karakter girebilirsiniz !',
				minLength	: 'En az {count} karakter girmelisiniz!',
				maxChecked	: 'En fazla {count} se?im yapabilirsiniz. L?tfen kontrol ediniz.',
				minChecked	: 'En az {count} se?im yapmal?s?n?z. L?tfen kontrol ediniz.',
				maxSelected : 'En fazla {count} se?im yapabilirsiniz. L?tfen kontrol ediniz.',
				minSelected : 'En az {count} se?im yapmal?s?n?z. L?tfen kontrol ediniz.',
				notEqual	: 'Alanlar birbiriyle oyu?muyor. L?tfen kontrol ediniz',
				different   : 'Alanlar birbirlerinden farkl? olmal?.',
				creditCard	: 'Kredi kart? numaras? ge?ersiz. L?tfen kontrol ediniz.'
			};
		}
	};
	$.validettaLanguage.init();
})(jQuery);
