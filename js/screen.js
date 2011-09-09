$('document').ready( function(){

	var colors = [ '#74FF00', '#00FF8D', '#3D6661', '#00162B', '#E39F00', '#B0BD00', '#6DD627', '#00C7BD', '#007175', '#330023', '#7EFF05', '#00D672', '#50A79B', '#95B296', '#D0D26F', '#D9A387', '#FF4D00', '#C74E26', '#BF6F54', '#FF2229', '#E6A700', '#D41C1D' ];
	var fonts = [ 'NotCourier', 'VT323', 'Lato', 'Lato-Italic', 'UniversElse', 'Black_Ops_One', 'Aldrich', 'Changa_One', 'Antic', 'Delius_Swash_Caps', 'Julee', 'Kelly', 'Love_Ya_Like_A_Sister', 'Merienda_One', 'Monoton', 'Passero_One', 'Numans', 'Podkova', 'Rationale', 'Short_Stack', 'UnifrakturCook', 'Voltaire'  ];


	setInterval(function(){

		var rand1 = Math.floor(Math.random() * colors.length);
		var rand2 = Math.floor(Math.random() * colors.length);
		var rand3 = Math.floor(Math.random() * fonts.length);

		$('#full').css('background-color', colors[rand1]);

		$('.process').css({
//				'background-color' : colors[rand1], 
				'color' : colors[rand2], 
				'font-family' : fonts[rand3] 
		});
	}, 250);
});
