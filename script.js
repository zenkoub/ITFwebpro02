function setUsername() {
    console.log(document.getElementById('username_input').value)
    const username = document.getElementById('username');
    const value = document.getElementById('username_input').value;
    username.innerHTML = value;
}

function setImageURL() {
    console.log(document.getElementById('image_input').value)
    const image = document.getElementById('image')
    const value = document.getElementById('image_input').value;
    image.src = value
}