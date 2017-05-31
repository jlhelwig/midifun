//
tempo1 =[]
var JZZ = require('jzz');
var midiObject ={}
var port = JZZ().openMidiOut(0).or(function(){alert('Cannot open MIDI port!');});
JZZ().openMidiIn().or('MIDI-In:  Cannot open!')
     .and(function(){ console.log('MIDI-In: ', this.name())})
     .connect(function(msg){
      //  console.log(msg)
        console.log('midiout info: ', port.info())
     midiObject = msg;
     console.log('typeof msg is midiObject._from[0]._ready: ', typeof midiObject._from[0]._handles[0]);
    //  console.log('msg is midiObject._from[0]._ready: ', midiObject._from[0]._info);

    if (midiObject[0]==145) {

      // console.log('this is the midi note Note ON: ', midiObject[1]);
      // console.log(port.send([0x90,midiObject[1],127]));
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
    }

    //  console.log('type of thing ',typeof midiObject[1]);
  })
     .wait(10000).close();
//      var midi = new jazz.MIDI();
//
//      var jazz = require('jazz-midi');
//
// var name = midi.MidiOutOpen(0);
// if(name){
//   console.log('Default MIDI-Out port:', name);
//   midi.MidiOut(0x90,60,100); midi.MidiOut(0x90,64,100); midi.MidiOut(0x90,67,100);
//   setTimeout(function(){
//     midi.MidiOut(0x80,60,0); midi.MidiOut(0x80,64,0); midi.MidiOut(0x80,67,0);
//     midi.MidiOutClose();
//     console.log('Thank you for using Jazz-MIDI!');
//   }, 3000);
// } else {
//   console.log('Cannot open default MIDI-Out port!');
// }
