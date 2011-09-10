$('document').ready( function(){

	var colors = [ '#74FF00', '#00FF8D', '#3D6661', '#00162B', '#E39F00', '#B0BD00', '#6DD627', '#00C7BD', '#007175', '#330023', '#7EFF05', '#00D672', '#50A79B', '#95B296', '#D0D26F', '#D9A387', '#FF4D00', '#C74E26', '#BF6F54', '#FF2229', '#E6A700', '#D41C1D' ];
	var fonts = [ 'NotCourier', 'VT323', 'Lato', 'Lato-Italic', 'UniversElse', 'Black_Ops_One', 'Aldrich', 'Changa_One', 'Antic', 'Delius_Swash_Caps', 'Julee', 'Kelly', 'Love_Ya_Like_A_Sister', 'Merienda_One', 'Monoton', 'Passero_One', 'Numans', 'Podkova', 'Rationale', 'Short_Stack', 'UnifrakturCook', 'Voltaire'  ];

	var bgtimer = Math.floor(Math.random() * 550)
	var fgtimer = Math.floor(Math.random() * 200)

/*	var divs = title.split(' ');
	$.each(divs, function(i, div){
		divs.splice(i,1,'<div class="word">' + div + '</div>');
	});

	unsplit = divs.join('').toString();
	$('h1.process').replaceWith('<h1 class="process" contenteditable="true">' + unsplit + '</h1>');

*/
	function fontify(){
		var title = $('.process').text();
		var overtitle = title.split('');

		$.each(overtitle, function(i, ch){
//			if(ch == " ")
				overtitle.splice(i,1,'<span>' + ch + '</span>');
		});	

		$('h1.process').replaceWith('<h1 class="process" contenteditable="true">' + overtitle.join('').toString() + '</h1>');
	}

	fontify();

	var bgInterval = setInterval(function(){
		var rand1 = Math.floor(Math.random() * colors.length);
		$('#full').css('background-color', colors[rand1]);
	}, 450);
	
	var fgInterval = setInterval(function(){
		var rand2 = Math.floor(Math.random() * colors.length);
		var rand3 = Math.floor(Math.random() * fonts.length);

		$('.process').css({
				'color' : colors[rand2], 
		});

		$('span').each(function(){
			$(this).css({
				'font-family' : fonts[rand3],
			});
			rand3 = Math.floor(Math.random() * fonts.length);
		});
	}, 137);

	$('[contenteditable]').live('focus', function() {
	    var $this = $(this);
	    $this.data('before', $this.text());
		console.log($this.data('before'));
	//	clearInterval(fgInterval);
	//	clearInterval(bgInterval);
	}).live('blur', function() {
	    var $this = $(this);
	    if ($this.data('before') !== $this.text()) {
	        $this.data('before', $this.text());
			fontify();
			console.log($this.text());
			$.post("/add_statement", { statement: $this.text()  } );
	    }
	});

});
