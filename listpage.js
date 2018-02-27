
    listChange(){
        let self = this;
        //實現分頁思路:
        let pageSize=8;      //每頁顯示數據條數
        let currentPage=1;   //當前頁數
        let totalSize=this.$this.find(".daysWithData").length; //獲取總數據
        console.log('totalSize:'+ totalSize);
        let totalPage=Math.ceil(totalSize / pageSize); //計算總頁數

        ////////////////////////////////當前頁數為1時,隱藏上一頁按鈕///////////////////////////////////////////
        if(currentPage ==1){
                    self.$this.find('.prevList').addClass('hide');
        }
        if(currentPage== totalPage){
                    self.$this.find('.nextList').addClass('hide');
        } 
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        

        /////////用addClass來做!///////////////////////////////////////////////////////////////////////////////
        this.$this.find('.daysWithData:gt(7)').addClass('hideLis');
        // this.$this.find('.daysWithData:gt(7)').hide();
        /////////////////////////////////用addClass來做,針對兩種模式下不同的css//////////////////////////////////
        
        console.log('totalPage:'+totalPage);

        this.$this.find('.total_page').text(totalPage);
        this.$this.find('.current_page').text(currentPage)
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
                    $.each(self.$this.find('.calendar_daysWrap .daysWithData'),function(index,item){
                    // $.each(self.$this.find('.calendar_list ul li'),function(index,item){
                            if(index >=start && index < end){
                                $(this).removeClass('hideLis');
                                }
                                else{
                                    $(this).addClass('hideLis');
                                    }
                        });
                    }
                ///////////////////////判斷當前頁數來決定是否顯示下一頁or上一頁///////////////////////////////    
                if(currentPage == totalPage){
                    self.$this.find(".nextList").addClass('hide');
                }
                if(currentPage!==1){
                    self.$this.find('.prevList').removeClass('hide');
                }
                ///////////////////////////////////////////////////////////////////////////////////////////  
            });    
            //實現上一頁

        this.$this.find(".prevList").click(function(){
            if(currentPage == 1 ){//當前頁數==1，禁止上一頁
                 return false;
                }else{
                     self.$this.find(".current_page").text(--currentPage);  //當前頁數先-1
                     let start=pageSize*(currentPage-1);
                     let end=pageSize*currentPage;
                      $.each(self.$this.find('.calendar_daysWrap .daysWithData'),function(index,item){
                     // $.each(self.$this.find('.calendar_list ul li'),function(index,item){
                           if(index >=start && index < end){
                                $(this).removeClass('hideLis');
                                }
                                else{
                                    $(this).addClass('hideLis');
                                    }
                         });
                    }

              ///////////////////////判斷當前頁數來決定是否顯示下一頁or上一頁///////////////////////////////         
                if(currentPage !== totalPage){
                    self.$this.find(".nextList").removeClass('hide');
                }
                if(currentPage ==1){
                    self.$this.find('.prevList').addClass('hide');
                }
             ///////////////////////////////////////////////////////////////////////////////////////////    
            });
    }
/////////////////////////////////////修改html結構後的bornCalendar/////////////////////////////////////