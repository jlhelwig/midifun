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
  tempo1 =[];
  // var JZZ = require('jzz');
  var midiObject ={};
  console.log("this is working");


  $(".second_col").addClass('green');
  $(".third_col").addClass('purple');
  $(".fourth_col").addClass('orange');
  $('.fifth_col').addClass('red');
  $(".sixth_col").addClass('green');
  $(".seventh_col").addClass('purple');
  $(".eighth_col").addClass('orange');


  // JZZ.synth.OSC.register('Synth');
  var port = JZZ().openMidiOut(['SimpleSynth','Apple DLS Synth',0]).or(function(){alert('Cannot open MIDI port!');});
  console.log('port.info', port.info());
  // port.send([0x90,60,100]).send([0x90,64,100]).send([0x90,67,100])
  JZZ().openMidiIn().or('MIDI-In:  Cannot open!')
       .and(function(){ console.log('MIDI-In: ', this.name())})
       .connect(function(msg){
        //  console.log(msg)
       midiObject = msg;
      //  console.log('typeof msg is midiObject._from[0]._ready: ', typeof midiObject._from[0]._handles[0]);
      //  console.log('msg is midiObject._from[0]._ready: ', midiObject._from[0]._info);

      if (midiObject[0]==145) {
        $(".first_col").toggleClass('red');

        // console.log('this is the midi note Note ON: ', midiObject[1]);
        // console.log('port information', port.send([0x90,midiObject[1],127]))
        port.send([0x90,midiObject[1],127])
        // var tempo = new Date()
        // tempo1.push(tempo)
        // console.log('tempo',tempo1);
        // tempoDiff = tempo1[2]-tempo1[1]
        // console.log('this checks difference in dates', tempoDiff);
      }
      if (midiObject[0]==129){
        // console.log('this is the midi note Note OFF: ', midiObject[1]);
        port.send([0x80,midiObject[1],0])
        $(".first_col").toggleClass('red');
      }

      //  console.log('type of thing ',typeof midiObject[1]);
    })
       .wait(10000).close();








$("button").click(function() {

  $('#' + this.id).toggleClass('blue');

});


});
