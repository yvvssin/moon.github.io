document.getElementById('quality').addEventListener('change', function() {
    var selectedValue = this.value;
    var imageUrl = '';
    var imageSize = {};
    switch(selectedValue) {
        case '144p':
            imageUrl = 'img/144moon.png';
            imageSize.width = '300px';
            imageSize.height = '300px';
        break;
        case '240p':
            imageUrl = 'img/240moon.png';
            imageSize.width = '300px';
            imageSize.height = '300px';
        break;
        case '480p':
            imageUrl = 'img/480moon.png';
            imageSize.width = '400px';
            imageSize.height = '300px';
        break;
        case '720p':
            imageUrl = 'img/720moon.png';
            imageSize.width = '400px';
            imageSize.height = '300px';
        break;
        case '1080p':
            imageUrl = 'img/1080moon.jpg';
            imageSize.width = '300px';
            imageSize.height = '300px';
        break;
        default: imageUrl = '';
    }
    if(imageUrl) {
        var imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = selectedValue;
        imgElement.style.width = imageSize.width;
        imgElement.style.height = imageSize.height;
        if (selectedValue === '1080p') {
            imgElement.style.borderRadius = '50%';

        }
        document.getElementById('imageContainer').innerHTML = '';
        document.getElementById('imageContainer').appendChild(imgElement);
        document.querySelector('.box').style.marginTop = '20vh';
    } else {
        document.getElementById('imageContainer').innerHTML = '';
        document.querySelector('.box').style.marginTop = '50vh';
    }
});