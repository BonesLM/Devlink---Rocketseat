function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }

  //html.classList.toggle('light')

  // Pegar a tag img
  const img = document.querySelector('#profile img')

  // Substituir a imagem
  if (html.classList.contains('light')) {
    // Se tiver light mode
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // Se tiver sem light mode
    img.setAttribute('src', './assets/avatar.png')
  }


  // Substituir a tag alt
  if (html.classList.contains('light')) {
    // Se tiver light mode
    img.setAttribute('alt', 'Avatar Light Mode')
  } else {
    // Se tiver sem light mode
    img.setAttribute('alt', 'Avatar Dark Mode')
  }
}