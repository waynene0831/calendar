creatnewtbody(){
					//塞inputdata到這個function產月曆	
    				//----------------------------排列過的順序

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
						
						         let ddd; if (DD<10){ddd="0"+DD;}else{ddd=DD;}	
						         let mmm; if (MM<10){mmm="0"+MM;}else{mmm=MM;}						                 						         
						         const YYYY = parseInt(daydateControl[k].date.substring(0.4));//年份
						         const rr =	''.concat(YYYY,mmm, ddd);

						       if(cuttectDate===rr){      	
					       		if(daydateControl[k].status==='額滿' ||daydateControl[k].status==='截止' ||daydateControl[k].status==='後補'){
							       html += '<span class="status lg-org">'+daydateControl[k].status+'</span>' ;
							       }
							    else{
							       html += '<span class="status">'+daydateControl[k].status+'</span>' ;
							        	 };
							       html +='<span class="sell">可賣 : '+daydateControl[k].availableVancancy+'</span><span class="group">團位 : '+daydateControl[k].totalVacnacy+'</span><span class="price">$'+daydateControl[k].price+'</span>'
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
			    html +='<div class="listPage"><span class="listChangeBox"><a class="prevList"><span class="arrow-gl m-r-xs"></span>上一頁</a></span><span class="num"><span class="current_page"></span><span style="padding:0 3px;">/</span><span class="total_page"></span></span><span class="listChangeBox"><a class="nextList">下一頁<span class="arrow-gr m-lr-xs"></span></a></span></div>';
	        
			    $('.calendars_daysWrap').append(html);	       

			    $('.calendars_daysWrap').find('.price').parent().addClass('hasdata'); 

			    $('.calendars').find('.hasdata').on('click', function() { 
                $('.calendars').find('.hasdata').removeClass('active');
                $(this).addClass('active');
            	});

			    self.listpage();
          	    return this;
          }
        