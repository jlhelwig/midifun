// var JZZ = require('./jzz');
//
// console.log('this is the port',port);
// function play(note){
//   // port.send([0x90,64,100]).send([0x90,64,100]).send([0x90,64,100]);
// }
// // play();
// var port;
//
// var open = JZZ().openMidiIn().or('MIDI-In:  Cannot open!')
//
//      open.and(function(){
//        console.log('MIDI-In: ', this.name());
//        JZZ.synth.OSC.register('Synth');
//        port = JZZ().openMidiOut(['Apple DLS Synth']).or(function(){alert('Cannot open MIDI port!');});
//      })
//      .connect(function(msg){
//        console.log(this);
//        port.noteOn(0,'C#5',127).wait(500).noteOff(0,'B##4');
//       //  port.noteOn([0x90,64,100]).send([0x90,64,100]).send([0x90,64,100]);
//        console.log(msg.toString());
//      })
//      .wait(10000).close();




$(document).ready(function(){
  var tempo1 =[];
  var j=0
  // var JZZ = require('jzz');
  var midiObject ={};
  console.log("this is working");
var columns = [".first_col",".second_col",".third_col",".fourth_col",".fifth_col",".sixth_col",".seventh_col",".eighth_col"]
function colorMeGrey(){
console.log('this should color the grid one time');
  $(".first_col").addClass('silver');
  $(".second_col").addClass('silver');
  $(".third_col").addClass('silver');
  $(".fourth_col").addClass('silver');
  $(".fifth_col").addClass('silver');
  $(".sixth_col").addClass('silver');
  $(".seventh_col").addClass('silver');
  $(".eighth_col").addClass('silver');
}

function myTimer(){
  let i=0;

  loopIt()
  function loopIt(num){
      setTimeout(function(){
        // console.log('this first timeout is running');
        $(columns[num]).addClass('blue')
        setTimeout(function(){
          // console.log('this second timeout is running');
          $(columns[num]).removeClass('blue');
        },200)

        if (i <columns.length){
          loopIt(i)
          i+=1;
          if (i===8){
            myTimer()
          }

          // console.log('i ',i);
        }
      },200)
    }
    // }
  }












  //   function myTimer() {
  //       function
  //     for (let j=0; j<1;j){
  //   $(".first_col").addClass('white')
  //   setTimeout(function(){$('.first_col').addClass('silver'); },250)
  //   j++
  //   }
  //
  //
  // }



  // var synth = JZZ.synth.MIDIjs({ soundfontUrl: "soundfont/synth_drum-mp3", instrument: "synth_drum" })
  //   .or(function(){ loaded(); alert('Cannot load MIDI.js!\n' + this.err()); })
  //   .and(function(){ loaded(); });
  // JZZ.synth.OSC.register('Synth');
  var port = JZZ().openMidiOut().or(function(){alert('Cannot open MIDI port!');});
  console.log('port.info', port.info());
  // port.send([0x90,60,100]).send([0x90,64,100]).send([0x90,67,100])
  JZZ().openMidiIn().or('MIDI-In:  Cannot open!')
       .and(function(){ console.log('MIDI-In: ', this.name())})
       .connect(function(msg){

       midiObject = msg;

      if (midiObject[0]===145) {
          if (j===0){
            colorMeGrey()
            myTimer()
          j++
          }





        port.send([0x90,midiObject[1],127])

      }
      if (midiObject[0]==129){

        port.send([0x80,midiObject[1],0])

      }


    })
       .wait(10000).close();








$("button").click(function() {

  $('#' + this.id).toggleClass('blue');

});


});
