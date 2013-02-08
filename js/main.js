// JavaScript Document
function full (title, title_full, prepod, cons, exam, bilet, conspect, crack)
{
	this.title=title,
	this.title_full=title_full,
	this.prepod=prepod,	
	this.exam=exam,
	this.cons=cons,
	this.bilet=bilet,
	this.conspect=conspect,
	this.crack=crack,
	this.ost_cons=function()
	{
		var razn=this.cons.date-new Date().getDate()
        console.log(this.cons.date)
		var a
		if (razn==0)
		{
			a= '<span>сегодня</span>'
		}
		else if (razn <0)
		{
			a= '<span>прошло</span>'
		}
		else if(razn<10)
		{
			a = 'до конс. <span>0'+razn+'</span> дн.'
		}
		else
		{
	  		a= 'до конс. <span>'+razn+'</span> дн.'
		}	
		return a
		
	},
	this.ost_exam=function()
	{
		var razn=this.exam.date-new Date().getDate()
		var a
		if (razn==0)
		{
			a= '<span>сегодня</span>'
		}
		else if (razn <0)
		{
			a= '<span>прошло</span>'
		}
		else if(razn<10)
		{
			a = 'до экз. <span>0'+razn+'</span> дн.'
		}
		else
		{
	  		a= 'до экз. <span>'+razn+'</span> дн.'
		}	
		return a
		
	},
	this.get=function()
	{
		return '<div class="full"><div class="header"><div class="title"><h3>'+title+'</h3></div><div class="ost"><div class="ost_cons">'+this.ost_cons()+'</div><div class="ost_exam">'+this.ost_exam()+'</div></div></div><div class="content">'+this.prepod.get()+'<div class="info"><h4><p class="title_full">'+this.title_full+'</p></h4>'+this.cons.get()+this.exam.get()+'</div></div><div class="down2"><a href="'+this.bilet+'"><div class="bilet"><p>Билеты</p></div></a><a href="'+this.conspect+'"><div class="conspect"><p>Конспект</p></div></a><a href="'+this.crack+'"><div class="crack"><p>Готовые билеты</p></div></a></div><div class="console"><p>Материал не добавлен. Вы сделаете доброе дело, если поможете его найти.</p><span>Введите ссылку на материал</span><input type="text" class="inp"/><div class="send">отправить</div><br></div>'
	}
}
function prepod (photo, name)
	{
		this.photo=photo,
		this.name=name,
		this.get=function()
		{
			return '<div class="prepod"><div class="photo"><img class="prepod_photo" src="images/'+this.photo+'.png" /></div></div>'
		}
	}
function exam (exam_date, exam_time, exam_cab)
	{
		this.date=new Date(exam_date).getDate(),
		this.time=exam_time,
		this.cab=exam_cab,
		this.get=function()
		{
			return '<table class="exam"><tr><td class="tip2">экзамен</td></tr><tr><td class="date2">'+this.date+' января</td></tr><tr><td class="time2">'+this.time+'</td></tr><tr><td class="cab2">'+this.cab+'</td></tr></table>'
		}
	}
	
function cons (cons_date, cons_time, cons_cab)
	{
		this.date=new Date(cons_date).getDate(),
		this.time=cons_time,
		this.cab=cons_cab,
		this.get=function()
		{
			return '<table class="cons"><tr><td class="tip2">консультация</td></tr><tr><td class="date2">'+this.date+' января</td></tr><tr><td class="time2">'+this.time+'</td></tr><tr><td class="cab2">'+this.cab+'</td></tr></table>'
		}
	}
	var full_371_1=new full('ИБУиАвК', 'Информатизация бухгалтерского учета и аудита в корпорации', new prepod('chirkova', 'Чиркова Марина Юрьевна'), new cons('01/06/2011', '10:25', 'M-722'), new exam('01/08/2011', '10:25', 'M-722'), 0, 'down/IBUiAvK_lection.rar')
	var full_371_2=new full('ЭУК','Экономика и управление корпорацией', new prepod('panova', 'Панова Елена Николаевна'), new cons('01/11/2011', '08:45', 'M-706'), new exam('01/12/2011', '10:25', 'M-412'))
	var full_371_3=new full('ИМ','Информационный менеджмент', new prepod('andreevsky2', 'Андреевский Игорь Леонидович'), new cons('01/15/2011', '08:45', 'M-728'), new exam('01/17/2011', '10:25', 'M-709'))
	var full_371_4=new full('ДИЯ','Деловой иностранный язык', new prepod('no', 'Леонов А.Е.'), new cons('01/20/2011', '08:45', 'M-726'), new exam('01/21/2011', '10:25', 'M-709'))
	var full_371_5=new full('ИМЭП','Имитационное моделирование экономических процессов', new prepod('brusakova', 'Брусакова И.А.'), new cons('01/24/2011', '10:25', 'M-728'), new exam('01/25/2011', '10:25', 'M-728'))

function load_gr(gr)
{
	$('#wrapper').append(full_371_1.get()).append(full_371_2.get()).append(full_371_3.get()).append(full_371_4.get()).append(full_371_5.get())
}
$(document).ready(function()
{
load_gr('371')	
	
	$('.header').click(function()
	{
		$(this).parents('.full').children(".content").toggle('blind')
	})
	$(".down2 a[href='undefined'],.down2 a[href='0'] ").click(function(event)
	{
		event.preventDefault();
		$(this).parents('.full').children(".console").toggle('blind')
		
	})
	var arr=new Array;
	for(var o=0; o<$(".ost_exam").length;o++)
	{
		var l=$(".ost_exam").eq(o).children('span').text()
		if (l=='прошло') {l=100}
		arr[o]=l
	}
	max_elem = Math.min.apply( Math, arr )
	$.each($(".ost_exam span"), function()
	{
		if($(this).text()==max_elem|$(this).text()=='сегодня')
		{
			$(this).parents('.full').children(".content").css('display', 'block')
		}
	})
	$('.send').click(function()
	{
		var a=$(this).parents('.console').children('.inp')		
		if(a.val()==''){$('.inp').focus()}
		else{$(this).parents('.full').children(".console").hide('blind', 'slow'); alert("Спасибо! Материал будет добавлен после проверки парой бюрократов")}
		a.val('')
	})

})