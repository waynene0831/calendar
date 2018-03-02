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
        this.$this = this.$ele;
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
             //---pre
             	$('.pre').on('click',function(){
 				$('.calendars_daysWrap>li').remove();
 				$('.listPage').remove();
             	$('.newtab').find('.now').prev().addClass('now');
             	$('.newtab').find('.now').next().removeClass('now');

             	if($('.tab:eq(1)').hasClass('now')){
             		$('.tab:eq(0)').removeClass('d-no');
             	}; 

              	self.creatnewtbody();
              	
            
             });
             //---next
               	$('.next').on('click',function(){
             	$('.calendars_daysWrap>li').remove();
             	$('.listPage').remove();
             	$('.newtab').find('.now').next().addClass('now');
             	$('.newtab').find('.now').prev().removeClass('now');

             	if($('.tab:eq(2)').hasClass('now')){
             		$('.tab:eq(0)').addClass('d-no');
             	};          	
             	self.creatnewtbody();               
             }); 
              //---列表日曆切換
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

		listpage(){
			       	let self = this;
			        //實現分頁思路:
			        let pageSize=8;      //每頁顯示數據條數
			        let currentPage=1;   //當前頁數
			        let totalSize=this.$this.find(".hasdata").length; //獲取總數據
			        //console.log('totalSize:'+ totalSize);
			        let totalPage=Math.ceil(totalSize / pageSize); //計算總頁數

			        ////////////////////////////////當前頁數為1時,隱藏上一頁按鈕///////////////////////////////////////////
			        if(currentPage ==1){
			                    self.$this.find('.prevList').addClass('hide');
			        }
			        if(currentPage== totalPage){
			                    self.$this.find('.nextList').addClass('hide');
			        } 

			        this.$this.find('.hasdata:gt(7)').addClass('hideLis');
			        // this.$this.find('.daysWithData:gt(7)').hide();

			        //console.log('totalPage:'+totalPage);

			        this.$this.find('.total_page').text(totalPage);
			        this.$this.find('.current_page').text(currentPage);
			        //實現下一頁
			        //如果列表沒有data,則刪去跳頁的連接
			        if(totalPage==0){
			            this.$this.find('.listPage').remove();
			        };
			        //如果列表沒有data,則刪去跳頁的連接

			        this.$this.find(".nextList").click(function(){
			          
			            if(currentPage == totalPage||currentPage == 0){ //當前頁數==最後一頁，禁止下一頁
			                 return false;
			                }else{//不是最後一頁，顯示應該顯示的數據.
			                    self.$this.find(".current_page").text(++currentPage);  //當前頁數先+1
			                    let start=pageSize*(currentPage-1);
			                    let end=pageSize*currentPage;
			                    $.each(self.$this.find('.hasdata'),function(index,item){
			                            if(index >=start && index < end){
			                                $(this).removeClass('hideLis');
			                                }
			                                else{
			                                    $(this).addClass('hideLis');
			                                    }
			                        });
			                    }   
			                if(currentPage == totalPage){
			                    self.$this.find(".nextList").addClass('hide');
			                }
			                if(currentPage!==1){
			                    self.$this.find('.prevList').removeClass('hide');
			                }
			              
			            });    
			            //實現上一頁

			        this.$this.find(".prevList").click(function(){
			            if(currentPage == 1 ){//當前頁數==1，禁止上一頁
			                 return false;
			                }else{
			                     self.$this.find(".current_page").text(--currentPage);  //當前頁數先-1
			                     let start=pageSize*(currentPage-1);
			                     let end=pageSize*currentPage;
			                      $.each(self.$this.find('.hasdata'),function(index,item){
			                     // $.each(self.$this.find('.calendar_list ul li'),function(index,item){
			                           if(index >=start && index < end){
			                                $(this).removeClass('hideLis');
			                                }
			                                else{
			                                    $(this).addClass('hideLis');
			                                    }
			                         });
			                    }
       
			                if(currentPage !== totalPage){
			                    self.$this.find(".nextList").removeClass('hide');
			                }
			                if(currentPage ==1){
			                    self.$this.find('.prevList').addClass('hide');
			                }   
			            }); 
			               return this;
			    }
			
    getajax() {
    		self=this;
            $.ajax({
			method: 'GET',
			url: './json/data3.json',
			dataType: 'json'
			}).done(function(data) {
             let daydata;
             daydata = data;


             //---------------------------篩選json資料重複的------------------------
			  var lookup = {};
			  var items = daydata;
			  daydata = [];

			  for (var item, i = 0; item = items[i++];) {

			  var date = item.date ;

			  //不同資料的key 刪除再新增
			  
			  var statusKey = (item.status||item.state) ;
              delete(item.status||item.state) ;
              item.status = statusKey ;	
              
			  var availableVancancyKey = (item.availableVancancy||item.onsell) ;
              delete(item.availableVancancy||item.onsell) ;
              item.availableVancancy = availableVancancyKey ;	

              var totalVacnacyKey = (item.totalVacnacy||item.total) ;
              delete(item.totalVacnacy||item.total) ;
              item.totalVacnacy = totalVacnacyKey ;

              var guaranteedKey = (item.guaranteed || item.certain) ;
              delete(item.guaranteed || item.certain) ;
              item.guaranteed = guaranteedKey ;

			  if (!(date in lookup)) {
			    lookup[date] = 1;
			    daydata.push(item);
			  }
			}
			 //---------------------------篩選json資料重複的 end------------------------

            const daydateControl = daydata.sort(function (a, b) {
				 return a.date > b.date ? 1 : -1;
				});//用date排序
            //console.log(daydateControl);//排列過的順序
      		const numofdata = daydateControl.length; //算有幾筆資料   

			//---------------------------------------進入月份--------------------------------------
		    const aaayear = self.option.initYearMonth.substring(0,4); //2017
		    const aaamonth =self.option.initYearMonth.substring(5.5); //05
	   		
	   			//console.log(anotherfirstday);
			let initYearMonth = self.option.initYearMonth ;
				//console.log(initYearMonth);
			let tabhtml = '';
			for ( i=0 ; i<4 ; i++ ) {
			let nextMonth = moment(initYearMonth).add(i, 'months').format("YYYY MM");
				//console.log(nextMonth);
			tabhtml += '<li class="tab"><a href="#"><span>'+ nextMonth +'月</span></a></li>'
				}
				//console.log(tabhtml);
			$('.newtab').append(tabhtml);//產生initYearmonth設定的月
			//---------------------------------------進入月份end--------------------------------------

			//------------------------點擊換月曆--------------
			$('.tab').on('click',function(){
			 	$('.calendars_daysWrap>li').remove();
			 	$('.listPage').remove();
			 		$('.newtab').find('.now').removeClass('now');
			 		//$('.listH>ul').remove();
			 		$(this).addClass('now');

			 		if($('.tab:eq(2)').hasClass('now')){
             		$('.tab:eq(0)').addClass('d-no');
             	     }
             	    else if($('.tab:eq(1)').hasClass('now')){
             		$('.tab:eq(0)').removeClass('d-no');
             	    };

			 		self.creatnewtbody();
			       });
			//-----------------------點擊換月曆 end------------- 
            $('.tab:eq(0)').addClass('now');//--------------------進來後第一個要顯示的tab




	      	//---------------產生月曆----------------------
	      	const anotherfirstday = aaayear+'/'+aaamonth+'/'+'01';
		    const adate =  new Date(anotherfirstday);// 目前是用預設月份產月曆         
	        const mYear =adate.getFullYear();       //本年 //const mYear = date.getFullYear(); 
	        const mMonth = adate.getMonth();
	        const day_list = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
			//console.log(day_list[weekday]);
	        let limMonth =mMonth+1;//本月
	        //const mMonth = date.getMonth(); 
	        const startDay = adate.getDay();//補滿最後一排月曆開頭的幾天
            const mDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
            if ( ( (mYear % 4 == 0) && (mYear % 100 != 0) ) || (mYear % 400 == 0) ) mDays[1] = 29;
            const nDays = mDays[mMonth];		
		    const total = mDays[mMonth] + startDay;
            // console.log(nDays);//當月天數
		    const totalCells = total + ( total%7 ? 7 - total%7 : 0 );
		    const lastDay = totalCells - nDays - startDay;
		    // console.log(lastDay);//補滿最後一排月曆剩下的幾天
	        var i;        //日期
	        var html = '';
	        html += '';
	        for (i = 0; i < startDay; i++) {
	            html += '<li class="lastmonth"><div></div></li>';
	        }	
	        //console.log(daydateControl);
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
	         		for(let k = 0; k<numofdata; k++){
				         const DD = parseInt(daydateControl[k].date.substring(8.9));//全部的天數//
				         const MM = parseInt(daydateControl[k].date.substring(5.7));//月份
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
						    html +='<span class="sell">可賣 : '+daydateControl[k].availableVancancy+'</span><span class="group">團位 : '+daydateControl[k].totalVacnacy+'</span><span class="price">$'+daydateControl[k].price+'</span>'
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
	         html +='<div class="listPage"><span class="listChangeBox"><a class="prevList"><span class="arrow-gl m-r-xs"></span>上一頁</a></span><span class="num"><span class="current_page"></span><span style="padding:0 3px;">/</span><span class="total_page"></span></span><span class="listChangeBox"><a class="nextList">下一頁<span class="arrow-gr m-lr-xs"></span></a></span></div>';
	        
	      	//---------------產生月曆end----------------------   
			$('.calendars_daysWrap').append(html);   

			$('.calendars_daysWrap').find('.price').parent().addClass('hasdata');

			$('.calendars').find('.hasdata').on('click', function() { 
                $('.calendars').find('.hasdata').removeClass('active');
                $(this).addClass('active');
            });    

			self.listpage();
			});
			return this;
			}
		
 creatnewtbody(){
 					//--------有now的tab去抓那個月產月曆
    				$.ajax({
					method: 'GET',
					url: './json/data3.json',
					dataType: 'json'
					}).done(function(data) {
		             let daydata;
		             daydata = data;

		            //---------------------------篩選json資料重複的------------------------
					 var lookup = {};
					 var items = daydata;
				     daydata = [];

					 for (var item, i = 0; item = items[i++];) {

					  var date = item.date ;

					  //不同資料的key 刪除再新增
					  var statusKey = (item.status||item.state) ;
		              delete(item.status||item.state) ;
		              item.status = statusKey ;	
		              

					  var availableVancancyKey = (item.availableVancancy||item.onsell) ;
		              delete(item.availableVancancy||item.onsell) ;
		              item.availableVancancy = availableVancancyKey ;	


		              var totalVacnacyKey = (item.totalVacnacy||item.total) ;
		              delete(item.totalVacnacy||item.total) ;
		              item.totalVacnacy = totalVacnacyKey ;


		              var guaranteedKey = (item.guaranteed || item.certain) ;
		              delete(item.guaranteed || item.certain) ;
		              item.guaranteed = guaranteedKey ;


					  if (!(date in lookup)) {
					    lookup[date] = 1;
					    daydata.push(item);
					  }
					}	
					//---------------------------篩選json資料重複的------------------------

					//----------------------------排列過的順序
		            const daydateControl = daydata.sort(function (a, b) {
						 return a.date > b.date ? 1 : -1;
						});//用date排序
		            //console.log(daydateControl);//排列過的順序
		      		const numofdata = daydateControl.length; //算有幾筆資料  
      					
     
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
			    });//----ajax end 
          	    return this;
          }
        
 	inputData(inputOpt){
        $.ajax({
                dataType: "json",
                method: 'GET',
                url: './json/data4.json'
            }).done(function(data){

            		let daydata  = data;
					console.log('111');
				 	console.log(daydata);

            		daydata = daydata.concat(inputOpt);   
					console.log('222');
			 	 	console.log(daydata);

                	//---------------------------篩選json資料重複的------------------------
					 var lookup = {};
					 var items = daydata;
				     daydata = [];

					 for (var item, i = 0; item = items[i++];) {

					  var date = item.date ;

					  //不同資料的key 刪除再新增
					  var statusKey = (item.status||item.state) ;
		              delete(item.status||item.state) ;
		              item.status = statusKey ;	
		              

					  var availableVancancyKey = (item.availableVancancy||item.onsell) ;
		              delete(item.availableVancancy||item.onsell) ;
		              item.availableVancancy = availableVancancyKey ;	


		              var totalVacnacyKey = (item.totalVacnacy||item.total) ;
		              delete(item.totalVacnacy||item.total) ;
		              item.totalVacnacy = totalVacnacyKey ;


		              var guaranteedKey = (item.guaranteed || item.certain) ;
		              delete(item.guaranteed || item.certain) ;
		              item.guaranteed = guaranteedKey ;


					  if (!(date in lookup)) {
					    lookup[date] = 1;
					    daydata.push(item);
					  }
					}	
					//---------------------------篩選json資料重複的------------------------

	             daydata = daydata.sort(function (a, b) {
					 return a.date > b.date ? 1 : -1;
					});//用date排序
	             console.log('333');
			 	 	console.log(daydata);

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