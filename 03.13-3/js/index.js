function openCity (e, cityName) {
  const tabcontent = document.getElementsByClassName ('tabcontent');
  const tablinks = document.getElementsByClassName ('tablinks');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove ('active');
  }
  document.getElementById (cityName).style.display = 'block';
  e.currentTarget.classList.add ('active');
}

document.getElementById ('fclick').click ();
