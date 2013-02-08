$(document).ready(function()
	{
		VK.init(function()
			{
				var parts=document.location.search.substr(1).split("&");
				var flashVars={}, curr;
				var viewer_group="no group"
				for (i=0; i<parts.length; i++)
				{
					curr = parts[i].split('=');
					flashVars[curr[0]] = curr[1];
				}
				auth_key = flashVars['auth_key'];
				viewer_id = flashVars['viewer_id'];
				if (viewer_id == "70984531")
				{
					$("#star").css("display", "block")
				}
				VK.api("getGroups", function(data)
				{			
					for(var i=0; i<data.response.length;i++)
					{
						if(data.response[i]==482775)
						{
							$("#adv").css("display","none")
							$("#gr_tog>label:first").addClass("ui-state-active")
							$("#gr_tog>label:first").attr("aria-pressed", true)
							viewer_group=371
							check_gr('371')
								
						}
						if(data.response[i]==300255)
						{
							$("#adv").css("display","none")
							$("#gr_tog>label:first").addClass("ui-state-active")
							$("#gr_tog>label:first").attr("aria-pressed", true)
							check_gr('372')
							viewer_group=372					
						}
						if(data.response[i]==929251)
						{
							$("#adv").css("display","none")
							$("#gr_tog>label:first").addClass("ui-state-active")
							$("#gr_tog>label:first").attr("aria-pressed", true)
							check_gr('373')
							viewer_group=373					
						}
						if(data.response[i]==292588)
						{
							$("#adv").css("display","none")
							$("#gr_tog>label:first").addClass("ui-state-active")
							$("#gr_tog>label:first").attr("aria-pressed", true)
							check_gr('371')
							viewer_group=3571					
						}
					}			
					base(viewer_id, auth_key, viewer_group)	
				})
			})
	function base (viewer_id, auth_key, viewer_group)
	{
		VK.api("getProfiles", {uids:viewer_id,fields:"first_name,last_name,nickname,city" }, function(data)
		{
			var viewer_name1=data.response[0].first_name
			var viewer_name2=data.response[0].nickname
			var viewer_name3=data.response[0].last_name		
			var viewer_name=viewer_name1+' '+viewer_name2+' '+viewer_name3
			var viewer_city=data.response[0].city
			
			VK.api("places.getCityById", {"cids":viewer_city}, function(data)
				{
					$.post('sql/stat.php', {"viewer_id": viewer_id, "auth_key": auth_key, "viewer_name": viewer_name, "viewer_city": data.response[0].name, "viewer_group":viewer_group}, function(data)
					{
						$("#console").html(data)
					})
				})
		});
	}



		var loc = document.location.href.length
		if(document.location.href.length<100)
	{
		$("#tabs-2").css({"height": $(document).height()-110})
		$("#funci").css({"margin-top":($(document).height()-290-452)/2}).draggable()
	}
	else
	{
		$("#tabs-2").css({"height": $(document).height()-110})
		$("#funci").css({"margin-top":90}).draggable()
	};
	$("#star").button({ icons: {primary:'ui-icon-script'} }).click(function()
	{
		$("#uved").dialog("open")
	})
	$("#yeno").buttonset()
	$("#uved")
		.attr("title", "Создаем уведомление для группы 371")
		.dialog(
		{
			autoOpen:false,
			width:600,
		})
		$("#ye")
			.click(function()
			{
				VK.api("secure.sendNotifications", {uids:70984531, message:"ТЕСТ"}, function(data)
				{
					for(var key in data)
					for(var key2 in data[key])
					alert(key2+':'+key[key2])
				})
				//var valu=$("#uved textarea").val()
				//document.location.href="vk.php?mes="+valu
			})
			
	$.reject()
		var height=$(window).height()-10
		var width=$(window).width()-10
		var times=["","08:45 - 10:15", "10:25 - 11:55", "12:35 - 14:05", "14:10 - 15:40", "15:50 - 17:20", "17:25 - 18:55"];
		var one=["09/12/2010", "09/19/2010", "09/26/2010", "10/03/2010", "10/10/2010", "10/17/2010", "10/24/2010", "10/31/2010", "11/07/2010", "11/14/2010", "11/21/2010", "11/28/2010", "12/05/2010", "12/12/2010", "12/19/2010", "12/26/2010",  "01/02/2011", "01/09/2011", "01/16/2011", "01/23/2011"];
		var two=["09/05/2010", "09/12/2010", "09/19/2010", "09/26/2010", "10/03/2010", "10/10/2010", "10/17/2010", "10/24/2010", "10/31/2010", "11/07/2010", "11/14/2010", "11/20/2010", "11/29/2010", "12/04/2010", "12/13/2010", "12/18/2010", "12/27/2010", "01/01/2011", "01/10/2011", "01/15/2011", "01/24/2011", "01/29/2011"];			
			function week(m,t,w,th,f,s)
		{
			this.m=m,
			this.t=t,
			this.w=w,
			this.th=th,
			this.f=f,
			this.s=s			
		}
		function day (first, second, third, fourth, five, six)
		{
			this.first=first,
			this.second=second,
			this.third=third,
			this.fourth=fourth,
			this.five=five,
			this.six=six
			this.table=function(curr)
			{
				return "<table class='ui-accordion-content-table'>\
							<tr>\
								<td align='center' class=' ui-state-default ui-corner-top'>\
									<span class='ui-icon ui-icon-clock'></span>\
								</td>\
								<td align='center' class=' ui-state-default ui-corner-top'>\
									<span class='ui-icon ui-icon-bookmark'></span>\
								</td>\
								<td align='center' class=' ui-state-default ui-corner-top'>\
									<span class='ui-icon ui-icon-tag'></span>\
								</td>\
								<td align='center' class='ui-state-default ui-corner-top'>\
									<span class='ui-icon ui-icon-home'></span>\
								</td>\
								<td align='center' class='ui-state-default ui-corner-top'>\
									<span class='ui-icon ui-icon-person'></span>\
								</td>\
							</tr>"+this.first.tab(curr)+this.second.tab(curr)+this.third.tab(curr)+this.fourth.tab(curr)+this.five.tab(curr)+this.six.tab(curr)+"</table>"
			}
		}
		function para (time,predmet, type, kab, prepod)
		{
			this.time=time,
			this.predmet=predmet,
			this.type=type,
			this.kab=kab,
			this.prepod=prepod,
			this.tab=tab,
			this.check_date=check_date
		}
		
		function check_date(curr)
		{var a
			if ($("#gr_tog>label.ui-state-active>span").text()=="371")
			{
				if(this.type=="Практика")
					{
						switch(this.predmet)
						{
							case "Имитационное моделирование экономических процессов":							
								a=curr>new Date('09/11/2010') & curr<new Date('09/19/2010')|curr>new Date('10/09/2010') & curr<new Date('10/17/2010')|curr>new Date('11/06/2010') & curr<new Date('11/14/2010')|curr>new Date('12/04/2010') & curr<new Date('12/12/2010')
							break;
							case "Экономика и управление корпорацией":
								a=curr>new Date('09/05/2010') & curr<new Date('12/05/2010')
							break;
							default:a=1
						}					
					}				
					else if(this.type=="Лаб")
					{
						switch(this.predmet)
						{
							case "Информационный менеджмент":
								a=(curr>=new Date('09/19/2010') & curr<new Date('09/26/2010')|curr>new Date('11/13/2010') & curr<new Date('11/21/2010')|curr>new Date('10/02/2010') & curr<new Date('10/10/2010')|curr>new Date('11/27/2010') & curr<new Date('12/05/2010'))
							break;
							case "Имитационное моделирование экономических процессов":
								a=(curr>new Date('09/11/2010') & curr<new Date('09/19/2010')|curr>new Date('11/06/2010') & curr<new Date('11/14/2010')|curr>new Date('09/25/2010') & curr<new Date('10/03/2010')|curr>new Date('11/20/2010') & curr<new Date('11/28/2010'))		
							break;
							case "Разработка Web приложений":
								a=(curr>new Date('09/11/2010') & curr<new Date('12/26/2010'))
							break;
							case "Информатизация бухгалтерского учёта и аудита в корпорации":
								a=(curr>new Date('09/18/2010') & curr<new Date('09/26/2010')|curr>new Date('10/16/2010') & curr<new Date('10/24/2010')|curr>new Date('11/13/2010') & curr<new Date('11/21/2010')|curr>new Date('10/02/2010') & curr<new Date('10/10/2010')|curr>new Date('10/30/2010') & curr<new Date('11/07/2010')|curr>new Date('11/27/2010') & curr<new Date('12/05/2010'))
							case "Информатизация маркетинговой деятельности в корпорации":
							a=(curr>new Date('10/02/2010') & curr<new Date('10/10/2010')|curr>new Date('10/30/2010') & curr<new Date('11/07/2010')|curr>new Date('11/27/2010') & curr<new Date('12/05/2010')|curr>new Date('09/18/2010') & curr<new Date('09/26/2010')|curr>new Date('10/16/2010') & curr<new Date('10/24/2010')|curr>new Date('11/13/2010') & curr<=new Date('11/21/2010'))
							break
							default:a=1
						}
					}
					else{a=1}
					return a
			}
			if ($("#gr_tog>label.ui-state-active>span").text()=="372")
			{
				if(this.type=="Практика")
					{
						switch(this.predmet)
						{
							case "Имитационное моделирование экономических процессов":							
								a=curr>new Date('09/18/2010') & curr<new Date('09/26/2010')|curr>new Date('10/16/2010') & curr<new Date('10/24/2010')|curr>new Date('11/13/2010') & curr<new Date('11/21/2010')|curr>new Date('12/25/2010') & curr<new Date('01/03/2011')
							break;
							case "Экономика и управление корпорацией":
								a=curr>new Date('09/12/2010') & curr<new Date('10/17/2010')|curr>new Date('11/06/2010') & curr<new Date('12/12/2010')
							break;
							default:a=1
						}					
					}				
					else if(this.type=="Лаб")
					{
						switch(this.predmet)
						{
							case "Информационный менеджмент":
								a=(curr>new Date('10/16/2010') & curr<new Date('10/24/2010')|curr>new Date('12/11/2010') & curr<new Date('12/19/2010')|curr>new Date('10/30/2010') & curr<new Date('11/07/2010')|curr>new Date('12/25/2010') & curr<new Date('01/02/2011'))
							break;
							case "Имитационное моделирование экономических процессов":
								a=(curr>new Date('10/09/2010') & curr<new Date('10/17/2010')|curr>new Date('12/04/2010') & curr<new Date('12/12/2010')|curr>new Date('10/23/2010') & curr<new Date('10/31/2010')|curr>new Date('12/18/2010') & curr<new Date('12/26/2010'))		
							break;
							case "Разработка Web приложений":
								a=(curr>new Date('09/19/2010') & curr<new Date('01/02/2011'))
							break;
							case "Информатизация бухгалтерского учёта и аудита в корпорации":
								a=(curr>new Date('09/18/2010') & curr<new Date('09/26/2010')|curr>new Date('10/16/2010') & curr<new Date('10/24/2010')|curr>new Date('11/13/2010') & curr<new Date('11/21/2010')|curr>new Date('10/02/2010') & curr<new Date('10/10/2010')|curr>new Date('10/30/2010') & curr<new Date('11/07/2010')|curr>new Date('11/27/2010') & curr<new Date('12/05/2010'))
							case "Информатизация маркетинговой деятельности в корпорации":
							a=(curr>new Date('09/11/2010') & curr<new Date('09/19/2010')|curr>new Date('10/09/2010') & curr<new Date('10/17/2010')|curr>new Date('11/20/2010') & curr<new Date('11/28/2010')|curr>new Date('09/25/2010') & curr<new Date('10/03/2010')|curr>new Date('11/06/2010') & curr<new Date('11/14/2010')|curr>new Date('12/04/2010') & curr<new Date('12/12/2010'))
							break
							default:a=1
						}
					}
					else{a=1}
					return a
			}
			if ($("#gr_tog>label.ui-state-active>span").text()=="373")
			{
				if(this.type=="Практика")
					{
						switch(this.predmet)
						{
							case "Имитационное моделирование экономических процессов":							
								a=curr>new Date('09/25/2010') & curr<new Date('10/03/2010')|curr>new Date('10/23/2010') & curr<new Date('10/31/2010')|curr>new Date('11/20/2010') & curr<new Date('11/28/2010')|curr>new Date('12/18/2010') & curr<new Date('12/26/2010')
							break;
							case "Экономика и управление корпорацией":
								a=curr>new Date('09/18/2010') & curr<new Date('12/05/2010')|curr>new Date('12/25/2010') & curr<new Date('01/02/2011')
							break;
							default:a=1
						}					
					}				
					else if(this.type=="Лаб")
					{
						switch(this.predmet)
						{
							case "Информационный менеджмент":
								a=(curr>new Date('09/25/2010') & curr<new Date('10/03/2010')|curr>new Date('11/20/2010') & curr<new Date('11/28/2010')|curr>new Date('10/23/2010') & curr<new Date('10/31/2010')|curr>new Date('12/18/2010') & curr<new Date('12/26/2010'))
							break;
							case "Имитационное моделирование экономических процессов":
								a=(curr>new Date('09/11/2010') & curr<new Date('09/19/2010')|curr>new Date('11/06/2010') & curr<new Date('11/14/2010')|curr>new Date('10/09/2010') & curr<new Date('10/17/2010')|curr>new Date('12/04/2010') & curr<new Date('12/12/2010'))		
							break;
							case "Разработка Web приложений":
								a=(curr>new Date('09/05/2010') & curr<new Date('12/05/2010'))
							break;
							case "Информатизация бухгалтерского учёта и аудита в корпорации":
								a=(curr>new Date('09/11/2010') & curr<new Date('09/19/2010')|curr>new Date('10/09/2010') & curr<new Date('10/16/2010')|curr>new Date('11/12/2010') & curr<new Date('11/19/2010')|curr>new Date('09/25/2010') & curr<new Date('10/03/2010')|curr>new Date('11/06/2010') & curr<new Date('11/14/2010')|curr>new Date('12/04/2010') & curr<new Date('12/12/2010'))
							case "Информатизация маркетинговой деятельности в корпорации":
							a=(curr>new Date('09/18/2010') & curr<new Date('09/25/2010')|curr>new Date('10/16/2010') & curr<new Date('10/24/2010')|curr>new Date('11/13/2010') & curr<new Date('11/21/2010')|curr>new Date('10/02/2010') & curr<new Date('10/10/2010')|curr>new Date('10/30/2010') & curr<new Date('11/07/2010')|curr>new Date('11/27/2010') & curr<new Date('12/05/2010'))
							break
							default:a=1
						}
					}
					else{a=1}
					return a
			}
			if ($("#gr_tog>label.ui-state-active>span").text()=="3571")
			{
					if(this.type=="Лаб")
					{
						switch(this.predmet)
						{
							case "Эконометрика":
								a=(curr>new Date('10/02/2010') & curr<new Date('10/10/2010')|curr>new Date('10/30/2010') & curr<new Date('11/07/2010')|curr>new Date('11/27/2010') & curr<new Date('12/05/2010')|curr>new Date('12/25/2010') & curr<new Date('01/02/2011'))
							break;
							case "МСЭП":
								a=(curr>new Date('09/11/2010') & curr<new Date('09/19/2010')|curr>new Date('11/20/2010') & curr<new Date('11/28/2010')|curr>new Date('10/09/2010') & curr<new Date('10/17/2010')|curr>new Date('12/25/2010') & curr<new Date('01/02/2011'))		
							break;
							case "Моделирование операций с недвижимостью":
								a=(curr>new Date('09/25/2010') & curr<new Date('10/03/2010')|curr>new Date('11/06/2010') & curr<new Date('11/14/2010')|curr>new Date('12/04/2010') & curr<new Date('12/12/2010'))
							break;
							default:a=1
						}
					}
					else{a=1}
					return a
			}
		}
		function tab (curr)
			{
				if (this.predmet!=="")
				{
					if(this.check_date(curr)=="1")
						{
							return "<tr><td class='ui-accordion-content-time ui-corner-all'><p>"+this.time+"<p></td><td class='ui-accordion-content-predmet ui-corner-all'><p>"+this.predmet+"</p></td><td class='ui-accordion-content-typ ui-corner-all'><p>"+this.type+"</p></td><td class='ui-accordion-content-kab ui-corner-all'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all'><p>"+this.prepod+"</p></td></tr>"
						}
					if(this.check_date(curr)=="0")
						{
							return "<tr><td class='ui-accordion-content-time ui-datepicker-unselectable ui-state-disabled ui-corner-all'>"+this.time+"</td><td class='ui-accordion-content-predmet ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.predmet+"</p></td><td class='ui-accordion-content-typ ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.type+"</p></td><td class='ui-accordion-content-kab ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.prepod+"</p></td></tr>"
						}
				}
					else
					{
						return "<tr><td class='ui-accordion-content-time ui-datepicker-unselectable ui-state-disabled  ui-corner-all'>"+this.time+"</td><td class='ui-accordion-content-predmet ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td><td class='ui-accordion-content-typ ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td><td class='ui-accordion-content-kab ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td><td class='ui-accordion-content-prep ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td></tr>"
					}
				}
				
		//Информатизация бухгалтерского учёта и аудита в корпорации
	var monday_1=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"Информатизация маркет. деятельности в корп.", "Лекция", "M-518", "Пономарев В.В."), new para(times[4],"Проектирование  информационных систем", "Лекция","М-622","Соколов Р.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var tuesday_1=new day(new para(times[1],"Эконометрика", "Практика","М-704","Еникеева Л.А."),new para(times[2],"Информатизация маркет. деятельности в корп.", "Практика","М-622","Леонов Ю. Е."),new para(times[3],"","","",""),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var wednesday_1=new day(new para(times[1],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."), new para(times[3],"Разработка Web приложений", "Лаб","М-722", "Андреевский И.Л."), new para(times[4],"Разработка Web приложений", "Лаб", "М-722","Андреевский И.Л."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var thursday_1=new day(new para(times[1],"Информационный менеджмент", "Лекция","М-728","Андреевский И.Л."),new para(times[2],"Эконометрика", "Лекция","М-504", "Еникеева Л.А."), new para(times[3],"Имитационное моделирование эконом. проц.", "Лекция","М-622","Брусакова И.А."), new para(times[4],"Имитационное моделирование эконом. проц.", "Практика","М-704","Брусакова И.А."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var friday_1=new day(new para(times[1],"Информатизация бух. учёта и аудита в корп.", "Практика","М-702","Чиркова М.Ю."),new para(times[2],"Информатизация бух. учёта и аудита в корп.", "Лекция","М-607","Чиркова М.Ю."),new para(times[3],"","","",""),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var saturday_1=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"Имитационное моделирование эконом. проц.", "Лаб","М-722","Масино М.Н."), new para(times[4],"Имитационное моделирование эконом. проц.", "Лаб","М-722","Масино М.Н."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))					
	var monday_2=new day(new para(times[1],"Информационный менеджмент", "Лаб","М-722","Леонов Ю. Е."),new para(times[2],"Информационный менеджмент", "Лаб","М-722","Леонов Ю. Е."), new para(times[3],"Информатизация маркет. деятельности в корп.", "Лекция","M-518", "Пономарев В.В."), new para(times[4],"Проектирование  информационных систем", "Лекция","М-622","Соколов Р.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var tuesday_2=new day(new para(times[1],"Информатизация маркет. деятельности в корп.", "Лаб","М-206", "Леонов Ю. Е."),new para(times[2],"Информатизация маркет. деятельности в корп.", "Лаб","М-206","Леонов Ю. Е."), new para(times[3],"","","",""), new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var wednesday_2=new day(new para(times[1],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."), new para(times[3],"Проектирование  информационных систем", "Практика","М-720", "Аминов Х.И."), new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var thursday_2=new day(new para(times[1],"Информационный менеджмент", "Лекция","М-728","Андреевский И.Л."),new para(times[2],"Эконометрика", "Лекция","М-504", "Еникеева Л.А."), new para(times[3],"Имитационное моделирование эконом. проц.", "Лекция","М-622","Брусакова И.А."),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var friday_2=new day(new para(times[1],"","","",""),new para(times[2],"Информатизация бух. учёта и аудита в корп.", "Лекция","М-607","Чиркова М.Ю."), new para(times[3],"Информационный менеджмент","Практика","М-706","Леонов Ю. Е."), new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var saturday_2=new day(new para(times[1],"Экономика и управление корпорацией", "Практика","М-206","Панова Е.Н."), new para(times[2],"Экономика и управление корпорацией", "Практика","М-206","Панова Е.Н."), new para(times[3],"","","",""), new para(times[4],"Деловой иностранный язык", "Практика","М-314", "Лазарева М.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""));
	var monday_3=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"Информатизация маркет. деятельности в корп.", "Лекция", "M-518", "Пономарев В.В."), new para(times[4],"Проектирование  информационных систем", "Лекция","М-622","Соколов Р.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var tuesday_3=new day(new para(times[1],"Экономика и управление корпорацией", "Практика","М-204","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Практика","М-204","Панова Е.Н."),new para(times[3],"Информатизация маркет. деятельности в корп.", "Практика","М-704","Леонов Ю. Е."),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var wednesday_3=new day(new para(times[1],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."), new para(times[3],"Информатизация маркет. деятельности в корп.", "Лаб","М-203", "Леонов Ю. Е."), new para(times[4],"Информатизация маркет. деятельности в корп.", "Лаб","М-203", "Леонов Ю. Е."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var thursday_3=new day(new para(times[1],"Информационный менеджмент", "Лекция","М-728","Андреевский И.Л."),new para(times[2],"Эконометрика", "Лекция","М-504", "Еникеева Л.А."), new para(times[3],"Имитационное моделирование эконом. проц.", "Лекция","М-622","Брусакова И.А."), new para(times[4],"", "","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var friday_3=new day(new para(times[1],"","","",""),new para(times[2],"Информатизация бух. учёта и аудита в корп.", "Лекция","М-607","Чиркова М.Ю."), new para(times[3],"Информационный менеджмент","Практика","М-706","Леонов Ю. Е."), new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var saturday_3=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"Имитационное моделирование эконом. проц.", "Лаб","М-722","Масино М.Н."), new para(times[4],"Имитационное моделирование эконом. проц.", "Лаб","М-722","Масино М.Н."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))							
	
	var monday_4=new day(new para(times[1],"Информационный менеджмент", "Лаб","М-722","Леонов Ю. Е."),new para(times[2],"Информационный менеджмент", "Лаб","М-722","Леонов Ю. Е."), new para(times[3],"Информатизация маркет. деятельности в корп.", "Лекция","M-518", "Пономарев В.В."), new para(times[4],"Проектирование  информационных систем", "Лекция","М-622","Соколов Р.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var tuesday_4=new day(new para(times[1],"Эконометрика", "Практика","М-704","Еникеева Л.А."),new para(times[2],"Проектирование  информационных систем", "Практика","М-622", "Аминов Х.И."),new para(times[3],"","","",""),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var wednesday_4=new day(new para(times[1],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."), new para(times[3],"Разработка Web приложений", "Лаб","М-722", "Андреевский И.Л."), new para(times[4],"Разработка Web приложений", "Лаб", "М-722","Андреевский И.Л."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var thursday_4=new day(new para(times[1],"Информационный менеджмент", "Лекция","М-728","Андреевский И.Л."),new para(times[2],"Эконометрика", "Лекция","М-504", "Еникеева Л.А."), new para(times[3],"Имитационное моделирование эконом. проц.", "Лекция","М-622","Брусакова И.А."), new para(times[4],"Имитационное моделирование эконом. проц.", "Практика","М-704","Брусакова И.А."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var friday_4=new day(new para(times[1],"Информатизация бух. учёта и аудита в корп.", "Практика","М-702","Чиркова М.Ю."),new para(times[2],"Информатизация бух. учёта и аудита в корп.", "Лекция","М-607","Чиркова М.Ю."),new para(times[3],"Информатизация бух. учёта и аудита в корп.","Лаб","М-203","Чиркова М.Ю."),new para(times[4],"Информатизация бух. учёта и аудита в корп.","Лаб","М-203","Чиркова М.Ю."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	
	var saturday_4=new day(new para(times[1],"","","",""), new para(times[2],"", "","",""), new para(times[3],"","","",""), new para(times[4],"Деловой иностранный язык", "Практика","М-314", "Лазарева М.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""));
				
	var monday_5=new day(new para(times[1],"Информационный менеджмент","Лаб","М-722","Латыпова Л.М."),new para(times[2],"Информационный менеджмент","Лаб","М-722","Леонов Ю. Е."), new para(times[3],"Информатизация маркет. деятельности в корп.", "Лекция", "M-518", "Пономарев В.В."), new para(times[4],"Проектирование информационных систем", "Лекция","М-622","Соколов Р.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
var tuesday_5=new day(new para(times[1],"Информатизация бух. учёта и аудита в корп.", "Лаб","М-203","Чиркова М.Ю."),new para(times[2],"Информатизация бух. учёта и аудита в корп.", "Лаб","М-204","Чиркова М.Ю."),new para(times[3],"","","",""),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
var wednesday_5=new day(new para(times[1],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."), new para(times[3],"Проектирование  информационных систем", "Практика","М-720", "Балан С.Н."), new para(times[4],"", "", "",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
var thursday_5=new day(new para(times[1],"Информационный менеджмент", "Лекция","М-728","Андреевский И.Л."),new para(times[2],"Эконометрика", "Лекция","М-504", "Еникеева Л.А."), new para(times[3],"Имитационное моделирование эконом. проц.", "Лекция","М-622","Брусакова И.А."), new para(times[4],"Имитационное моделирование эконом. проц.", "Практика","М-704","Брусакова И.А."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
var friday_5=new day(new para(times[1],"Эконометрика", "Практика","М-612","Еникеева Л.А."),new para(times[2],"Информатизация бух. учёта и аудита в корп.", "Лекция","М-607","Чиркова М.Ю."),new para(times[3],"Информатизация бух. учёта и аудита в корп.", "Практика","М-704","Чиркова М.Ю."),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
var saturday_5=new day(new para(times[1],"Имитационное моделирование эконом. проц.", "Лаб","М-203","Масино М.Н."),new para(times[2],"Имитационное моделирование эконом. проц.", "Лаб","М-203","Масино М.Н"),new para(times[3],"","","",""),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var monday_6=new day(new para(times[1],"", "","",""),new para(times[2],"", "","",""), new para(times[3],"Информатизация маркет. деятельности в корп.", "Лекция","M-518", "Пономарев В.В."), new para(times[4],"Проектирование информационных систем", "Лекция","М-622","Соколов Р.В."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var tuesday_6=new day(new para(times[1],"Экономика и управление корпорацией", "Практика","М-206","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Практика","М-206","Панова Е.Н."), new para(times[3],"Информатизация маркет. деятельности в корп.","Практика","М-704","Леонов Ю. Е."), new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var wednesday_6=new day(new para(times[1],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."),new para(times[2],"Экономика и управление корпорацией", "Лекция","М-622","Панова Е.Н."), new para(times[3],"Информатизация маркет. деятельности в корп.","Лаб","М-203","Леонов Ю. Е."), new para(times[4],"Информатизация маркет. деятельности в корп.","Лаб","М-203","Леонов Ю. Е."), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var thursday_6=new day(new para(times[1],"Информационный менеджмент", "Лекция","М-728","Андреевский И.Л."),new para(times[2],"Эконометрика", "Лекция","М-504", "Еникеева Л.А."), new para(times[3],"Имитационное моделирование эконом. проц.", "Лекция","М-622","Брусакова И.А."),new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var friday_6=new day(new para(times[1],"Информационный менеджмент","Практика","М-704","Леонов Ю. Е."),new para(times[2],"Информатизация бух. учёта и аудита в корп.", "Лекция","М-607","Чиркова М.Ю."), new para(times[3],"","","",""), new para(times[4],"","","",""), new para(times[5],"", "","",""), new para(times[6],"", "","",""))
	var saturday_6=new day(new para(times[1],"Разработка Web приложений", "Лаб","М-204", "Андреевский И.Л."), new para(times[2],"Разработка Web приложений", "Лаб","М-204", "Андреевский И.Л."), new para(times[3],"","","",""), new para(times[4],"Деловой иностранный язык", "Практика","М-316", "Ушакова М.А."), new para(times[5],"", "","",""), new para(times[6],"", "","",""));

	var monday_7=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"МСЭП/МОН", "Лаб", "M-208", "Соколов В.Н./Карпова Г.В."), new para(times[4],"МСЭП/МОН", "Лаб", "M-208", "Соколов В.Н./Карпова Г.В."), new para(times[5],"","","",""), new para(times[6],"","","",""))

var tuesday_7=new day(new para(times[1],"","","",""),new para(times[2],"","","",""),new para(times[3],"","","",""),new para(times[4],"Эконометрика","Лекция","М-Акт.зал","Нименья И.Н."), new para(times[5],"Эконометрика","Практика","М-Акт.зал","Нименья И.Н."),new para(times[6],"","","",""))

var wednesday_7=new day(new para(times[1],"Системный анализ", "Лекция","М-510","Кондратьев А.В."),new para(times[2],"Менеджмент", "Практика","М-624","Фирсова С.А."), new para(times[3],"Менеджмент", "Лекция","М-412", "Фирсова С.А."), new para(times[4],"Методы соц. - эконом. прогнозирования", "Лекция", "М-410","Соколов В.Н.") , new para(times[5],"","","",""), new para(times[6],"","","",""))

var thursday_7=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"","","",""), new para(times[4],"","","",""), new para(times[5],"","","",""), new para(times[6],"","","",""))

var friday_7=new day(new para(times[1],"","","",""),new para(times[2],"Математические методы в демографии", "Лекция","М-504","Грушко А.М."),new para(times[3],"Математические методы в демографии","Практика","М-612","Грушко А.М."),new para(times[4],"","","","") , new para(times[5],"","","",""), new para(times[6],"","","",""))

var saturday_7=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"","","",""), new para(times[4],"","","",""), new para(times[5],"","","",""), new para(times[6],"","","",""))
var monday_8=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"Эконометрика", "Лаб","M-208", "Нименья И.Н."), new para(times[4],"Эконометрика", "Лаб","М-208","Нименья И.Н.") , new para(times[5],"Методы соц. - эконом. прогнозирования","Лаб","М-204","Соколов В.Н."), new para(times[6],"Методы соц. - эконом. прогнозирования","Лаб","М-204","Соколов В.Н."))
var tuesday_8=new day(new para(times[1],"","","",""),new para(times[2],"","","",""), new para(times[3],"","","",""), new para(times[4],"", "","",""), new para(times[5],"","","",""), new para(times[6],"","","",""))

var wednesday_8=new day(new para (times[1],"Системный анализ","Лекция","М-510","Кондратьев А.В."),new para(times[2],"Системный анализ","Практика","М-702","Кондратьев А.В."), new para(times[3],"Менеджмент","Лекция","М-412","Фирсова С.А."), new para(times[4],"","","",""), new para(times[5],"","","",""), new para(times[6],"","","",""))

var thursday_8=new day(new para(times[1],"Эконометрика","Лекция","М-720","Нименья И.Н."),new para(times[2],"","","",""), new para(times[3],"Методы соц. - эконом. прогнозирования","Практика","М-410","Соколов В.Н."), new para(times[4],"Методы соц. - эконом. прогнозирования", "Лекция","М-410","Соколов В.Н."), new para(times[5],"","","",""), new para(times[6],"","","",""))

var friday_8=new day(new para(times[1],"","","",""),new para(times[2], "Математические методы в демографии", "Лекция","М-504","Грушко А.М."),new para(times[3]," Моделирование операций с недвижимостью", "Лекция","М-504","Карпова Г.В."),new para(times[4]," Моделирование операций с недвижимостью","Практика","М-702","Карпова Г.В."),new para(times[5],"","","","") , new para(times[6],"","","",""))

var saturday_8=new day(new para(times[1],"","","",""),new para(times[2],"Мировая экономика","Лекция","М-614","Исаева Н.А."),new para(times[3],"Мировая экономика","Практика","М-614","Исаева Н.А."), new para(times[4],"Английский язык","Практика","П-304/314","Попова Е.А./ Несмеянов А.В."), new para(times[5],"","","",""), new para(times[6],"","","",""))
	
			
			function weeky(what)
			{
				switch(what)
				{
					case "now": var what=new Date()
					break;
				default:what=new Date(what)					
				}
				for(var i=0; i<=one.length; i=i+2)
					{
						if(what>=new Date(one[i])&what<new Date(one[i+1]))
						{
							firweek(what, $("#gr_tog>label.ui-state-active>span").text())					
							$("#week_tog>label:first").addClass("ui-state-active")
							$("#week_tog>label:first").attr("aria-pressed", true)
							$("#week_tog>label:last").removeClass("ui-state-active")
							$("#week_tog>label:last").attr("aria-pressed", false)
							week_tog(what)	
						}
					}
					for (var j=0; j<=two.length;j=j+2)
					{
						if(what>=new Date(two[j])&what<new Date(two[j+1]))
						{
							secweek(what, $("#gr_tog>label.ui-state-active>span").text())							
							$("#week_tog>label:first").removeClass("ui-state-active")
							$("#week_tog>label:first").attr("aria-pressed", false)	
							$("#week_tog>label:last").addClass("ui-state-active")
							$("#week_tog>label:last").attr("aria-pressed", true)
							week_tog(what)
								
						}
					}
			}
			$.datepicker.setDefaults($.extend($.datepicker.regional["ru"]));
			$("#datepicker").datepicker(
			{
				minDate:new Date("09/06/2010"),maxDate:new Date("01/30/2011"), dateFormat: 'mm/dd/yy',
				onSelect:function(dateText)
				{	if($(".no").length==0)				
						weeky(dateText)
				}
			}).draggable();	
			
			$("#datepicker .ui-datepicker-week-end:odd:not(:first, .ui-datepicker-other-month, .ui-datepicker-today)").livequery(function()
			{
				$(this).addClass("ui-datepicker-unselectable ui-state-disabled");
				var day=$(this).children("a").text()
				if(day!=="")
				{
					$(this).children("a").remove()
					$(this).append("<span class=ui-state-default>"+day+"</span>")
				}
			})
			$("#datepicker .ui-datepicker-week-end .ui-datepicker-today").livequery(function()
			{
				$(this).addClass("ui-datepicker-ui-state-disabled");
				var day=$(this).find("a").text()
				if(day!=="")
				{
					$(this).children("a").remove()
					$(this).append("<span class=ui-state-default>"+day+"</span>")
				}
			})
			function swool(name)
			{
				$(this).tooltip(
					{
						delay: 0,
						track: true,
						left:-150,
						showURL: false,
						bodyHandler: function()
						{
							return $("<img/>").attr("src", "images/prepod/"+name+".jpg");
						}
					})
			}
			$(".ui-accordion-content-prep").livequery(function()
			{
				switch($(this).children("p").text())
				{
					case "Соколов Р.В.":swool.call($(this),"sokolov");				
						break;
					case "Андреевский И.Л.":swool.call($(this),"andreevskiy");
						break;
					case "Брусакова И.А.":swool.call($(this),"brusakova");							
						break;
					case "Чиркова М.Ю.":swool.call($(this),"chirikova")
						break;
					case "Лазарева М.В.":swool.call($(this),"lazareva")
						break
					case "Масино М.Н.":swool.call($(this),"masino")
						break
					case "Панова Е.Н.":swool.call($(this),"panova")
						break;
					case "Еникеева Л.А.":swool.call($(this),"enikeeva")
						break
					case "Пономарев В.В.":swool.call($(this),"ponomarev")
						break
					case "Попова Е.А.":swool.call($(this),"popova")
						break
					case "Кондратьев А.В.":swool.call($(this),"kondratiev")
						break
					case "Фирсова С.А.":swool.call($(this),"firsova")
						break
					case "Исаева Н.А.":swool.call($(this),"isaeva")
						break
					case "Грушко А.М.":swool.call($(this),"grushko")
						break
					case "Карпова Г.В.":swool.call($(this),"karpova")
						break
					case "Соколов В.Н.":swool.call($(this),"sokolovvn")
						break
					case "Попова Е.А./ Несмеянов А.В.":swool.call($(this),"popova")
						break

						
				}
			})			
		function sixteen()
			{					
				if(new Date().getHours()>16)
				{
					var a=new Date().getDay()
				}
				else if(new Date().getHours()<=16)
				{
					a=new Date().getDay()-1
				}					
				return a
			}
			
		function firweek (curr,gr)
			{
				switch(gr)
					{
						case "371":
						$("#mon").html(monday_1.table(curr))
						$("#tue").html(tuesday_1.table(curr))
						$("#wed").html(wednesday_1.table(curr))
						$("#thu").html(thursday_1.table(curr))
						$("#fri").html(friday_1.table(curr))
						$("#sat").html(saturday_1.table(curr));
						break;
						case "372":
						$("#mon").html(monday_3.table(curr))
						$("#tue").html(tuesday_3.table(curr))
						$("#wed").html(wednesday_3.table(curr))
						$("#thu").html(thursday_3.table(curr))
						$("#fri").html(friday_3.table(curr))
						$("#sat").html(saturday_3.table(curr));
						break;
						case "373":
						$("#mon").html(monday_5.table(curr))
						$("#tue").html(tuesday_5.table(curr))
						$("#wed").html(wednesday_5.table(curr))
						$("#thu").html(thursday_5.table(curr))
						$("#fri").html(friday_5.table(curr))
						$("#sat").html(saturday_5.table(curr));
						break;
						case "3571":
						$("#mon").html(monday_7.table(curr))
						$("#tue").html(tuesday_7.table(curr))
						$("#wed").html(wednesday_7.table(curr))
						$("#thu").html(thursday_7.table(curr))
						$("#fri").html(friday_7.table(curr))
						$("#sat").html(saturday_7.table(curr));
						break;
					}
			}
		function secweek (curr,gr)
			{
				switch(gr)
					{
						case "371":
						$("#mon").html(monday_2.table(curr))
						$("#tue").html(tuesday_2.table(curr))
						$("#wed").html(wednesday_2.table(curr))
						$("#thu").html(thursday_2.table(curr))
						$("#fri").html(friday_2.table(curr))
						$("#sat").html(saturday_2.table(curr));
						break;
						case "372":
						$("#mon").html(monday_4.table(curr))
						$("#tue").html(tuesday_4.table(curr))
						$("#wed").html(wednesday_4.table(curr))
						$("#thu").html(thursday_4.table(curr))
						$("#fri").html(friday_4.table(curr))
						$("#sat").html(saturday_4.table(curr));
						break;
						case "373":
						$("#mon").html(monday_6.table(curr))
						$("#tue").html(tuesday_6.table(curr))
						$("#wed").html(wednesday_6.table(curr))
						$("#thu").html(thursday_6.table(curr))
						$("#fri").html(friday_6.table(curr))
						$("#sat").html(saturday_6.table(curr));
						break;
						case "3571":
						$("#mon").html(monday_8.table(curr))
						$("#tue").html(tuesday_8.table(curr))
						$("#wed").html(wednesday_8.table(curr))
						$("#thu").html(thursday_8.table(curr))
						$("#fri").html(friday_8.table(curr))
						$("#sat").html(saturday_8.table(curr));
						break;
					}
			}
		function week_tog (dateText)
			{
				for(var o=0; o<8;o++)
				{
					if(dateText.getDay()==0)
					{
						$('#week').accordion("activate", 0)
					}
					else if(dateText.getDay()!==0 && dateText.getDay()==o)
					{
						
						if(dateText.getHours()<=16)
						{
							$('#week').accordion("activate", o-1)
						}
						else
						{
							$('#week').accordion("activate", o)
						}
					}
				}		
					
				
			}
					
			$("#tabs").tabs(
			{
				fx: { opacity: 'toggle' }
			}).css("width", $(document).width());
			$('#week').accordion({autoHeight: false, active:sixteen(), animated: 'bounceslide'}).css("float","left");
			$("#week_tog").buttonset();
			$("#gr_tog").buttonset();
			$("#tip").buttonset();	
			$("#tabs").css("height", height)
			$("#tabs").css("width", width)
			if(loc>100)
			{
				$("#week").css("width", width-40)
				$("#datepicker").css({"position":"absolute", "bottom":"0px"})
			}
			else
			{
				$("#week").css("width", 0.7*width)
			}
			$("#radio1").click(function()
			{
				firweek(new Date(),$("#gr_tog>label.ui-state-active>span").text())
				$("#datepicker").datepicker("setDate", new Date())
			})
			$("#radio2").click(function()
			{				
				secweek(new Date(), $("#gr_tog>label.ui-state-active>span").text())
				$("#datepicker").datepicker("setDate", new Date())
				
			})
			$("#gr_tog").click(function(event)
			{
				if($("#adv").css("display")=="block")
				{
					$("#adv").css("display","none")
				}
				var elem = $(event.target)
				if (elem.hasClass("371"))
				{
					check_gr("371")					
				}
				if (elem.hasClass("372"))
				{
					check_gr("372")					
				}
				if (elem.hasClass("373"))
				{
					check_gr("373")					
				}
				if (elem.hasClass("3571"))
				{
					check_gr("3571")					
				}
			})
			function check_gr(clas)
			{
				
				if ($("#group").hasClass(clas)){ }
				else
				{
					document.title = "Расписание - "+clas;
					$("#all").slideUp(300);
					weeky("now")
					$("#all").slideDown(300);
				}
				$("#datepicker").datepicker("setDate", new Date())
				$("#group").removeClass()
				$("#group").addClass(clas)						
			}

	}
)
	
