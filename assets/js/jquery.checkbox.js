
jQuery(document).ready(function(){

	jQuery(".myCheck").click(
	/* при клике на чекбоксе меняем его вид и значение */
	function() {

	     changeCheck(jQuery(this));
	     
	});


	jQuery(".myCheck").each(
	/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
	function() {
	     
	     changeCheckStart(jQuery(this));
	     
	});

});

function changeCheck(el)
/* 
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.find('.myCheckBox').css("background","#2b78d9");	
		input.attr("checked", true)
	} else {
		el.find('.myCheckBox').css("background","#ededed");	
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el)
/* 
	если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.find('.myCheckBox').css("background","#2b78d9");	
		}
     return true;
}

		