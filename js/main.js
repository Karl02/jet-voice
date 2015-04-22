var jsReady = false;
        var swfReady = false;
        var actionValue;
        var actionDown;
        var init_text = "";
        var txt;
        var angle;
        var clicking= false;


(function(){

var writer,
    ct,
    g,
    s,
    container,
    charHolder,
    txtBox1,
    txtBox2,
    txtBox3,
    txtBox4,
    txtBox5,
    Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine,
    loader,
    anglePer,
    canvas,
    characterObject,
    object,
    canvasIsOn,
    canvasArray = [],
                  writeOn,
                  btnWriteOn,
                  denominator,
                  numerator,
                  priorityExpo,
                  priorityDivision,
                  expoString,
                  curlDetector,
                  loadCanvas,
                  placetxt,
                  incChar,
                  newWrite,
                  canvasIsFirst,
                  btnIsFirst,
                  screenactive,
                  dragon,
                  numberline,
                  eraseOn,
                  spwrite,
                
                  i,
                  j,
                  k,
                  graphCount,
                  selectedChar,
                  y_step= 10,
                  x_step= 10,
                  x_startX,
                  y_startY,
                  x_correctDraw,
                  y_correctDraw,
                  canvasX,
                  canvasY,
                  writerCount,
                  appleColor,
                  colorInt,
                  spCount,
                
                  character=[], 
                  inputNumber,
                  txtBoxArray,
                  inputLtr,
                  parenth,
                  operations,
                  lineshapes,
                  miscell=[],
                  canvasArray=[],
                  currentCanvasArray=[],
                  loadCanvasArray=[],
                  characterCanvas=[],
                  deleteCharArray=[],
                  mcArray = [],  // array that holds references function myfunction(){    for ( i=0, i&lt,2, i++) {          movieClip = new MovieClip(), // the temporary iable        addChild(movieClip),        mcArray[i] = movieClip, // store reference to temporary iable in array    }}
                  spArray,
                  canvasSpArray,
                
                  triggered,
                  currentCanvas,
                  canvas_name,
                
                  canvas_old,
                  canvas_new,
                  canvas_result,
                  load_canvas_old,
                  load_canvas_new,
                  load_canvas_result,  
                  currentNumber;

                  currentColor = '#bbb676',
                  writer;
                  s ;
                  g ;
                  //ct = new colorTransform(0,0,0,1,255);
                  carouzel();
                  var c = document.getElementById("myCanvas");
                  var ctx = c.getContext("2d");
                  ctx.lineWidth = 1;
                  ctx.fillRect(0,0,myCanvas.width, myCanvas.height);
                  var isDown = false;
                  var bind        = PUBNUB.bind
,   css         = PUBNUB.css
,   body        = PUBNUB.search('body')[0]
,   doc         = document.documentElement
,   now         = function(){return+new Date}
,   mice        = {}
,   channel23     = 'mouse-speakv0.26'
,   mousefade   = 9000 // Time before user is considered Inactive
,   textbox     = PUBNUB.create('input')
,   focused     = 0    // Focused on Textbox?
,   lastpos     = []   // Last Sent Position
,   lasttxt     = ''   // Last Sent Text
,   sentcnt     = 0    // Number of Messages Sent
,   uuid        = 0    // User Identification
,   wait        = 45  // Publish Rate Limit (Time Between Data Push)
,   maxmsg      = 34   // Max Message Length
,   moffset     = 3   // Offset of Mouse Position
,   timed       = 0    // Timeout for Publish Limiter
,   lastsent    = 0    // Last Sent Timestamp
,   nohtml      = /[<>]/g;
    
    var oldX = []
    ,   oldY = []
    , newX
    , newY;
    var counter = 0;


var canvas, stage;
var drawingCanvas;
var oldPt;
var oldMidPt;
var title;
var color;
var stroke;
var colors;
var index;





// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Generate Random Number if Needed
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var urlargs         = urlparams();
var my_number       = PUBNUB.$('my-number');
var my_link         = PUBNUB.$('my-number-link');
var number          = urlargs.number || Math.floor(Math.random()*999+1);

my_number.number    = number;
my_number.innerHTML = ''+my_number.number;
my_link.href        = location.href.split('?')[0] + '?call=' + number;
my_link.innerHTML   = my_link.href;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Update Location if Not Set
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
if (!('number' in urlargs)) {
    urlargs.number = my_number.number;
    location.href = urlstring(urlargs);
    return;
}



var Sprite = {


    /**
     * Adds to screen and creates DOM Object
     */
    create : function(sprite) {
        sprite.intervals = {
            animate : 0,
            move    : {}
        };

        sprite.cell.size = Math.floor(sprite.image.width / sprite.cell.count);
        sprite.node = PUBNUB.create('div');

        sprite.opacity = sprite.opacity || 1.0;

        PUBNUB.css( sprite.node, {
            opacity : sprite.opacity,
            position : 'absolute',
            top : sprite.top,
            left : sprite.left ,
            width : sprite.cell.size,
            height : sprite.image.height,
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(' + sprite.image.url + ')'
        } );

        Sprite.setframe( sprite, 0 );
        Sprite.append(sprite.node);

        return sprite;
    },

    ground : PUBNUB.search('body')[0],
    append : function(node) {
        Sprite.ground.appendChild(node);
    },

    setframe : function( sprite, cell, offset ) {
        var offset = offset || {};
        if (typeof offset.top == 'number')
            sprite.image.offset.top = offset.top;
        if (typeof offset.left == 'number')
            sprite.image.offset.left = offset.left;

        PUBNUB.css( sprite.node, {
        backgroundPosition : '-' +
        (sprite.cell.size * cell + sprite.image.offset.left) +
        'px -' + sprite.image.offset.top + 'px'
        } );
    },

    /**
     * sprite.animate( [[frame, duration], []...] )
     * sprite.animate( [[], [], []] )
     * sprite.animate( [[0, .2], [1, .4], [2, .5]] )
     */
    animate : function( sprite, pattern, loop, callback, position ) {
        // Clear Any Other Animation
        if (!position) {
            position = 0;
            Sprite.stop_animate(sprite);
        }

        // if last frame, and no loop, then leave, else restart
        if (position === pattern.length) {
            if (loop === 0) return callback && callback();
            else {
                loop--;
                position = 0;
            }
        }

        // Multi format compatibility ([frame, delay]) or (frame)
        var frame = pattern[position][0] || pattern[position]
        ,   delay = pattern[position][1] || .1;

        sprite.intervals.animate = setTimeout( function() {
            // Update Current Frame
            Sprite.setframe( sprite, frame );

            // Next Frame
            Sprite.animate( sprite, pattern, loop, callback, position + 1 );
        }, delay * 1 );
    },


    /**
     * Move and Animate Combined!!!
     *
     * sprite.animate( [ [left, top, duration, [animate] ], []...] )
     * sprite.animate( [[], [], []] )
     * sprite.animate( [[10, 10, .2, [ANIMATEPARAMS], loopanimate ], ... )
     * sprite.animate( [[10, 10, .2, [[frame,dur], ...], loopanimate ], ... )
     */
    movie : function( sprite, pattern, loop, callback, position ) {
        // Clear Any Other Animation
        if (!position) {
            position = 0;
            Sprite.stop_all(sprite);
        }

        // if last frame, and no loop, then leave, else restart
        if (position === pattern.length) {
            if (loop === 0) return callback && callback();
            else {
                loop--;
                position = 0;
            }
        }

        // Update Animator
        if (pattern[position][2]) Sprite.animate(
            sprite,
            pattern[position][2],
            pattern[position][3] || 0
        );

        // [{top:0,opacity:.5}, 500, 0, 0],
        // Update Mover
        Sprite.move(
            sprite,
            pattern[position][0],
            pattern[position][1],
            function() {
                Sprite.movie( sprite, pattern, loop, callback, position + 1 );
            }
        );
    },

    /**
     * move sprite from one place to another.
     */
    move : function( sprite, properties, duration, callback ) {
        var start_time   = now();

        Sprite.stop_all(sprite);

        PUBNUB.each( properties, function( property, value ) {
            var current_time = start_time
            ,   end_time     = start_time + duration
            ,   start_prop   = sprite[property] || 0
            ,   distance     = value - start_prop
            ,   update       = {}
            ,   ikey         = property + value;

            Sprite.stop_move( sprite, ikey );
            sprite.intervals.move[ikey] = setInterval( function() {
                current_time = now();

                sprite[property] = (
                    end_time <= current_time
                    ? value
                    : ( distance * (current_time - start_time)
                        / duration + start_prop )
                );

                update[property] = sprite[property];
                PUBNUB.css( sprite.node, update );

                if ( end_time <= current_time && sprite.intervals.move ) {
                    Sprite.stop_move( sprite, ikey );
                    callback && callback();
                }

            }, Math.ceil(10 / sprite.framerate) );
        } );
    },

    /**
     * Stop movie
     */
    stop_all : function(sprite) {
        clearTimeout(sprite.intervals.animate);
        PUBNUB.each( sprite.intervals.move, function( ikey ) {
            clearInterval(sprite.intervals.move[ikey]);
        } );
    },

    /**
     * Stop move.
     */
    stop_move : function( sprite, ikey ) {
        clearInterval(sprite.intervals.move[ikey]);
    },

    /**
     * Stop animate.
     */
    stop_animate : function(sprite) {
        clearTimeout(sprite.intervals.animate);
    }
};


function get_pos(e) {


    var posx = 0
    ,   posy = 0;

    if (!e) return [100,100];

    var tch  = e.touches && e.touches[0]
    ,   tchp = 0;



    if (tch) {
        PUBNUB.each( e.touches, function(touch) {
            posx = touch.pageX || e.touches.pageX;
            posy = touch.pageY || e.touches.pageY;


            // Send Normal Touch on First Touch
            if (!tchp) return;

            // Must be more touches!
            // send({ 'pageX' : posx, 'pageY' : posy, 'uuid' : uuid+tchp++ });
        } );
    }
    else if (e.pageX) {
        posx = e.pageX || e.touches.pageX;
        posy = e.pageY || e.touches.pageY;
    }
    else {try{
        posx = e.clientX + body.scrollLeft + doc.scrollLeft;
        posy = e.clientY + body.scrollTop  + doc.scrollTop;
    }catch(e){}}

    posx += moffset*2;
    posy += moffset;

    if (posx <= moffset*2) posx = 0;
    if (posy <= moffset) posy = 0;
    //sendToActionScript(posx);
    //angle = sendToActionScript(actionValue);
   
    
    return [posx, posy, actionDown, actionValue];
}



function mouseMove(e)
{

actionValue = "mouseMove";
}


function mouseClick(e)
{
  var pos   = get_pos(e),
      msg   = { 'uuid' : /*xuuid ||*/ uuid };
 
  pos[2]="mouseClicked";

   msg['pos'] = pos;
   msg['angle'] = angle;

   PUBNUB.publish({
        channel : channel23,
        message : msg
    });

    msg['force'] = 1;
    user_updated(msg);
    //console.log(pos);
    
    return 1;
}


function mouseIsDown(e)
{
  
  var pos   = get_pos(e),
      msg   = { 'uuid' : /*xuuid ||*/ uuid };
  pos[2]="mouseisDown";

   msg['pos'] = pos;
   msg['angle'] = angle,
   msg['actionDown'] = actionDown;

   PUBNUB.publish({
        channel : channel23,
        message : msg
    });


    msg['force'] = 1;
    user_updated(msg);
    //console.log(pos);
   
    return 1;
}









function mouseIsUp(e)
{
  var pos   = get_pos(e),
      msg   = { 'uuid' : /*xuuid ||*/ uuid };

  pos[2]="mouseisUp";

   msg['pos'] = pos;
   msg['angle'] = angle;

   PUBNUB.publish({
        channel : channel23,
        message : msg
    });

    msg['force'] = 1;
    user_updated(msg);
    //console.log(pos);
    return 1;
}

function send(e) {

    
    //textbox.focus();          ************************* OMIT TEXTBOX FOCUS ********************
    this.mouseover;
    //console.log(e.currentTarget);
    // Leave if no UUID yet.
    if (!uuid) return;

    // Get Local Timestamp
    var right_now = now()
    ,   mouse     = mice[uuid];

    // Capture User Input
    var pos   = get_pos(e)
    ,   txt   = get_txt()
    //,   xuuid = e['uuid']
    ,   msg   = { 'uuid' : /*xuuid ||*/ uuid };

    
    pos[3] = actionValue;
    pos[2] = actionDown;
  

    if (!mouse) return user_joined(msg);

    if (pos[0] >= 1520) {
        pos[0] = 1520;
    }
    if (pos[1] >= 600) {
        pos[1] = 600;
    }

    // Don't continue if too soon (but check back)
    if (lastsent + wait > right_now) {
        // Come back and check after waiting.
        clearTimeout(timed);
        timed = setTimeout( function(){send(e)},wait); //{send(e)}, wait );

        return 1;
    }

    // Set Last Sent to Right Now.
    lastsent = right_now;

    // Don't send if no change in Position.
    if (!(
        lastpos[0] == pos[0] &&
        lastpos[1] == pos[1] ||
        !pos[0]              ||
        !pos[1]
    )) {
        // Update Last Position
        lastpos[0] = pos[0];
        lastpos[1] = pos[1];
        msg['pos'] = pos;
        msg['angle'] = angle;
    }

    // Check Last Sent Text
    if (lasttxt != txt || !(sentcnt++ % 3)) {
        lasttxt    = txt;
        msg['txt'] = txt || ' ';
        cookie.set( 'mtxt', msg['txt'] );
    }

    // No point sending nothing.
    if (!(msg['txt'] || msg['pos'])) return 1;

    // Set so we won't get jittery mice.
    msg['c'] = (mice[uuid].last||1) + 2;

    PUBNUB.publish({
        channel : channel23,
        message : msg
    });

    msg['force'] = 1;
    user_updated(msg);
    //console.log(pos);
    
    return 1;
}



// User Joined
function user_joined(message) {
    var pos   = message['pos'] || [100,100]
    ,   mouse = Sprite.create({
        image : {
            url : '   ',//'/static/images/mousespeak-cursor.png',
            width : 260,
            height : 30,
            offset : {
                top : 36,
                left : 0
            }
        },
        cell : {
            count : 1 // horizontal cell count
        },

        left : pos[1],
        top : pos[0],

        framerate : 60
    });

    // Do something when you mouseover.
    if (uuid != message['uuid']) bind( 'mouseover', mouse.node, function() {
        Sprite.move( mouse, {
            'opacity' : 0.5,
            'top'     : Math.ceil(Math.random()*150),
            'left'    : Math.ceil(Math.random()*150)
        }, wait );
    } );

    // Set Prettier Text
    PUBNUB.css( mouse.node, {
        'fontWeight' : 'bold',
        'padding'    : '5px 0 0 20px',
        'fontSize'   : '70px',
        'fontFamily' : '"proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif',
        'color'      : "#d74"
    } );

    // Save UUID
    PUBNUB.attr( mouse.node, 'uuid', message['uuid'] );

    // Save User
    mice[message['uuid']] = mouse;

    // Update User
    user_updated(message);

}


var value;
var isDown;
var drawBegin = true;
var inkColor = "#aaafff";




function user_updated(message) {
  
    var pos   = message['pos']
    ,   click = message['click']
    ,   txt   = message['txt']
    ,   last  = message['c']
    ,   force = message['force']
    ,   tuuid = message['uuid']
    ,   mouse = mice[tuuid]
    ,   stroke = message['stroke']
    ,   colors = message['colors'],
    draw = message['draw'],
   //actionValue = message['actionValue'],
    angle = message['angle'],
    mousedown = message['actionDown'];

    //***********************************************************************


    //color = colors[(index++) % colors.length];
    stroke = Math.random() * 40 + 10 | 0;
  


    if (!mouse) return user_joined(message);

    // Common to reset value if page reloaded
    if (last && (mouse.last||0) - last > 100)
        mouse.last = last;

    // Self
    //if (force) mouse.last = last;

    // Prevent Jitter from Early Publish
    if (
        !force            &&
        last              &&
        mouse.last        &&
        mouse.last > last
    ) return;

    // Set last for the future.
    if (last) mouse.last = last;

    // Update Text Display
    if (txt) mouse.node.innerHTML = txt.replace( nohtml, '' );

    // Set Delay to Fade User Out on No Activity.
    mouse.timerfade && clearTimeout(mouse.timerfade);
    mouse.timerfade = setTimeout( function() {
        PUBNUB.css( mouse.node, { 'opacity' : 0.4 } );
        clearTimeout(mouse.timerfade);
        mouse.timerfade = setTimeout( function() {
            PUBNUB.css( mouse.node, { 'display' : 'none' } );
        }, mousefade );
    }, mousefade );

    // Reshow if hidden.
    PUBNUB.css( mouse.node, {
        'display' : 'block',
        'opacity' : 1.0
    });

//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
//ctx.lineWidth = 4;

   
    // Move Player.
    if (pos) {

      if(actionDown == "greenClicked")
      {
        inkColor = "#aaaaaa";
      }

      console.log(drawBegin, actionDown);
      if(actionDown == "mouseisDown")
        {  
            if(drawBegin)
            {
            //ctx.fillStyle = "#b8bfff";
            ctx.beginPath();      
            //oldX[counter] = pos[0];
           // oldY[counter] = pos[1];
            ctx.moveTo(pos[0],pos[1]);
            isDown = true;
            } 
      }


    //console.log("Variables are " + isDown, actionValue, actionDown)
    

      if(isDown )

      {
       drawBegin = false;
       ctx.lineTo(pos[0],pos[1]);
       ctx.strokeStyle = inkColor;
       ctx.stroke();
     }

 
     if(actionDown == "mouseisUp")
     {
         isDown = false;
         ctx.closePath();
         drawBegin = true;

     }
        //console.log(pos[0],oldX[count - 2],count,oldX.length);
       // console.log("check console  " + pos[0]);
      /* if(canvasArray[0] ==  !canvasArray[1])
       {
          sendToJavaScript(pos[3]);
          actionValue = pos[3];
          callToActionscript(pos[3]);

       }*/


        //********************************************************** passing the PUBNUB value to the Variable   ************************************

         //console.log(actionValue);
         //sendToJavaScript(pos[3]);
         actionValue = pos[3];
         actionDown = pos[2];

        //callToActionscript(pos[3]);
        


      
        Sprite.move( mouse, {
            'top'  : pos[1],
            'left' : pos[0]
        }, wait - 10 );



        // Change Direction
        if (pos[0] > mouse.left)
            Sprite.setframe( mouse, 0, { top : 36 } );
        else if (pos[0] < mouse.left)
            Sprite.setframe( mouse, 0, { top : 1 } );


    }
    
}

function get_txt() {
    var val = (textbox.value||'')    //  ********************GET_TEXT NEUTRALIZED FOR  IMPEDING CHAT
    ,   len = val.lengths;
       
      

    /*if (len > maxmsg) {
        textbox.value = val = '...' + val.slice( -maxmsg );
    }

    else if(val.indexOf(init_text) != -1 && len > init_text.length) {
        textbox.value = val = val.replace( init_text, '' );
    }*/

    return val;
}




// Add Input Textbox
PUBNUB.css( textbox, {
    'position' : 'absolute',
    'top'      : -40,
    'left'     : 0
} );
//var init_text = 'Type a message...';
textbox.value = init_text;
body.appendChild(textbox);


// Setup Events
bind( 'mousemove' ,  document, send );
bind('mousedown',  document,   send);
bind('click'     ,   document,send);
bind('click'     ,   document,mouseClick);
bind( 'touchmove',  document, send);
bind( 'touchstart', document, send);
bind( 'touchend',   document, send);
bind( 'keydown',    document, monopuff);
bind('stroke',   document, send);
bind( 'mousemove' ,  document, mouseMove );
bind('mousedown',  document,   mouseIsDown);
bind('mouseup',  document,   mouseIsUp);



// Setup For Any Input Event.
PUBNUB.each( PUBNUB.search('input'), function(input) {
    bind( 'focus', input, focusize );
} );

// Load UUID and Send First Message
if (!uuid) PUBNUB.uuid(function(id){
    // Get UUID
    uuid = id;
});
// Receive Mice Friends
//PUBNUB.subscribe( { channel : channel }, user_updated );


// Capture Text Journey
function keystroke( e, key ) {setTimeout(function(){
    if (',13,27,'.indexOf(','+key+',') !== -1) textbox.value = ' ';
   send(e);
   
},20);return 1}

var ignore_keys = ',18,37,38,39,40,20,17,35,36,33,34,16,9,91,';
function focusize() {focused = 1;return 1}

function monopuff(e) {
    var key = e.keyCode;

    if (ignore_keys.indexOf(','+key+',') !== -1)
        return 1;

    if (!focused)
        //textbox.focus();                  //************************OMIT TEXTBOX FOCUS *****************
        keystroke( e, key );
    return 1
}

function carouzel (){
                 
            spArray = [];
            canvasSpArray = [];
            txtBoxArray=[txtBox1, txtBox2, txtBox3, txtBox4, txtBox5];
            inputNumber=[Zero,One,Two,Three, Four, Five, Six, Seven, Eight, Nine];
            //inputLtr=[Ltr_a, Ltr_b, Ltr_c, Ltr_d, Ltr_e, Ltr_f, Ltr_g, Ltr_h, Ltr_i, Ltr_j, Ltr_k, Ltr_l, Ltr_m, Ltr_n, Ltr_o, Ltr_p, Ltr_q, Ltr_r, Ltr_s, Ltr_t,Ltr_u, Ltr_v, Ltr_w, Ltr_x, Ltr_y, Ltr_z];
            //operations=[Mult,DivisionLine,Add,Subt];
            //parenth=[OpenParenth,CloseParenth];
            //lineshapes=[LineShape,RightTriangle,AppleRed,OrangeFruit];
            //miscell=[Space,Equal];
            
            
            //init();
            //addButtons();
            //loadXML();
        }

var db     = this['localStorage'],
    cookie = {
    get : function(key) {
        if (db) return db.getItem(key);
        if (document.cookie.indexOf(key) == -1) return null;
        return ((document.cookie||'').match(
            RegExp(key+'=([^;]+)')
        )||[])[1] || null;
    },
    set : function( key, value ) {
        if (db) return db.setItem( key, value );
        document.cookie = key + '=' + value +
            '; expires=Thu, 1 Aug 2030 20:00:00 UTC; path=/';
    }
};






// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Get URL Params
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function urlparams() {
    var params = {};
    if (location.href.indexOf('?') < 0) return params;

    PUBNUB.each(
        location.href.split('?')[1].split('&'),
        function(data) { var d = data.split('='); params[d[0]] = d[1]; }
    );

    return params;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Construct URL Param String
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function urlstring(params) {
    return location.href.split('?')[0] + '?' + PUBNUB.map(
        params, function( key, val) { return key + '=' + val }
    ).join('&');
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Calling & Answering Service
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var video_out = PUBNUB.$('video-display');
var img_out   = PUBNUB.$('video-thumbnail');
var img_self  = PUBNUB.$('video-self');
var phone     = window.phone = PHONE({
    number        : my_number.number, // listen on this line
    publish_key   : 'pub-c-f2bef1bd-5401-49be-9027-9dddf0a3a32c',
    subscribe_key : 'sub-c-240bfffa-afae-11e4-984f-0619f8945a4f',
    ssl           : true
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Video Session Connected
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function connected(session) {
    video_out.innerHTML = '';
    video_out.appendChild(session.video);

    PUBNUB.$('number').value = ''+session.number;
    sounds.play('sound/hi');
    console.log("Hi!");
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Video Session Ended
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function ended(session) {
    set_icon('facetime-video');
    img_out.innerHTML = '';
    sounds.play('sound/goodbye');
    console.log("Bye!");
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Video Session Ended
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function set_icon(icon) {
    video_out.innerHTML = '<span class="glyphicon glyphicon-' +
        icon + '"></span>';
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Start Phone Call
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function dial(number) {
    // Dial Number
    var session = phone.dial(number);

    // No Dupelicate Dialing Allowed
    if (!session) return;

    // Show Connecting Status
    set_icon('send');
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Ready to Send or Receive Calls
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
phone.ready(function(){
    // Ready To Call
    set_icon('facetime-video');

    // Auto Call
    if ('call' in urlargs) {
        var number = urlargs['call'];
        PUBNUB.$('number').value = number;
        dial(number);
    }

    // Make a Phone Call
    PUBNUB.bind( 'mousedown,touchstart', PUBNUB.$('dial'), function(){
        var number = PUBNUB.$('number').value;
        if (!number) return;
        dial(number);
    } );

    // Hanup Call
    PUBNUB.bind( 'mousedown,touchstart', PUBNUB.$('hangup'), function() {
        phone.hangup();
        set_icon('facetime-video');
    } );

    // Take Picture
    PUBNUB.bind( 'mousedown,touchstart', PUBNUB.$('snap'), function() {
        var photo = phone.snap();
        img_self.innerHTML = ' ';
        img_self.appendChild(photo.image);
        setTimeout( function() { img_self.innerHTML = ' ' }, 750 );
    } );
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Received Call Thumbnail
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function thumbnail(session) {
    img_out.innerHTML = '';
    img_out.appendChild(session.image);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Receiver for Calls
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
phone.receive(function(session){
    session.message(message);
    session.thumbnail(thumbnail);
    session.connected(connected);
    session.ended(ended);
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Chat
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var chat_in  = PUBNUB.$('pubnub-chat-input');
var chat_out = PUBNUB.$('pubnub-chat-output');

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Send Chat MSG and update UI for Sending Messages
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
PUBNUB.bind( 'keydown', chat_in, function(e) {
    if ((e.keyCode || e.charCode) !== 13)     return true;
    if (!chat_in.value.replace( /\s+/g, '' )) return true;

    phone.send({ text : chat_in.value });
    add_chat( my_number.number + " (Me)", chat_in.value );
    chat_in.value = '';
} )

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Update Local GUI
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function add_chat( number, text ) {
    if (!text.replace( /\s+/g, '' )) return true;

    var newchat       = document.createElement('div');
    newchat.innerHTML = PUBNUB.supplant(
        '<strong>{number}: </strong> {message}', {
        message : safetxt(text),
        number  : safetxt(number)
    } );
    chat_out.insertBefore( newchat, chat_out.firstChild );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// WebRTC Message Callback
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function message( session, message ) {
    add_chat( session.number, message.text );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// XSS Prevent
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function safetxt(text) {
    return (''+text).replace( /[<>]/g, '' );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Problem Occured During Init
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
phone.unable(function(details){
    console.log("Alert! - Reload Page.");
    console.log(details);
    set_icon('remove');
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Debug Output
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
phone.debug(function(details){
     // console.log(details);
});

})();
