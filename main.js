const blur = document.querySelector('.blackout');

function showBlur() {
  blur.classList.add('open');
}

function hideBlur() {
  blur.classList.remove('open');
}

function popup(id) {
  showBlur();
  document.getElementById(id).classList.add('open');
}

function closePopups(){
    hideBlur();
    document.querySelectorAll('.popup').forEach(function(popup){
        popup.classList.remove('open');
    });
}