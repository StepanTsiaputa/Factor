jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});

	//Laminate button click
	$("#universalLaminateButton").click(function(){
		$('#lead_container').text('');
        $('#lead_container').text('Колекція ламінату “UNIVERSAL” – це вінілова підлога із якісним відтворенням кольорів природи і ' +
			'революційною адаптацією відтінків під будь-який колір і дизайн будинку. М’якість і ненав’язливість дають можливість ' +
			'адаптувати ламіновану підлогу практично до будь-яких рішень інтер’єру. Тут ви не знайдете кричущої агресії, яка з часом ' +
			'набридає. Візуальний ефект комфорту і спокою додасть дуже багато до домашнього затишку. Плюс 100% водонепроникність, ' +
			'висока зносостійкість (33 клас), простота в укладанні і мінімум ' +
			'вимог по догляду – це все, що потрібно від якісного вінілового ламінату. Термін служби на 5 років більше стандарту – 25 років.');
	});
    $("#allLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('Ламінат водостійкий, зносостійкий, довговічний. Мінімальні терміни служби: 20-25 років. ' +
            ' В ексклюзивних кольорах, з натуральної сировини. Запатентовані восковані замки та декілька шарів зносостійкого глянцю.');
    });
    $("#goldenLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('“GOLDEN” – це колекція простоти і смаку в 6-ти цікавих декорах. Глибина кольору вражає.' +
			' Класика текстури не дратує око. Концепція мінімалізму, яка так сподобалася сучасній людині, ' +
			'стала основою для створення ламінату колекції “GOLDEN” і це нове рішення в співвідношенні ціни – якості. ' +
			'Ламінат наділений всім необхідним. Він вологостійкий, теплий і надійний, з ним дуже зручно працювати.');
    });
    $("#royalLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('“ROYAL” – колекція ламінату в форматі “напівматовий”, який відображає глибину і насиченість.' +
			' Ламінат з частковим ефектом хамелеона (адаптація під колір приміщення). “ROYAL” – це також ламінат класу 33. ' +
			'Його поверхня зносостійка і водонепроникна. ' +
			'Легкий в укладанні і надійний в експлуатації, такий ламінат не створюватиме зайвих турбот у побуті.');
    });
    $("#perfectLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('“PERFECT” – це естетика і міцність, які відображені в 6-ти декорах. ' +
			'Концепція природи в сучасному ламінаті дарує тепло, спокій і затишок. Ламінат якісний, приємний на дотик і стійкий до вологи.' +
			' Дизайнерське рішення за розміром планок ламінату колекції ' +
			'PERFECT дозволяє створювати класичні паркетні візерунки на підлозі, а 4-х стороння фаска створює чудові візуальні ефекти.');
    });
    $("#sapfirLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('Ламінат «Sapfir» колекція «Parquet» – це стиль дизайну королів та знаті. Ламіноване матове і супер – глянцеве ' +
			'покриття передає в точності всі форми і тонкощі справжнього художнього паркету. Невеликі плавні фаски доповнюють унікальну текстуру і ' +
			'красу вашої підлоги. Ця колекція виконана в 33 класі на 8 мм вологостійкій HDF плиті високої щільності, що надає їй особливу міцність і' +
			' стійкість до механічних пошкоджень. Спеціальне лакове покриття захищає поверхню виробу від стирання, вицвітання декору і хімічних пошкоджень, ' +
			'а воскове покриття замків забезпечить стійкість до вологи і пилу. ' +
			'Різноманітність декорів поверхні створить особливу атмосферу м’якої розкоші і надасть інтер’єру нотки елегантності та витонченості.');
    });
    $("#pianoLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('“Piano” – це колекція ламінованих підлог, яка поєднує в собі класику та новаторство. Тут увібрані' +
			' кращі якості дерева – благородство кольору, природність і довговічність. А неймовірне глянцеве покриття зробить вашу ' +
			'підлогу розкішною і принесе більше світла в будинок. Провоскований замок Single click значно підвищує вологостійкість ' +
			'даної колекції ламінату. Piano має 33 клас стирання, що свідчить про високу якість ламінату. Це дозволяє використовувати його ' +
			'в найрізноманітніших домашніх інтер’єрах. Обравши колекцію Piano, Ви отримаєте досконале поєднання природи та стилю.');
    });
    $("#magnatLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('“MAGNAT” – це унікальна колекція з 7 декорів, які здатні відтворити красу природи в ' +
			'сучасних матеріалах. Завдяки синхронізованому тисненню та округлій фасці ламінат має естетичний вигляд і ' +
			'приємний на дотик, що в сукупності створює надзвичайно популярний в наш час 3D – ефект. Замки з восковим ' +
			'покриттям забезпечують досконалість і високу вологостійкість, а відмінна щільність дошки повністю виключає ' +
			'можливість пошкодження торців і гарантує зручність при укладанні покриття. Колекція “MAGNAT” – це хіт усіх сезонів! ' +
			'Ламінату присвоєно AC5 клас стійкості до стирання, а це значить, що підлога прослужить дуже довго, ' +
			'навіть при великих щоденних навантаженнях!');
    });
    $("#eleganzLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('Колекція елітного ламінату “Eleganz” – вражаюче витончена та інтригуюча підлога у вашому будинку. ' +
			'Ніжне глянцеве покриття і текстура дуба досконало передано в 8 декорах, а ще – ніжність і легкість для кожного Вашого кроку.' +
			' Високий 33 клас стирання забезпечить надовго блиск і колір ламінату. А унікальна технологія замку Valinge click, ' +
			'що вкритий воском, дозволить уберегти ламінат від вологості і встановити його швидко та невимушено. ' +
			'Запропоновані нами декори збагатять  навіть найчудернацькіший інтер’єр. ' +
			'Ламінат Eleganz- це комфорт в поєднанні з виключною якістю.');
    });
    $("#euroclicLaminateButton").click(function(){
        $('#lead_container').text('');
        $('#lead_container').text('Обробка поверхні ламінату компанії Еггер (Німеччина) здійснюється за найсучаснішими технологіями. ' +
			'Тому ламінована підлога виглядає так оригінально: ' +
			'імітація кераміки, шорстка фактура дерев’яних мостин або матові поверхні. Це екологічно чистий та зносостійкий ламінат.');
    });

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}