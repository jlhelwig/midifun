$(document).ready(function(){
var x =120
var y
var beats = {}
console.log("this is working");
// var btn = document.getElementById("bpm")

// $('#bpm').on("click", ()=> {
//   console.log($('.beats')[0].value);
// });
$('#bpm').on("click",()=> {
  x=$('#bpm')[0].value;
  console.log('bpm are: ', x);
  y=x*1000/240;
  beats.quarter=y
  // console.log('beats per second ', y);
  console.log('ms between quarter notes', y);
  console.log('another way to look at this thing ', beats.quarter);
});
//convert bpm to ms 120 beats/minutes 1 min/60sec sec/1000ms


// console.log('the beats per minute are: ', document.getElementById('bpm').value);
  $('.first_col').addClass('red');
  $(".second_col").addClass('green');
  $(".third_col").addClass('purple');
  $(".fourth_col").addClass('orange');
  $('.fifth_col').addClass('red');
  $(".sixth_col").addClass('green');
  $(".seventh_col").addClass('purple');
  $(".eighth_col").addClass('orange');









// for (var i = 0; i < 10000; i++) {
//
// }
// $(".first_col").removeClass('green')

$("button").click(function() {

  $('#' + this.id).toggleClass('blue');

});

// var context = new AudioContext(),
//     oscillators = {};
//
// if (navigator.requestMIDIAccess) {
//     navigator.requestMIDIAccess()
//         .then(success, failure);
// }
//
// function success (midi) {
//     var inputs = midi.inputs.values();
//     // inputs is an Iterator
//
//     for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
//         // each time there is a midi message call the onMIDIMessage function
//         input.value.onmidimessage = onMIDIMessage;
//     }
// }
//
// function failure () {
//     console.error('No access to your midi devices.')
// }
//
// function onMIDIMessage (message) {
//     var frequency = midiNoteToFrequency(message.data[1]);
//
//     if (message.data[0] === 144 && message.data[2] > 0) {
//         playNote(frequency);
//     }
//
//     if (message.data[0] === 128 || message.data[2] === 0) {
//         stopNote(frequency);
//     }
// }
//
// function midiNoteToFrequency (note) {
//     return Math.pow(2, ((note - 69) / 12)) * 440;
// }
//
// function playNote (frequency) {
//     oscillators[frequency] = context.createOscillator();
//     oscillators[frequency].frequency.value = frequency;
//     oscillators[frequency].connect(context.destination);
//     oscillators[frequency].start(context.currentTime);
// }
//
// function stopNote (frequency) {
//     oscillators[frequency].stop(context.currentTime);
//     oscillators[frequency].disconnect();
// }
})
