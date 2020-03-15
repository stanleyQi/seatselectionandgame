$('#datepicker').datepicker();
$('#datepicker')
    .datepicker()
    .on('changeDate', function(e){
        if(confirm('The ticket info typed will be cleaned, do you want to keep going?')){
            console.log(e.date);

            //Room changes to Puru.
            puruClick();

            // Session changes to the first one.
            session1Click();
        }
    });

$('.puru').click((e)=>{
    if(confirm('The ticket info typed will be cleaned, do you want to keep going?')){
        puruClick();
    }
});
function puruClick(){
    $('.puru').addClass('active');
    $('.whero').removeClass('active');
    //puru room
    seatMap =seatMapPuru;
    // saledSeats = saledSeatsPuru;  
    // Session changes to the first one.
    color = 'blue';
    session1Click();    

    // change to the related style
    // color = 'blue';
    // changeStylesRelatedRoom(color);
}

$('.whero').click((e)=>{
    if(confirm('The ticket info typed will be cleaned, do you want to keep going?')){
        wheroClick();
    }
});
function wheroClick(){
    $('.whero').addClass('active');
    $('.puru').removeClass('active');

    //显示Whero room
    seatMap =seatMapWhero;
    // saledSeats = saledSeatsWhero;   
    // Session changes to the first one.
    session1Click();  
    
    // change to the related style
    color = 'red';
    changeStylesRelatedRoom(color);
}
var color = 'blue';
// function seatInfoPopup(info){
//     let infoPopup = `
    
//         <span style="visibility: visible;width: 50px;opacity:1;background-color: white;color:black;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 100;">${info}</span>
    
//     `;
//     return infoPopup;
// }
function changeStylesRelatedRoom(color){
    $('#datepicker').css('border-bottom', '5px solid '+color);
    $('#datepicker').css('color', color);
    $('.sessionP').css('color', 'black');
    $('.sessionP.active-session').css('color', color);
    $('.btnConfirm').css('color', color).css('border','3px solid '+color);
    $('.btnConfirm').hover(function(){$(this).css('color', 'white').css('background-color',color);});
    
    $(".seatCharts-seat.available").bind("mouseenter",function(){
        $(this).addClass('seatfocusedOrSelected'+color);
        $(this).css('transform','skew(-10deg, -10deg)').css('color','rgba(255,255,255,1)');
        
    });
    $(".seatCharts-seat.available").bind("mouseleave",function(){
        $(this).removeClass('seatfocusedOrSelectedred');
        $(this).removeClass('seatfocusedOrSelectedblue');
        $(this).css('transform','skew(0deg, 0deg)').css('color','rgba(255,255,255,0)');
    });
}

// for session
$('#session1').click((e)=>{
    if(confirm('The ticket info typed will be cleaned, do you want to keep going?')){
        session1Click();
    }    
});
function session1Click(){
    $('#session1').addClass('active-session');
    $('#session2').removeClass('active-session');
    $('#session3').removeClass('active-session');
    $('#session4').removeClass('active-session');

    //取得当前saledSeats数据
    let currentSaledSeats = getSaledSeats($moviename.html(),$('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val(),$('.sessionP.active-session').text(),$('.puru.active').text()==='Puru'?'Puru':'Whero');
    console.log('session1:'+currentSaledSeats);
    seatDisplay(seatMap,currentSaledSeats);
    changeStylesRelatedRoom(color);
}
$('#session2').click((e)=>{
    if(confirm('The ticket info typed will be cleaned, do you want to keep going?')){
        session2Click();
    }
});
function session2Click(){
    $('#session2').addClass('active-session');
    $('#session1').removeClass('active-session');
    $('#session3').removeClass('active-session');
    $('#session4').removeClass('active-session');

    //取得当前saledSeats数据
    let currentSaledSeats = getSaledSeats($moviename.html(),$('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val(),$('.sessionP.active-session').text(),$('.puru.active').text()==='Puru'?'Puru':'Whero');

    seatDisplay(seatMap,currentSaledSeats);
    changeStylesRelatedRoom(color);
}
$('#session3').click((e)=>{
    if(confirm('The ticket info typed will be cleaned, do you want to keep going?')){
        session3Click();
    }   
});
function session3Click(){
    $('#session3').addClass('active-session');
    $('#session1').removeClass('active-session');
    $('#session2').removeClass('active-session');
    $('#session4').removeClass('active-session');

    //取得当前saledSeats数据
    let currentSaledSeats = getSaledSeats($moviename.html(),$('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val(),$('.sessionP.active-session').text(),$('.puru.active').text()==='Puru'?'Puru':'Whero');
    
    // // var $moviename = $('#moviename');//电影名
    // // var $datetime = $('#datetime');//时间
    // // var $roomInfo = $('#roomInfo');//房间
    // // var $cart = $('#seats_chose');//座位区
    // // var $tickects_num = $('#tickects_num'); //票数
    // // var $total_price = $('#total_price');//票价总额
    // $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val()+' '+$('.sessionP.active-session').text()

    seatDisplay(seatMap,currentSaledSeats);
    changeStylesRelatedRoom(color);
}
$('#session4').click((e)=>{
    if(confirm('The ticket info typed will be cleaned, do you want to keep going?')){
        session4Click();
    }
});
function session4Click(){
    $('#session4').addClass('active-session');
    $('#session1').removeClass('active-session');
    $('#session2').removeClass('active-session');
    $('#session3').removeClass('active-session');

    //取得当前saledSeats数据
    let currentSaledSeats = getSaledSeats($moviename.html(),$('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val(),$('.sessionP.active-session').text(),$('.puru.active').text()==='Puru'?'Puru':'Whero');

    seatDisplay(seatMap,currentSaledSeats);
    changeStylesRelatedRoom(color);
}

////////////////////////////////////////////////////
var price = 20; //电影票价
var sc;
// var seatMapPuru = [ //座位结构图 a 代表座位; 下划线 "_" 代表过道 TODO：需要从xml中读取
//                 '_cccccccc_',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 '__cccccc__'
//                 ];
// var seatMapWhero = [ //座位结构图 a 代表座位; 下划线 "_" 代表过道 TODO：需要从xml中读取
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc',
//                 'cccccccccc'
//             ];
var seatMapPuru = getRoomSetting('Puru');
var seatMapWhero = getRoomSetting('Whero');
// 房间+session改变，修改此数组中的值
// var saledSeatsPuru =['1_7', '2_5', '3_6']; 
// var saledSeatsWhero =['1_7', '2_5', '3_6', '3_7', '3_8', '3_9', '4_3', '4_4', '4_5', '6_7', '6_8', '7_2', '7_3']; 
var seatMap =seatMapPuru;
// var saledSeats = ['1_7', '2_5', '3_6'];
var saledSeats = getSaledSeats('The Pursuit of happyness','15/04/2019','10:00-12:30','Puru');

getSaledSeats('The Pursuit of happyness','15/04/2019','10:00-12:30','Puru');

function getSaledSeats(movie,date,session,room){
    bookedStore = store.get('bookedStore')?store.get('bookedStore'):[];
    var currentBookedArr = bookedStore.filter((book)=>{
        return book.movie==movie && book.date==date && book.session==session && book.room==room
    });
    
    var bookedSeats = new Array();
    currentBookedArr.forEach(function(book,index){
        bookedSeats = bookedSeats.concat(book.seats);
        }
    );
    console.log(bookedSeats);
    return bookedSeats;
}

var $moviename = $('#moviename');//电影名
var $datetime = $('#datetime');//时间
var $roomInfo = $('#roomInfo');//房间
var $cart = $('#seats_chose');//座位区
var $tickects_num = $('#tickects_num'); //票数
var $total_price = $('#total_price');//票价总额

function summaryDisplay(){
    $moviename.html("The Pursuit of happyness");
    $datetime.text($('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val()+' '+$('.sessionP.active-session').text());
    $roomInfo.text($('.puru.active').text()==='Puru'?'Puru':'Whero');
    $cart.html('');
    $tickects_num.text(0);
    $total_price.text(0);
}

seatDisplay(seatMap,saledSeats);       
function seatDisplay(seatMap,saledSeats) {
        summaryDisplay();
        sc = $('#seat_area').seatCharts({
            map: seatMap,
            naming: { //设置行列等信息
                top: true, //显示顶部横坐标（行） 
                left: true, //显示顶部横坐标（列） 
                getLabel: function (character, row, column) { //返回座位信息
                    if(saledSeats.indexOf(row+'_'+column)!=-1){
                        return 'booked';
                    } 
                    if(row<=2){
                        return row+'_'+column+' $20';
                    }else if(row>2 && row<=5){
                        return row+'_'+column+' $23';
                    }else{
                        return row+'_'+column+' $25';
                    }
                }
            },
            legend: { //定义图例
                node: $('#legend'),
                items: [
                    ['c', 'available', 'available'],
                    ['c', 'unavailable', 'saled']
                ]
            },
            click: function () {
                if (this.status() == 'available') { //若为可选座状态，添加座位
                    $('<li>' + (this.settings.row + 1) +'_'+ (this.settings.column + 1) + ' '+'</li>')
                        .attr('id', 'cart-item-' + this.settings.id)
                        .data('seatId', this.settings.id)
                        .appendTo($cart);
                    $tickects_num.text(sc.find('selected'+color).length + 1); //统计选票数量
                    $total_price.text(getTotalPrice(sc,color,this.settings.row,1)); //计算票价总金额
                    return 'selected' + color;
                } else if (this.status() == 'selected'+color) { //若为选中状态
                    $tickects_num.text(sc.find('selected'+color).length - 1); //更新票数量
                    $total_price.text(getTotalPrice(sc,color,this.settings.row,-1)); //更新票价总金额
                    $('#cart-item-' + this.settings.id).remove(); //删除已预订座位
                    return 'available';
                } else if (this.status() == 'unavailable') { //若为已售出状态
                    return 'unavailable';
                } else {
                    return this.style();
                }
            }
        });
        //设置已售出的座位 TODO:需要从localstore中读取
        sc.get(saledSeats).status('unavailable');
        };

    

function getTotalPrice(sc,color,newseat,operation) { //计算票价总额;TODO 应该计算不同票价
    var total = 0;
    let price = 20;
    sc.find('selected'+color).each(function (value) {
        let row = sc.find('selected'+color).seats[value].settings.row;
        // console.log(sc.find('selected').seats[value].settings.row);
        if(row<=1){
            price = 20;
        }else if(row>1 && row<=4){
            price = 23;
        }else{
            price = 25;
        }
        total += price;
    });
    if(newseat<=1){
        price = 20;
    }else if(newseat>1 && newseat<=4){
        price = 23;
    }else{
        price = 25;
    }
    total += price*operation;
    return total;
}
puruClick();

function confirmBookingInfo(){
    if($cart.text()===''){
        alert("Choose seats please.");
        return;
    }
    $("#moviemask").html($moviename.html());
    $("#timemask").html($('.sessionP.active-session').text()+$('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val());
    $("#roommask").html($('.puru.active').text()==='Puru'?'Puru':'Whero');
    $("#seatsmask").html($cart.text());//['1_1','2_1','3_3']);
    $("#countmask").html($tickects_num.text());
    $("#totalmask").html($total_price.text());

    $(".mask").css('display','block');
}
$('.btnConfirm').click((e)=>{
    confirmBookingInfo();
});

$('#btnMaskModify').click((e)=>{
    $('.mask').css('display','none');
});

function modify(){
    $(".mask").css('display','none');
    $(".btnConfirm").css('display','block');
}

function confirmAndContinue(){
    //save booking data into localstorage
    saveBookedInfo();

    // alert
    $('.message').css('display','block');
    setTimeout(()=>{
        $(".mask").css('display','none');
        window.location.reload();
    },2000);
}
$('#btnMaskConfirm').click((e)=>{
    confirmAndContinue();
});

var bookedStore;
function saveBookedInfo(){
    let newBook = {
        movie: $moviename.html(),
        date: $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val(),
        session: $('.sessionP.active-session').text(),
        room: $('.puru.active').text()==='Puru'?'Puru':'Whero',
        seats: $cart.text().split(' ').slice(0,$cart.text().split(' ').length-1),//['1_1','2_1','3_3'],
        count: $tickects_num.text(),
        total: $total_price.text(),
        status:'booked'
    }
    
    bookedStore = store.get('bookedStore')?store.get('bookedStore'):[];
    bookedStore.push(newBook);
    store.set('bookedStore',bookedStore);
}

function getRoomSetting(room){
    if(!window.XMLHttpRepuest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","rooms.xml",false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    
    var room = xmlDoc.getElementById(room);
    console.log(room.children);
    var arrayRoomSetting = [];
    for (let i = 0; i < room.children.length; i++) {
        arrayRoomSetting.push(room.children[i].innerHTML);        
    }
    console.log(arrayRoomSetting);
    return arrayRoomSetting;
}

var movieName;
initDisplay('movie');
function initDisplay(paraName) {
    //get the parameter passed from index.html
　　var url = document.location.toString();
　　var arrObj = url.split("?");
    var param;
　　if (arrObj.length > 1) {
　　　　var arrPara = arrObj[1].split("&");
　　　　var arr;
　　　　for (var i = 0; i < arrPara.length; i++) {
　　　　　　arr = arrPara[i].split("=");
　　　　　　if (arr != null && arr[0] == paraName) {
　　　　　　　　param = arr[1];
　　　　　　}
　　   }
　　}else {
        param = "";
　　}

    if(param==1){
        $('.movie-show').addClass('movie-show-1');
        $('.movie-show').removeClass('movie-show-2');
        movieName = "The Pursuit of happyness";
    }else{
        $('.movie-show').addClass('movie-show-2');
        $('.movie-show').removeClass('movie-show-1');
        movieName = "Forrest Gump";
    }
}
    