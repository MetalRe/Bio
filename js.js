var editarInfoPessoaisBtn = document.getElementById("editar-informacoes-pessoais");
editarInfoPessoaisBtn.addEventListener("click", function() {
  var infoPessoais = document.getElementById("informacoes-pessoais");
  var infoPessoaisForm = "<form><label for='nome'>Nome:</label><input type='text' id='nome' name='nome'><br><label for='idade'>Idade:</label><input type='text' id='idade' name='idade'><br><label for='endereco'>Endereço:</label><input type='text' id='endereco' name='endereco'><br><button type='submit'>Salvar</button></form>";
  infoPessoais.innerHTML = infoPessoaisForm;
});

const form = document.getElementById('contact-form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (validateForm()) {
    const formData = new FormData()
    formData.append('name', nameInput.value)
    formData.append('email', emailInput.value)
    formData.append('message', messageInput.value)

    // Envie o formulário aqui usando o método fetch() ou XMLHttpRequest()
  }
})

function validateForm() {
  let isValid = true

  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error')
    isValid = false
  } else {
    nameInput.classList.remove('error')
  }

  if (emailInput.value.trim() === '') {
    emailInput.classList.add('error')
    isValid = false
  } else {
    emailInput.classList.remove('error')
  }

  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error')
    isValid = false
  } else {
    messageInput.classList.remove('error')
  }

  return isValid
}

const galleryImages = document.querySelectorAll('.gallery-image')
const lightbox = document.querySelector('.lightbox')
const lightboxImage = document.querySelector('.lightbox-image')
const lightboxClose = document.querySelector('.lightbox-close')

galleryImages.forEach(image => {
image.addEventListener('click', () => {
lightbox.style.display = 'flex'
lightboxImage.src = image.src
})
})

lightbox.addEventListener('click', () => {
lightbox.style.display = 'none'
})

lightboxClose.addEventListener('click', () => {
lightbox.style.display = 'none'
})


