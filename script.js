
$(document).ready(function () {
	$("div#extra").removeClass("hidden");
	$('#game').hide();

	var tile1 = $('#square1');
	var tile2 = $('#square2');
	var tile3 = $('#square3');
	var tile4 = $('#square4');
	var tile5 = $('#square5');
	var tile6 = $('#square6');
	var tile7 = $('#square7');
	var tile8 = $('#square8');
	var tile9 = $('#square9');

	var canPlay = false;
	var win = false;
	var scorePlayer = 0;

	if (localStorage.getItem("tictacplayerscore") === null) {

		var highscore = 0;
		var cpuhighscore = 0;
	}
	else {
		var highscore = JSON.parse(localStorage.tictacplayerscore);
		var cpuhighscore = JSON.parse(localStorage.tictaccpuscore);
	}

	function keepscore() {
		localStorage.tictacplayerscore = JSON.stringify(highscore);
		localStorage.tictaccpuscore = JSON.stringify(cpuhighscore)
	}

	$("#playerscore").html(String(highscore));
	$("#cpuscore").html(String(cpuhighscore));

	$("#button").click(function () {
		$("#game").slideDown("slow", clearBoard());
		$('#button').slideUp(("fast"));
	})

	function validatePlay(squareplayed) {
		if ($(squareplayed).hasClass('open')) {
			canPlay = true;
		} else {
			canPlay = false;
			return false;
		}
	}

	$('.tile').on('click', function PlayerPlay() {

		validatePlay(this);

		if (canPlay) {
			$(this).removeClass('open');
			$(this).addClass('occupied');
			$(this).html("X");
			$(this).addClass('Player');

			draw();

			winner()
			CPUTurn();

		} else {
			alert("That location is already occupied, please choose another one.");
		}
	})

	function draw() {

		if (!($('.tile').hasClass('open'))) {
			alert("Draw! Try again!");
			clearBoard();
		}
	}

	function winner() {

		if (tile1.hasClass('Player') && tile2.hasClass('Player') && tile3.hasClass('Player')) {
			winNotif("X");
		} else if (tile1.hasClass('CPU') && tile2.hasClass('CPU') && tile3.hasClass('CPU')) {
			winNotif("O");
		}

		else if (tile4.hasClass('Player') && tile5.hasClass('Player') && tile6.hasClass('Player')) {
			winNotif("X");
		} else if (tile4.hasClass('CPU') && tile5.hasClass('CPU') && tile6.hasClass('CPU')) {
			winNotif("O");
		}

		else if (tile7.hasClass('Player') && tile8.hasClass('Player') && tile9.hasClass('Player')) {
			winNotif("X");
		} else if (tile7.hasClass('CPU') && tile8.hasClass('CPU') && tile9.hasClass('CPU')) {
			winNotif("O");
		}

		else if (tile1.hasClass('Player') && tile4.hasClass('Player') && tile7.hasClass('Player')) {
			winNotif("X");
		} else if (tile1.hasClass('CPU') && tile4.hasClass('CPU') && tile7.hasClass('CPU')) {
			winNotif("O");
		}

		else if (tile5.hasClass('Player') && tile2.hasClass('Player') && tile8.hasClass('Player')) {
			winNotif("X");
		} else if (tile5.hasClass('CPU') && tile2.hasClass('CPU') && tile8.hasClass('CPU')) {
			winNotif("O");
		}

		else if (tile6.hasClass('Player') && tile9.hasClass('Player') && tile3.hasClass('Player')) {
			winNotif("X");
		} else if (tile6.hasClass('CPU') && tile9.hasClass('CPU') && tile3.hasClass('CPU')) {
			winNotif("O");
		}

		else if (tile1.hasClass('Player') && tile5.hasClass('Player') && tile9.hasClass('Player')) {
			winNotif("X");
		} else if (tile1.hasClass('CPU') && tile5.hasClass('CPU') && tile9.hasClass('CPU')) {
			winNotif("O");
		}

		else if (tile5.hasClass('Player') && tile7.hasClass('Player') && tile3.hasClass('Player')) {
			winNotif("X");
		} else if (tile5.hasClass('CPU') && tile7.hasClass('CPU') && tile3.hasClass('CPU')) {
			winNotif("O");
		}
	}

	function winNotif(player) {
		win = true;
		if (player == "X") {
			alert("You win!");
			scorePlayer++;
			highscore++;
			enableTile();
			if (scorePlayer === 9) {
				alert("Congratulations you've completed the image!");
			}
			$("#playerscore").html(String(highscore));
			keepscore();
		} else {
			alert("You lost!");
			cpuhighscore++;
			$("#cpuscore").html(String(cpuhighscore));
			keepscore();
		}
		clearBoard();
	}

	function clearBoard() {
		$('.tile').removeClass('occupied');
		$('.tile').removeClass('CPU');
		$('.tile').removeClass('Player');
		$('.tile').html('');
		$('.tile').addClass('open');
	}

	function enableTile() {
		var tilez = '#tile' + scorePlayer;
		if (scorePlayer <= 9) {
			$(tilez).removeClass('off');
			$(tilez).addClass('on');

			if (scorePlayer === 1) {
				var elem = document.getElementById('tile1');
				elem.style.backgroundImage = 'url(images/Na.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}

			else if (scorePlayer === 2) {
				var elem = document.getElementById('tile2');
				elem.style.backgroundImage = 'url(images/Jo.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}


			else if (scorePlayer === 3) {
				var elem = document.getElementById('tile3');
				elem.style.backgroundImage = 'url(images/Mo.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}


			else if (scorePlayer === 4) {
				var elem = document.getElementById('tile4');
				elem.style.backgroundImage = 'url(images/Sa.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}


			else if (scorePlayer === 5) {
				var elem = document.getElementById('tile5');
				elem.style.backgroundImage = 'url(images/Ji.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}


			else if (scorePlayer === 6) {
				var elem = document.getElementById('tile6');
				elem.style.backgroundImage = 'url(images/Mi.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}


			else if (scorePlayer === 7) {
				var elem = document.getElementById('tile7');
				elem.style.backgroundImage = 'url(images/Da.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}


			else if (scorePlayer === 8) {
				var elem = document.getElementById('tile8');
				elem.style.backgroundImage = 'url(images/Ch.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}


			else if (scorePlayer === 9) {
				var elem = document.getElementById('tile9');
				elem.style.backgroundImage = 'url(images/Tz.png)'
				elem.style.webkitBackgroundSize = 'cover'
			}
		}
	}

	function CPUTurn() {

		function CPUTurnPlay(square) {

			validatePlay(square)

			if (canPlay) {
				square.removeClass('open');
				square.addClass('occupied');
				square.html("O");
				square.addClass('CPU');

			} else {
				CPURandom()
			}
		}

		function CPURandom() {
			for (var i = 0; i < 10; i++) {

				var randomNumber = Math.floor((Math.random() * 9) + 1);
				var randomSquare = $('#square' + randomNumber);
				validatePlay(randomSquare);

				if (canPlay) {

					randomSquare.removeClass('open');
					randomSquare.addClass('occupied');
					randomSquare.html("O");
					randomSquare.addClass('CPU');
					
					break;
				}
			}
		}

		PlayTile123_wo3 = (tile1.hasClass('Player') && tile2.hasClass('Player') || tile1.hasClass('CPU') && tile2.hasClass('CPU')) && !(tile3.hasClass('occupied'))
		PlayTile123_wo2 = (tile1.hasClass('Player') && tile3.hasClass('Player') || tile1.hasClass('CPU') && tile3.hasClass('CPU')) && !(tile2.hasClass('occupied'))
		PlayTile123_wo1 = (tile3.hasClass('Player') && tile2.hasClass('Player') || tile3.hasClass('CPU') && tile2.hasClass('CPU')) && !(tile1.hasClass('occupied'))

		PlayTile456_wo6 = (tile4.hasClass('Player') && tile5.hasClass('Player') || tile4.hasClass('CPU') && tile5.hasClass('CPU')) && !(tile6.hasClass('occupied'))
		PlayTile456_wo5 = (tile4.hasClass('Player') && tile6.hasClass('Player') || tile4.hasClass('CPU') && tile6.hasClass('CPU')) && !(tile5.hasClass('occupied'))
		PlayTile456_wo4 = (tile5.hasClass('Player') && tile6.hasClass('Player') || tile5.hasClass('CPU') && tile6.hasClass('CPU')) && !(tile4.hasClass('occupied'))

		PlayTile789_wo9 = (tile7.hasClass('Player') && tile8.hasClass('Player') || tile7.hasClass('CPU') && tile8.hasClass('CPU')) && !(tile9.hasClass('occupied'))
		PlayTile789_wo8 = (tile7.hasClass('Player') && tile9.hasClass('Player') || tile7.hasClass('CPU') && tile9.hasClass('CPU')) && !(tile8.hasClass('occupied'))
		PlayTile789_wo7 = (tile8.hasClass('Player') && tile9.hasClass('Player') || tile8.hasClass('CPU') && tile9.hasClass('CPU')) && !(tile7.hasClass('occupied'))

		PlayTile147_wo7 = (tile1.hasClass('Player') && tile4.hasClass('Player') || tile1.hasClass('CPU') && tile4.hasClass('CPU')) && !(tile7.hasClass('occupied'))
		PlayTile147_wo4 = (tile1.hasClass('Player') && tile7.hasClass('Player') || tile1.hasClass('CPU') && tile7.hasClass('CPU')) && !(tile4.hasClass('occupied'))
		PlayTile147_wo1 = (tile4.hasClass('Player') && tile7.hasClass('Player') || tile4.hasClass('CPU') && tile7.hasClass('CPU')) && !(tile1.hasClass('occupied'))

		PlayTile528_wo8 = (tile5.hasClass('Player') && tile2.hasClass('Player') || tile5.hasClass('CPU') && tile2.hasClass('CPU')) && !(tile8.hasClass('occupied'))
		PlayTile528_wo2 = (tile5.hasClass('Player') && tile8.hasClass('Player') || tile5.hasClass('CPU') && tile8.hasClass('CPU')) && !(tile2.hasClass('occupied'))
		PlayTile528_wo5 = (tile2.hasClass('Player') && tile8.hasClass('Player') || tile2.hasClass('CPU') && tile8.hasClass('CPU')) && !(tile5.hasClass('occupied'))

		PlayTile693_wo3 = (tile6.hasClass('Player') && tile9.hasClass('Player') || tile6.hasClass('CPU') && tile9.hasClass('CPU')) && !(tile3.hasClass('occupied'))
		PlayTile693_wo9 = (tile6.hasClass('Player') && tile3.hasClass('Player') || tile6.hasClass('CPU') && tile3.hasClass('CPU')) && !(tile9.hasClass('occupied'))
		PlayTile693_wo6 = (tile9.hasClass('Player') && tile3.hasClass('Player') || tile9.hasClass('CPU') && tile3.hasClass('CPU')) && !(tile6.hasClass('occupied'))

		PlayTile159_wo9 = (tile1.hasClass('Player') && tile5.hasClass('Player') || tile1.hasClass('CPU') && tile5.hasClass('CPU')) && !(tile9.hasClass('occupied'))
		PlayTile159_wo5 = (tile1.hasClass('Player') && tile9.hasClass('Player') || tile1.hasClass('CPU') && tile9.hasClass('CPU')) && !(tile5.hasClass('occupied'))
		PlayTile159_wo1 = (tile5.hasClass('Player') && tile9.hasClass('Player') || tile5.hasClass('CPU') && tile9.hasClass('CPU')) && !(tile1.hasClass('occupied'))

		PlayTile573_wo3 = (tile5.hasClass('Player') && tile7.hasClass('Player') || tile5.hasClass('CPU') && tile7.hasClass('CPU')) && !(tile3.hasClass('occupied'))
		PlayTile573_wo5 = (tile5.hasClass('Player') && tile3.hasClass('Player') || tile5.hasClass('CPU') && tile3.hasClass('CPU')) && !(tile5.hasClass('occupied'))
		PlayTile573_wo7 = (tile7.hasClass('Player') && tile3.hasClass('Player') || tile7.hasClass('CPU') && tile3.hasClass('CPU')) && !(tile7.hasClass('occupied'))

		if (PlayTile123_wo3) {
			CPUTurnPlay(tile3)
		} else if (PlayTile123_wo2) {
			CPUTurnPlay(tile2)
		} else if (PlayTile123_wo1) {
			CPUTurnPlay(tile1)
		}

		else if (PlayTile456_wo6) {
			CPUTurnPlay(tile6)
		} else if (PlayTile456_wo5) {
			CPUTurnPlay(tile5)
		} else if (PlayTile456_wo4) {
			CPUTurnPlay(tile4)
		}

		else if (PlayTile789_wo9) {
			CPUTurnPlay(tile9)
		} else if (PlayTile789_wo8) {
			CPUTurnPlay(tile8)
		} else if (PlayTile789_wo7) {
			CPUTurnPlay(tile7)
		}

		else if (PlayTile147_wo7) {
			CPUTurnPlay(tile7)
		} else if (PlayTile147_wo4) {
			CPUTurnPlay(tile4)
		} else if (PlayTile147_wo1) {
			CPUTurnPlay(tile1)
		}

		else if (PlayTile528_wo8) {
			CPUTurnPlay(tile8)
		} else if (PlayTile528_wo2) {
			CPUTurnPlay(tile2)
		} else if (PlayTile528_wo5) {
			CPUTurnPlay(tile5)
		}

		else if (PlayTile693_wo3) {
			CPUTurnPlay(tile3)
		} else if (PlayTile693_wo9) {
			CPUTurnPlay(tile9)
		} else if (PlayTile693_wo6) {
			CPUTurnPlay(tile6)
		}

		else if (PlayTile159_wo9) {
			CPUTurnPlay(tile9)
		} else if (PlayTile159_wo5) {
			CPUTurnPlay(tile5)
		} else if (PlayTile159_wo1) {
			CPUTurnPlay(tile1)
		}

		else if (PlayTile573_wo3) {
			CPUTurnPlay(tile3)
		} else if (PlayTile573_wo7) {
			CPUTurnPlay(tile7)
		} else if (PlayTile573_wo5) {
			CPUTurnPlay(tile5)
		}

		else {
			CPURandom();
		}
		draw();
		winner();
	}
});