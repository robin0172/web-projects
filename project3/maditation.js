const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play')
    const outline = document.querySelector('.movingOutline circle')
    const video = document.querySelector('.vidContainer video')

    // sounds
    const sounds = document.querySelectorAll('.soundPicker button')

    // pic different sounds
    sounds.forEach(sound => {
        sound.addEventListener('click', function() {
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video')
            checkplaying(song)
        })
    })

    //timeDisplay
    const timeDisplay = document.querySelector(".timeDisplay")
        // get the lenght of outline
    const outlinelenght = outline.getTotalLength();
    console.log(outlinelenght);
    // duration
    let fakeduration = 600;

    outline.style.strokDasharray = outlinelenght;
    outline.style.strokeDashoffset = 100;

    // play sound
    play.addEventListener('click', () => {
            checkplaying(song)

        })
        // a function to specfic to stop and play the song
    const checkplaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg'


        } else {

            song.pause();
            video.pause()
            play.src = './svg/play.svg'
        }
    }

    // we can animate the circle
    // song.ontimeupdate = () => {
    //     let currentTime = song.currentTime
    //     let elapsed = fakeduration - currentTime
    //         // let  = Math.floor(elapsed % 60)
    //     let seconds = Math.floor(elapesd % 60)
    //     let minute = Math.floor(elapsed / 60)

    //     // animate the circle
    //     let progress = outlinelenght - (currentTime / fakeDuration) * outlinelenght
    //     outline.style.strokeDashoffset = progress
    // }

}


app()