import './style.css';
import * as Tone from 'tone';


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Calculatone</h1>
    <form>
        <label for="operation">Tape your operation:</label>
        <input type="text" id="operation" name="operation">
        <button id="play" type="submit">Play</button>
    </form>
  </div>
`


document.getElementById("play").addEventListener("click", async function(event){
    event.preventDefault();

    // Starting Tone
    await Tone.start();
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()

    // Getting result
    let result = document.getElementById("operation").value;

    // Converting number into notes
    result = result.toString().split('')

    // Set timer
    let timer = 0

    // Creating melody
    // let notes = []
    for (let i = 0; i < result.length; i++) {
        const number = parseInt(result[i])
        let note = ''
        switch (number) {
            case 0:
                note = 'A4'
                break
            case 1:
                note = 'B4'
                break
            case 2:
                note = 'C4'
                break
            case 3:
                note = 'D4'
                break
            case 4:
                note = 'E5'
                break
            case 5:
                note = 'A5'
                break
            case 6:
                note = 'B5'
                break
            case 7:
                note = 'C5'
                break
            case 8:
                note = 'D5'
                break
            case 9:
                note = 'E5'
                break
        }
        synth.triggerAttackRelease(note, "8n", now + timer)
        timer += 0.1
        // notes.push(note)
    }
    //synth.triggerRelease(notes, now + notes.length)

    // Reset timer
    timer = 0
});
