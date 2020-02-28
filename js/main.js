(() => {
  // variable stack here -> the elements you want to interact with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightbox = document.querySelector(".lightbox"),
      houseVideo = lightbox.querySelector("video"),
      closeButton = lightbox.querySelector(".close-button");

   // functions go in the middle -> what do we want our app to do ?
  function showLightBox() {
      // show the lightbox on a click

      lightbox.classList.add("show-lightbox");
      houseVideo.play();
    }

    function hideLightBox() {
      lightbox.classList.remove("show-lightbox");
      houseVideo.pause();
      houseVideo.currentTime = 0;
    }

  // event handling for our sigilbuttons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

  // add some event handling for the lightbox close close Button
  closeButton.addEventListener("click", hideLightBox);
})();
