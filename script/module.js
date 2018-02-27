const ModuleName = 'calendar';
const ModuleDefaults =  {
  
};
const ModuleReturns = [];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
        self=this;
	}

	init () {   
			//calendars_daymode    calendars_listmode  
            this.$ele.append('<div class="calendars calendars_daymode"></div>');        
            //月份
            this.$ele.find('.calendars').append('<div class="calendars_tabWrap"><a class="pre"></a><ul class="newtab"></ul><a class="next"></div>')
            //星期
            this.$ele.find('.calendars').append('<div class="calendars_weeksWrap"><span>星期日</span><span>星期一</span><span>星期二</span><span>星期三</span><span>星期四</span><span>星期五</span><span>星期六</span></div>');
           	//日期
            this.$ele.find('.calendars').append('<ul class="calendars_daysWrap"></ul>')

            
	       	this.getajax();
	       
             //-----------------按鈕刪除月曆
             	$('.pre').on('click',function(){
 				$('.calendars_daysWrap>li').remove();
             	$('.newtab').find('.now').prev().addClass('now');
             	$('.newtab').find('.now').next().removeClass('now');
              	self.creatnewtbody(); 	    
             });
               	$('.next').on('click',function(){
             	$('.calendars_daysWrap>li').remove();
             	$('.newtab').find('.now').next().addClass('now');
             	$('.newtab').find('.now').prev().removeClass('now');           	
             	self.creatnewtbody();               
             }); 

		        $('.listchange').on('click',function(){
		        	self.switch();
		        });	


			return this;
			}

		switch() {
			  	if($('.calendars').hasClass('calendars_daymode')){
			  		$('.calendars').removeClass('calendars_daymode');
			  		$('.calendars').addClass('calendars_listmode');
					$('.listchange').text("切換月曆模式");
			  	}else{
			  		$('.calendars').addClass('calendars_daymode');
			  		$('.calendars').removeClass('calendars_listmode');
			  		$('.listchange').text("切換列表模式");
			  	}
		  		//.text("切換列表模式");  .text("切換月曆模式");
				return this;
				}




    getajax() {
    		self=this;
            $.ajax({
			method: 'GET',
			url: './json/data4.json',
			dataType: 'json'
			}).done(function(data) {
             let daydata;
             daydata = data;

            //---------------------------篩選json資料重複的------------------------
		   			var lookup = {};
					var items = daydata;
					 daydata = [];
					
					for (var item, i = 0; item = items[i++];) {
					  var date = item.date;
					
					  if (!(date in lookup)) {
					    lookup[date] = 1;
					    daydata.push(item);
					  }
					}
					//console.log(daydata);
			 //---------------------------篩選json資料重複的------------------------
            const daydateControl = daydata.sort(function (a, b) {
				 return a.date > b.date ? 1 : -1;
				});//用date排序
            //console.log(daydateControl);//排列過的順序
      		const numofdata = daydateControl.length; //算有幾筆資料  
      					
      	

			//------------------------------到這邊為止是整理json進來的資料---------------------------


			//------------------------------這邊開始設定日期----------------------------------------
		    
			//---------------------------------------進入月份--------------------------------------
			// console.log(self.option.initYearMonth.substring(0,4));
   //          const aaayear = self.option.initYearMonth.substring(0,4); //2017
   // 			console.log(self.option.initYearMonth.substring(4.5)); 
   //         	const aaamonth =self.option.initYearMonth.substring(4.5); //05
   //          const aaatime = moment().set({'year': aaayear, 'month': aaamonth});
   // 			console.log(aaatime);//用他的前後月

   // 			const anotherfirstday = aaayear+'/'+aaamonth+'/'+01;
   			//const resetYear  = aaatime.get('Year');
      		//const resetMonth = aaatime.get('Month');   
      		//const preMonth = resetMonth-1;
      		//const nextMonth = resetMonth+1; 
            // lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+preMonth+"月"+'</a></span></li>'
            // lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+resetMonth+"月"+'</a></span></li>'
            // lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+nextMonth+"月"+'</a></span></li>'



			//---------------------------------------進入月份--------------------------------------
         	const firstday = daydateControl[1].date;//######//整串的第一個整串資料的第二筆產月曆
            //console.log(firstday);
		    const adate =  new Date(firstday);            
 			// const date = new Date('2018/02/08'); 
	        const mYear =adate.getFullYear();       //本年 //const mYear = date.getFullYear(); 
	        const mMonth = adate.getMonth();
	        const day_list = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
			//console.log(day_list[weekday]);
	        let limMonth;
	        limMonth = mMonth+1;
	        //本月
	        //const mMonth = date.getMonth(); 
	       	adate.setDate(1);
	        const startDay = adate.getDay();//
            const mDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
            if ( ( (mYear % 4 == 0) && (mYear % 100 != 0) ) || (mYear % 400 == 0) ) mDays[1] = 29;
            const nDays = mDays[mMonth];		
		    const total = mDays[mMonth] + startDay;
            // console.log(nDays);//當月天數
		    const totalCells = total + ( total%7 ? 7 - total%7 : 0 );
		    const lastDay = totalCells - nDays - startDay;
		    // console.log(lastDay);
            //----產tab
            let lihtml = '';
            //-----------新作的tab

           	

   			
            
       		lihtml += '<li class="tab"><a href="#"><span>2016 11月</a></span></li>'			
       		lihtml += '<li class="tab"><a href="#"><span>2016 12月</a></span></li>'
       		lihtml += '<li class="tab"><a href="#"><span>2017 01月</a></span></li>'
            //console.log(lihtml);

            //--------------------tab2
	//--------------------------抓ajax檔案做的li
            	//let resetTime = moment().set({'year': liYear, 'month': liMonth});//轉向到這個日期
    //         //for(i = 0; i<3; i++){//3記得改回numofdata
    //             //const lidate = daydateControl[i].date;
    //             //console.log(lidate);//日期
    //             //const liNewDate = new Date(lidate);//把日期設為這個迴圈的日期
    //             //const liMonth = liNewDate.getMonth();
    //             //console.log(liMonth);//這個迴圈的月份
    //             //const liYear = liNewDate.getFullYear();
    //             //console.log(liYear);
				// let resetTime = moment().set({'year': liYear, 'month': liMonth});//轉向到這個日期
  				//console.log(resetTime);//
				// const resetMonth = resetTime.get('Month')+1;
				// const resetYear  = resetTime.get('Year');
				// lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+resetMonth+"月"+'</a></span></li>'
                //console.log(lihtml);
                // };
              
            $('.newtab').append(lihtml);
            //----產tab end  

			//------------------------點擊換tbody--------------
			$('.tab').on('click',function(){
			 	$('.calendars_daysWrap>li').remove();
			 		$('.newtab').find('.now').removeClass('now');
			 		//$('.listH>ul').remove();
			 		$(this).addClass('now');
			 		self.creatnewtbody();
			       });
			//-----------------------點擊換tbody end-------------

             //--------------------進來後第一個要顯示的tab
            $('.tab:eq(0)').addClass('now');//######加進去現在要顯現的月份
            //產這個date的月曆

	      
	        var i;        //日期
	        var html = '';
	        html += '';
	        for (i = 0; i < startDay; i++) {
	            html += '<li class="lastmonth"><div></div></li>';
	        }	
	        //console.log(daydateControl);
			  let list;
			  list ='';
	        //-------------------------------------------
	        for (var j = 1; j <= nDays; j++) {//mYear mMonth j
	        		let weekday;
	        		let daynum;
	        		let monthnum;
		        	if(j<10){ daynum = '0'+j;}else{daynum = j;}
			        if(limMonth<10){ monthnum='0'+limMonth }else{monthnum=limMonth}
	                html += '<li class="days'+" "+mYear+monthnum+daynum+'"><div class="date"><span class="num">';
	                const cuttectDate = ''.concat(mYear, monthnum, daynum);
					const weekdate =  new Date(mYear+'/'+monthnum+'/'+daynum);   
	        		weekday = weekdate.getDay();
	                 // console.log(cuttectDate);
	                html += j+'</span><span class="weekday">'+day_list[weekday]+'</span></div>'; //加日期

	                //---------對日期塞detail  
	       			//if(daydateControl[k].guaranteed === 'ture'){
				    //     	html += '<span class="tip">'保證出團'</span>';
				    // }
	         		for(let k = 0; k<numofdata; k++){
				         const DD = parseInt(daydateControl[k].date.substring(8.9));//全部的天數//
				         const MM = parseInt(daydateControl[k].date.substring(5.7));//月份
				         let ddd; 
				         let mmm;
				         if (DD<10){ddd="0"+DD;}else{ddd=DD;}	        
				         if (MM<10){mmm="0"+MM;}else{mmm=MM;}

				         const YYYY = parseInt(daydateControl[k].date.substring(0.4));//年份
				         const rr =	''.concat(YYYY,mmm, ddd);
				         //console.log(daydateControl[k].guaranteed);
				         //console.log(rr);     ;
				        if(cuttectDate===rr){      	
				       		if(daydateControl[k].status==='額滿' ||daydateControl[k].status==='截止' ||daydateControl[k].status==='後補'){
						        	 	html += '<span class="status lg-org">'+daydateControl[k].status+'</span>' ;
						        	 }
						        	 else{
						        	 	html += '<span class="status">'+daydateControl[k].status+'</span>' ;
						        	 };
						    html +='<span class="sell">可賣 :'+daydateControl[k].availableVancancy+'</span><span class="group">團位 : '+daydateControl[k].totalVacnacy+'</span><span class="price">$'+daydateControl[k].price+'</span>'
				       		if(daydateControl[k].guaranteed == true){
				       		html +='<span class="tip">保證出團<span>';
				       		}
				        }		       		
				    	};	
	                //---------對日期塞detail end
	                html += '</div></li>';}           

            //--------------------------------------------
	        for (i = 0; i<lastDay; i++) {
	            html += '<li class="nextmonth"></li>';
	        }
	         //--------------------------------------------
	         if(totalCells<=35){
	        	for (i = 0; i<7; i++) {
	          html += '<li class="nextmonth"></li>'
	    	}
	         };
	            
	        //-----點擊特效
	  		

			$('.calendars_daysWrap').append(html);   

			$('.calendars_daysWrap').find('.price').parent().addClass('hasdata');

			$('.calendars').find('.hasdata').on('click', function() { 
                $('.calendars').find('.hasdata').removeClass('active');
                $(this).addClass('active');
            });    



			});
			return this;
			}
		
 creatnewtbody(){
    				//ajax 把要得抓來
    				//把class依樣加進年月日 在對好塞span
    				$.ajax({
					method: 'GET',
					url: './json/data4.json',
					dataType: 'json'
					}).done(function(data) {
		             let daydata;
		             daydata = data;

		            //---------------------------篩選json資料重複的------------------------
				   			var lookup = {};
							var items = daydata;
							 daydata = [];
							for (var item, i = 0; item = items[i++];) {
							  var date = item.date;
							  if (!(date in lookup)) {
							    lookup[date] = 1;
							    daydata.push(item);
							  }
							}
							//console.log(daydata);
			
					 //---------------------------篩選json資料重複的------------------------
		            const daydateControl = daydata.sort(function (a, b) {
						 return a.date > b.date ? 1 : -1;
						});//用date排序
		            //console.log(daydateControl);//排列過的順序
		      		const numofdata = daydateControl.length; //算有幾筆資料  
      					
     
    				//----------------------------

    	      		let creatnYear = parseInt($('.newtab').find('.now').text().substring(0,4));
                	let creatnMonth = parseInt($('.newtab').find('.now').text().substring(5,7))-1;       
            	    //console.log(creatnYear);
                	//console.log(creatnMonth);
                	let creatnewTime = moment().set({'year': creatnYear, 'month': creatnMonth});
                    //console.log(creatnewTime);
                    const newdate =  new Date(creatnewTime);
                    //console.log(newdate);
                    const mYear =newdate.getFullYear();       
                    //本年 //const mYear = date.getFullYear(); 
			        const mMonth = newdate.getMonth();   
			        const limMonth = mMonth+1;    //本月 

					const day_list = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

			        //const mMonth = date.getMonth(); 
			       	newdate.setDate(1);
			        const startDay = newdate.getDay();//4
		            const mDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
		            if ( ( (mYear % 4 == 0) && (mYear % 100 != 0) ) || (mYear % 400 == 0) ) mDays[1] = 29;
		            const nDays = mDays[mMonth];		
				    const total = mDays[mMonth] + startDay;
		            // console.log(nDays);//當月天數	    		            
				    const totalCells = total + ( total%7 ? 7 - total%7 : 0 );
				    const lastDay = totalCells - nDays - startDay;
				    var numRow = 0;  //  每7個td  +tr
			        var i;        //日期
			        let newlist;
					newlist ='';
			        var html = '';
			        for (i = 0; i < startDay; i++) {
			            html += '<li class="lastmonth"><div></div></li>';
			        }
			        //--------------------------------------------
			        for (var j = 1; j <= nDays; j++) {
			        	let weekday;
			        	let daynum;
		        		let monthnum;
			        	if(j<10){ daynum = '0'+j;}else{daynum = j;}
				        if(limMonth<10){ monthnum='0'+limMonth }else{ monthnum=limMonth }
			                html += '<li class="days'+" "+mYear+monthnum+daynum+'"><div class="date"><span class="num">';
			            	const cuttectDate = ''.concat(mYear, monthnum, daynum);
			            	const weekdate =  new Date(mYear+'/'+monthnum+'/'+daynum);   
	        				weekday = weekdate.getDay();
			                 //加日期


			                html += j+'</span><span class="weekday">'+day_list[weekday]+'</span></div>';

			                //---------對日期塞detail 
			         		for(let k = 0; k<numofdata; k++){
						         const DD = parseInt(daydateControl[k].date.substring(8.9));//全部的天數//				         
						         const MM = parseInt(daydateControl[k].date.substring(5.7));//月份

						         const aaa=	daydateControl[k].date;
						         const aaanewdate =  new Date(aaa);
						         const aaagetdays =	aaanewdate.getDay();
						
						         //console.log(day_list[aaagetdays]); 
						         let ddd; 
						         let mmm;
						         if (DD<10){ddd="0"+DD;}else{ddd=DD;}	        
						         if (MM<10){mmm="0"+MM;}else{mmm=MM;}

						         const YYYY = parseInt(daydateControl[k].date.substring(0.4));//年份
						         const rr =	''.concat(YYYY,mmm, ddd);
						         //console.log(rr);
						       if(cuttectDate===rr){      	
					       		if(daydateControl[k].status==='額滿' ||daydateControl[k].status==='截止' ||daydateControl[k].status==='後補'){
							       html += '<span class="status lg-org">'+daydateControl[k].status+'</span>' ;
							       }
							    else{
							       html += '<span class="status">'+daydateControl[k].status+'</span>' ;
							        	 };
							       html +='<span class="sell">可賣 :'+daydateControl[k].availableVancancy+'</span><span class="group">團位 : '+daydateControl[k].totalVacnacy+'</span><span class="price">$'+daydateControl[k].price+'</span>'
					       		if(daydateControl[k].guaranteed == true){
					       		   html +='<span class="tip">保證出團<span>';
					       		}
					        	}		       		
						    	};
			                //---------對日期塞detail end

			                html += '</div></li>';
			                }

		            //--------------------------------------------
			        for (i = 0; i<lastDay; i++) {
			            html += '<li class="nextmonth"></li>';
			        }
			        //--------------------------------------------
			        if(totalCells<=35){
				        	for (i = 0; i<7; i++) {
				          html += '<li class="nextmonth"></li>'
				    	}
			         };
			    $('.calendars_daysWrap').append(html);	       

			    $('.calendars_daysWrap').find('.price').parent().addClass('hasdata'); 

			    $('.calendars').find('.hasdata').on('click', function() { 
                $('.calendars').find('.hasdata').removeClass('active');
                $(this).addClass('active');
            	});


			    });//----ajax end 
          	    return this;
          }
        
 	inputData(inputOpt){
        $.ajax({
                dataType: "json",
                method: 'GET',
                url: './json/data5.json',
            }).done(function(data){
            		let daydata  = JSON.parse(data);           
                	var lookup = {};
					var items = daydata;
					 daydata = [];
					for (var item, i = 0; item = items[i++];) {
					  var date = item.date;
					
					  if (!(date in lookup)) {
					    lookup[date] = 1;
					    daydata.push(item);
					  }
					}
					//console.log(daydata);
			 	const inputnewData = inputOpt.concat(daydata);
	            const inputnewDataControl = inputnewData.sort(function (a, b) {
					 return a.date > b.date ? 1 : -1;
					});//用date排序
	            console.log(daydateControl);//排列過的順序

                //連接inputData與dataSource
				const numofinputnewData = inputnewDataControl.length; //算有幾筆資料  
				const numofdaydateControl = daydateControl.length;
            });
             return this;
   		 };

	destroy(){
        $('.calendars').empty();
        return this;
    }		
	methods () {
			return this;
			}

}
export { ModuleName, ModuleDefaults, ModuleReturns, Module };