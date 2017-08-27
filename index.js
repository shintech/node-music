const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

function getChord (offset, type, extension) {
  let retval = []
  let chord = []

  var root = notes.indexOf(offset)

  if (type === 'maj') {
    chord = [root, root + 4, root + 7]
  }

  if (type === 'min') {
    chord = [root, root + 3, root + 7]
  }

  if (type === 'dim') {
    chord = [root, root + 3, root + 6]
  }

  if (extension === 'maj7') {
    chord.push(root + 11)
  }

  if (extension === 'min7') {
    chord.push(root + 10)
  }

  chord.map((note) => {
    if (note > 11) {
      note -= 12
    }
    retval.push(notes[note])
  })

  return retval
}

var G = getChord('G', 'maj')
var A = getChord('A', 'min')
var B = getChord('B', 'min')
var C = getChord('C', 'maj', 'maj7')
var D = getChord('D', 'maj', '7')
var E = getChord('E', 'min', 'min7')
var Fs = getChord('F#', 'dim')

console.log(G, A, B, C, D, E, Fs)
