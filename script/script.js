window.onload = function() {

    //Arrays to hold all the images
    const skyImages = [
        './images/sky1.png',
        './images/sky2.png',
        './images/sky3.png',
        './images/sky4.png'
    ];
    
    const centerImages = [
        './images/center-design1.png',
        './images/center-design2.png',
        './images/center-design3.png',
        './images/center-design4.png',
        './images/center-design5.png',
        './images/center-design6.png',
        './images/center-design7.png',
        './images/center-design8.png'
    ];

    const skylineImages = [
        './images/skyline1.png',
        './images/skyline2.png',
        './images/skyline3.png'
    ];

    const floorImages = [
        './images/tile1-01.png',
        './images/tile2-01.png'
    ];

    //Img Id selectors
    var skycarrouselDiv = document.querySelector("#sky-img");
    var skylineDiv = document.querySelector("#skyline-img");
    var centerDiv = document.querySelector("#center-img");
    var floorDiv = document.querySelector("#floor-img");

    var resetState = document.querySelector("#reset-button");
    var crtBtn = document.querySelector("#crt-button");
    var crtDiv = document.querySelector("#crt");
    
    var music = document.querySelector("#music");
    var playBtn = document.querySelector("#play-button");

    //Functions that will take one random image of each array and output it to the the specific tag
    function displayRandomSky() {
        const randomSelector = Math.floor(Math.random() * skyImages.length);

        const skyImageRandom = skyImages[randomSelector];

        skycarrouselDiv.src = skyImageRandom;
    };

    function displayRandomSkyline() {
        const randomSelector = Math.floor(Math.random() * skylineImages.length);

        const skylineImageRandom = skylineImages[randomSelector];

        skylineDiv.src = skylineImageRandom;
    };

    function displayRandomCenter() {
        const randomSelector = Math.floor(Math.random() * centerImages.length);

        const centerImageRandom = centerImages[randomSelector];

        centerDiv.src = centerImageRandom;
    };

    function displayRandomFloor(){
        const randomSelector = Math.floor(Math.random() * floorImages.length);

        const floorImageRandom = floorImages[randomSelector];

        floorDiv.src = floorImageRandom;
    };

    //functions call out
    displayRandomSky();
    displayRandomCenter();
    displayRandomSkyline();
    displayRandomFloor();


    //RESET FUNCTION
    resetState.onclick = function() {
     window.location.reload();
    };
    
    //PLAY/PAUSE MUSIC
    function toggleMusicStatus() {  
    
        if(music.paused) {
            music.play();
            playBtn.textContent = 'Pause';
        }
        else{
            music.pause();
            playBtn.textContent = 'Play';
        };
    
    };
    playBtn.addEventListener('click', toggleMusicStatus);


    //CRT ON/OFF
    function toggleCRT() {
        
        if(crtDiv.style.display === 'none') {
            crtDiv.style.display = 'block';
            crtBtn.textContent = "Off";
        }
        else{
            crtDiv.style.display = "none";
            crtBtn.textContent = "On";
        };
    };
    crtBtn.addEventListener('click', toggleCRT);
};


