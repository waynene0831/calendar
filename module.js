/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(2);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__script_module_js__ = __webpack_require__(4);

const root = ( (root) => {
	if ( typeof root === 'object' && ( root.self === root || root.global === global ) && root ) {
		return root;
	}
} )(self || global || {});

const $ = ( ($) => {
	if ( typeof $ === 'function' ) {
		return $;
	} else {
		throw 'You must import jQuery';
	}
} )(root.jQuery);

$.fn[__WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */]] = function() {
	let module;
	let args = Array.prototype.slice.call(arguments, 0);
	let method = args[0];
	let options = args.slice(1).length<=0?undefined:args.slice(1, args.length);;
	let isReturnMethod = this.length === 1 && typeof method === 'string' && __WEBPACK_IMPORTED_MODULE_0__script_module_js__["d" /* ModuleReturns */].indexOf(method) !== -1;
	let methodRunner = function( method, options, uesReturn ) {
		let $this = $(this);
		let module = $this.data( __WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */] );
		if ( !!module ) {
			if ( typeof method == 'string' && !uesReturn ) {
				module[method].apply(module, options);
			} else if ( typeof method == 'string' && !!uesReturn ) {
				return module[method].apply(module, options);
			} else {
		        throw 'unsupported options!';
		    }
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if ( isReturnMethod ) {
		return methodRunner.call( this, method, options, isReturnMethod );
	} else {
		return this.each(function(){
			let $this = $(this);
			let module = $this.data( __WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */] );
			let opts = null;
			if ( !!module ) {
				methodRunner.call( this, method, options );
			} else {
				opts = $.extend( true, {}, __WEBPACK_IMPORTED_MODULE_0__script_module_js__["b" /* ModuleDefaults */], ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new __WEBPACK_IMPORTED_MODULE_0__script_module_js__["a" /* Module */](this, opts);
				$this.data( __WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */], module );
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModuleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModuleDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModuleReturns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
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
            this.$ele.append('<table class="calendars_tbody"><thead class=""><tr class="week"><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th></tr></thead></table><div class="calendars_list d-no"><div class="listH"></div></div>');
            //--------------------------tbody
	       	this.getajax();
         	
             //-----------------按鈕刪除月曆
             $('.pre').on('click',function(){
             	{$('.calendars_tbody').remove();
             	$('.listH>ul').remove();
             	$('.newtab').find('.now').prev().addClass('now');
             	$('.newtab').find('.now').next().removeClass('now');
              	// $('.newtab').children('.tab:eq(0)').css('margin-left','0');
              	self.creatnewtbody(); 	
             };    

             });
               $('.next').on('click',function(){
             	$('.listH>ul').remove();
             	$('.calendars_tbody').remove();
             	$('.newtab').find('.now').next().addClass('now');
             	$('.newtab').find('.now').prev().removeClass('now');           	
             	self.creatnewtbody();
              // $('.newtab').children('.tab:eq(0)').css('margin-left','-33.333%');                 
             }); 

             $('.listchange').on('click',function(){
				if($('.calendars_list').hasClass('d-no')){
				$('.calendars_list').removeClass('d-no');
				$('.calendars_tbody').addClass('d-no');	
				}else{
				$('.calendars_list').addClass('d-no');
				$('.calendars_tbody').removeClass('d-no');	
				}			
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
			url: './json/data4.json'
			}).done(function(data){
            let daydata  = JSON.parse(data);	
			//console.log(daydata);
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
		    

         	const firstday = daydateControl[1].date;//######//整串的第一個整串資料的第二筆產月曆
            //console.log(firstday);
		    const adate =  new Date(firstday);            
 			// const date = new Date('2018/02/08'); 
	        const mYear =adate.getFullYear();       //本年 //const mYear = date.getFullYear(); 
	        const mMonth = adate.getMonth();
	        const weekday = adate.getDay();
	        const day_list = ['日', '一', '二', '三', '四', '五', '六'];
			//console.log(day_list[weekday]);  

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

            //-----------月份篩選
            let lihtml = '';
   			
			//-----------月份篩選 end

            //------------------新作的tab
            //抓到預設起始月份 //201705
   //          console.log(self.option.initYearMonth.substring(0,4));
            const aaayear = self.option.initYearMonth.substring(0,4); //2017
   //       console.log(self.option.initYearMonth.substring(4.5)); 
           	const aaamonth =self.option.initYearMonth.substring(4.5); //05
            	const aaatime = moment().set({'year': aaayear, 'month': aaamonth});
   //          console.log(aaatime);//用他的前後月
   			const resetYear  = aaatime.get('Year');

            const resetMonth = aaatime.get('Month');   
            const preMonth = resetMonth-1;
            const nextMonth = resetMonth+1; 
            lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+preMonth+"月"+'</a></span></li>'
            lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+resetMonth+"月"+'</a></span></li>'
            lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+nextMonth+"月"+'</a></span></li>'
            //console.log(lihtml);

            //--------------------tab2
//--------------------------抓ajax檔案做的li
            //let resetTime = moment().set({'year': liYear, 'month': liMonth});//轉向到這個日期
    //         for(i = 0; i<3; i++){//3記得改回numofdata
    //             const lidate = daydateControl[i].date;
    //             //console.log(lidate);//日期
    //             const liNewDate = new Date(lidate);//把日期設為這個迴圈的日期
    //             const liMonth = liNewDate.getMonth();
    //             //console.log(liMonth);//這個迴圈的月份
    //             const liYear = liNewDate.getFullYear();
    //             //console.log(liYear);
				// let resetTime = moment().set({'year': liYear, 'month': liMonth});//轉向到這個日期
    //          	//console.log(resetTime);//
				// const resetMonth = resetTime.get('Month')+1;
				// const resetYear  = resetTime.get('Year');
				// lihtml += '<li class="tab"><a href="#"><span>'+resetYear+" "+resetMonth+"月"+'</a></span></li>'
                //console.log(lihtml);
                // };
                //----------------------------3
            $('.newtab').append(lihtml);
            //----產tab end  


			//------------------------點擊換tbody--------------
			$('.tab').on('click',function(){
			 	$('.calendars_tbody').remove();
			 		$('.newtab').find('.now').removeClass('now');
			 		$('.listH>ul').remove();
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
			  let list;
			  list ='';
	        //-------------------------------------------
	        for (var j = 1; j <= nDays; j++) {//mYear mMonth j

	        		let daynum;
	        		let monthnum;
		        	if(j<10){ daynum = '0'+j;}else{daynum = j;}
			        if(limMonth<10){ monthnum='0'+limMonth }else{ monthnum=limMonth }
	                html += '<td><div class="box'+" "+mYear+monthnum+daynum+'"><span class="num">';
	                const cuttectDate = ''.concat(mYear, monthnum, daynum);
	                html += j+'</span>'; //加日期
	                //---------對日期塞detail  
	       			//if(daydateControl[k].guaranteed === 'ture'){
				    //     	html += '<span class="tip">'保證出團'</span>';
				    // }
	         		for(let k = 0; k<numofdata; k++){
				         const DD = parseInt(daydateControl[k].date.substring(8.9));//全部的天數//
				         const MM = parseInt(daydateControl[k].date.substring(5.7));//月份
				         let ddd; 
				         let mmm ;
				         if (DD<10){ddd="0"+DD;}else{ddd=DD;}	        
				         if (MM<10){mmm="0"+MM;}else{mmm=MM;}

				         const YYYY = parseInt(daydateControl[k].date.substring(0.4));//年份
				         const rr =	''.concat(YYYY,mmm, ddd);
				         //console.log(daydateControl[k].guaranteed);
				         //console.log(rr);
				       
				        if(cuttectDate===rr){      	
				       		html += '<div class="details"><span class="status">'+daydateControl[k].status+'</span><span class="sell">可賣 : <i>'+daydateControl[k].availableVancancy+'</i></span><span class="group">團位 : <i>'+daydateControl[k].totalVacnacy+'</i></span><span class="price">$'+daydateControl[k].price+'</span></div>';
				       		list += '<ul><li><div class="li-left li-block date">'+j+'<span>星期'+day_list[weekday]+'</span></div><div class="li-mid li-block"><div class="lbcontent"><span>可賣:'+daydateControl[k].availableVancancy+'</span><span>團位:'+daydateControl[k].totalVacnacy+'</span></div></div><div class="li-right li-block"><span class="status price-label">報名</span><span class="price">$'+daydateControl[k].price+'</span></div></li></ul>';	
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
	        $('.listH').append(list);

	        
	        //-----點擊特效
	  //       $('.box').on('click',function(){
			// 	$('.box>.details').parent().addClass('active');
			// })


			});
			return this;
			}


    creatnewtbody(){
    				//ajax 把要得抓來
    				//把class依樣加進年月日 在對好塞span
    				$.ajax({method: 'GET',
					url: './json/data4.json'
					}).done(function(data){
		             let daydata  = JSON.parse(data);	
					//console.log(daydata);
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

				    const day_list = ['日', '一', '二', '三', '四', '五', '六'];
					

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
						       		html += '<div class="details"><span class="status">'+daydateControl[k].status+'</span><span class="sell">可賣 : <i>'+daydateControl[k].availableVancancy+'</i></span><span class="group">團位 : <i>'+daydateControl[k].totalVacnacy+'</i></span><span class="price">$'+daydateControl[k].price+'</span></div>';
						       		newlist += '<ul><li><div class="li-left li-block date">'+j+'<span>星期'+day_list[aaagetdays]+'</span></div><div class="li-mid li-block"><div class="lbcontent"><span>可賣:'+daydateControl[k].availableVancancy+'</span><span>團位:'+daydateControl[k].totalVacnacy+'</span></div></div><div class="li-right li-block"><span class="status price-label">報名</span><span class="price">$'+daydateControl[k].price+'</span></div></li></ul>';	
						        }
						    	};	//listH要改成加il
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
			        if($('.calendars_list').hasClass('d-no')){
			        	$('.calendars_tbody').removeClass('d-no');
			        }else{
			        	$('.calendars_tbody').addClass('d-no');
			        }
			        $('.calendars_tbody').append(html);	       
			        $('.listH').append(newlist);
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


/***/ })
/******/ ]);