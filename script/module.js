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
	        //margin-left:-33.333%; -66.666%; -99.999%
			//--------------------------month-UL
            this.$ele.append('<div class="calendars_tabWrap lightbrown"><a class="pre"></a><ul class="newtab tabcontrol"></ul><a  class="next"></a></div>');         				
            //--------------------------thead
            this.$ele.append('<table class="calendars_tbody"><thead class=""><tr class="week"><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th></tr></thead></table>');
            //--------------------------tbody
	       	this.getajax();
         
             //-----------------按鈕刪除月曆
             $('.pre').on('click',function(){
             	{$('.calendars_tbody').remove();
             	$('.newtab').find('.now').prev().addClass('now');
             	$('.newtab').find('.now').next().removeClass('now');      	
              	// $('.newtab').children('.tab:eq(0)').css('margin-left','0');
              	self.creatnewtbody();
              	//要再匯入一次ajax
             };    

             });
               $('.next').on('click',function(){
             	$('.calendars_tbody').remove();
             	$('.newtab').find('.now').next().addClass('now');
             	$('.newtab').find('.now').prev().removeClass('now');
             	self.creatnewtbody();
             	//要再匯入一次ajax
              // $('.newtab').children('.tab:eq(0)').css('margin-left','-33.333%');                 
             });            

			
             //-----------------按鈕刪除月曆--end

			return this;
			}

    getajax() {
			//新建一个json对象
			// var j={
			//     "name":"sea",
			//     "age":30
			// }
			// console.log(j);
			 
			// //先獲得要修改键的值，避免丢失。
			// var temp=j.name;
			// delete(j.name);
			// console.log(j);
			 
			// //再定义新的键和值
			// j.nick=temp;
			// console.log(j);

            $.ajax({method: 'GET',
			url: './json/data5.json'
			}).done(function(data){
            const daydata  = JSON.parse(data);	
            //console.log(daydata);
			const numofdata = daydata.length; //算有幾筆資料        
            const daydateControl = daydata.sort(function (a, b) {
				 return a.date > b.date ? 1 : -1;
				});//用date排序
            //console.log(daydateControl);//排列過的順序
      		

            //---------------------------篩選json資料重複的------------------------
		   			//var lookup = {};
					// var items = daydateControl;
					// var result = [];
					//
					// for (var item, i = 0; item = items[i++];) {
					//   var date = item.date;
					//
					//   if (!(name in lookup)) {
					//     lookup[date] = 1;
					//     result.push(date);
					//   }
					// }
					// console.log(lookup);
			//------------------------------到這邊為止是整理json進來的資料---------------------------
			//------------------------------這邊開始設定日期----------------------------------------
		    
			console.log(self.option.initYearMonth);//抓到起始月份
			//篩選年份跟月份 產li 那個月設定成tab 然後加now



         	const firstday = daydateControl[1].date;//######//整串的第一個整串資料的第二筆產月曆
            //console.log(firstday);
		    const adate =  new Date(firstday);            
 			// const date = new Date('2018/02/08'); 
	        const mYear =adate.getFullYear();       //本年 //const mYear = date.getFullYear(); 
	        const mMonth = adate.getMonth();   
	        let limMonth;
	        limMonth = mMonth+1;    //本月 //const mMonth = date.getMonth(); 
	       	adate.setDate(1);
	        const startDay = adate.getDay();//4
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
            for(i = 0; i<numofdata; i++){
                const lidate= daydateControl[i].date;
                //console.log(lidate);//日期
                const liNewDate = new Date(lidate);//把日期設為這個迴圈的日期
                const liMonth = liNewDate.getMonth();
                //console.log(liMonth);//這個迴圈的月份
                const liYear = liNewDate.getFullYear();
                //console.log(liYear);
				let resetTime = moment().set({'year': liYear, 'month': liMonth});//轉向到這個日期
             	//console.log(resetTime);//
				const resetMonth = resetTime.get('Month')+1;
				const resetYear  = resetTime.get('Year');
				lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+resetMonth+"月"+'</a></span></li>'
                //console.log(lihtml);
                };
            $('.newtab').append(lihtml);
            //----產tab end       
			//------------------------點擊換tbody--------------
			$('.tab').on('click',function(){
			 	$('.calendars_tbody').remove();
			 		$('.newtab').find('.now').removeClass('now');
			 		$(this).addClass('now');
			 		self.creatnewtbody();
			       });
			//-----------------------點擊換tbody end-------------
             //--------------------進來後第一個要顯示的tab
            $('.tab:eq(1)').addClass('now');//######加進去現在要顯現的月份
            //產這個date的月曆
	        var numRow = 0;  //  每7個td+tr
	        var i;        //日期
	        var html = '';
	        html += '<tbody>';
	        html += '<tr class="days">';
	        for (i = 0; i < startDay; i++) {
	            html += '<td class="lastmonth"><div></div></td>';
	            numRow++;
	        }	
	        //console.log(daydateControl);
	
	        //--------------------------------------------
	        for (var j = 1; j <= nDays; j++) {//mYear mMonth j

	        		let daynum;
	        		let monthnum;
		        	if(j<10){ daynum = '0'+j;}else{daynum = j;}
			        if(limMonth<10){ monthnum='0'+limMonth }else{ monthnum=limMonth }
	                html += '<td><div class="box'+" "+mYear+monthnum+daynum+'"><span class="num">';
	                const cuttectDate = ''.concat(mYear, monthnum, daynum);
	                html += j+'</span>'; //加日期
	                //---------對日期塞detail 
	         		for(let k = 0; k<numofdata; k++){
				         const DD = parseInt(daydateControl[k].date.substring(8.9));//全部的天數//
				         const MM = parseInt(daydateControl[k].date.substring(5.7));//月份
				         let ddd; 
				         let mmm ;
				         if (DD<10){ddd="0"+DD;}else{ddd=DD;}	        
				         if (MM<10){mmm="0"+MM;}else{mmm=MM;}

				         const YYYY = parseInt(daydateControl[k].date.substring(0.4));//年份
				         const rr =	''.concat(YYYY,mmm, ddd);

				         //console.log(rr);
				        if(cuttectDate===rr){      	
				       		html += '<div class="details"><span class="status">'+daydateControl[k].status+'</span><span class="sell">可賣 : <i>'+daydateControl[k].availableVancancy+'</i></span><span class="group">團位 : <i>'+daydateControl[k].totalVacnacy+'</i></span><span class="price">'+daydateControl[k].price+'</span></div>';
				        }
				    	};	
	                //---------對日期塞detail end
	                html += '</div></td>';             
	                numRow++;
	        if (numRow == 7) {  ////  每7個td  +tr
	                numRow = 0;
	                html += '</tr><tr>';
	            }}

            //--------------------------------------------
	        for (i = 0; i<lastDay; i++) {
	            html += '<td class="nextmonth"><div></div></td>';
	            numRow++;
	        }
	        //--------------------------------------------
	        if(totalCells<=35){
	         html += '<tr><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td>'
	        };
            html += '</tr>';
	        html += '</tbody>';
	        $('.calendars_tbody').append(html);
	        //-----點擊特效
	        $('.box').on('click',function(){
				$('.box>.details').parent().addClass('active');
			})
			});
			return this;
			}



	methods () {
			return this;
			}

    creatnewtbody(){
    				//ajax 把要得抓來
    				//把class依樣加進年月日 在對好塞span
    				$.ajax({method: 'GET',
					url: './json/data5.json'
					}).done(function(data){
		            const daydata  = JSON.parse(data);	
		            //console.log(daydata);
					const numofdata = daydata.length; //算有幾筆資料        
		            const daydateControl = daydata.sort(function (a, b) {
						 return a.date > b.date ? 1 : -1;
						});//用date排序
		            //console.log(daydateControl);//排列過的順序
      				
     
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
			        var html = '';
			        html += '<tbody>';
			        html += '<tr class="days">';
			        for (i = 0; i < startDay; i++) {
			            html += '<td class="lastmonth"><div></div></td>';
			            numRow++;
			        }
			        //--------------------------------------------
			        for (var j = 1; j <= nDays; j++) {
			        	let daynum;
		        		let monthnum;
			        	if(j<10){ daynum = '0'+j;}else{daynum = j;}
				        if(limMonth<10){ monthnum='0'+limMonth }else{ monthnum=limMonth }
			                html += '<td><div class="box'+" "+mYear+monthnum+daynum+'"><span class="num">';
			            	const cuttectDate = ''.concat(mYear, monthnum, daynum);
			                html += j+'</span>';    //加日期
			                //------------------------
			                //---------對日期塞detail 
			         		for(let k = 0; k<numofdata; k++){
						         const DD = parseInt(daydateControl[k].date.substring(8.9));//全部的天數//
						         const MM = parseInt(daydateControl[k].date.substring(5.7));//月份
						         let ddd; 
						         let mmm ;
						         if (DD<10){ddd="0"+DD;}else{ddd=DD;}	        
						         if (MM<10){mmm="0"+MM;}else{mmm=MM;}

						         const YYYY = parseInt(daydateControl[k].date.substring(0.4));//年份
						         const rr =	''.concat(YYYY,mmm, ddd);

						         //console.log(rr);
						        if(cuttectDate===rr){      	
						       		html += '<div class="details"><span class="status">'+daydateControl[k].status+'</span><span class="sell">可賣 : <i>'+daydateControl[k].availableVancancy+'</i></span><span class="group">團位 : <i>'+daydateControl[k].totalVacnacy+'</i></span><span class="price">'+daydateControl[k].price+'</span></div>';
						        }
						    	};	
			                //---------對日期塞detail end
			                //------------------------
			                html += '</div></td>';
			                numRow++;
			        if (numRow == 7) {  ////  每7個td  +tr
			                numRow = 0;
			                html += '</tr><tr>';
			            }}
		            //--------------------------------------------
			        for (i = 0; i<lastDay; i++) {
			            html += '<td class="nextmonth"><div></div></td>';
			            numRow++;
			        }
			        //--------------------------------------------
			        if(totalCells<=35){
			         html += '<tr><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td><td class="nextmonth"><div></div></td>'
			        };
		            html += '</tr>';
			        html += '</tbody>';      
			        $('.calendars').append('<table class="calendars_tbody"><thead class=""><tr class="week"><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th></tr></thead><tbody id="calendarpermonth"></tbody></table>');
			        $('.calendars_tbody').append(html);
			        $('.box').on('click',function(){
						$('.box>.details').parent().addClass('active');
					})
			    });//----ajax end
          	    return this;
          }

}
export { ModuleName, ModuleDefaults, ModuleReturns, Module };