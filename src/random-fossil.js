import axios from 'axios'

document.getElementById('get-random-fossil').addEventListener('click', function () {
    axios.get('/random-fossil.json')
        .then(function (response) {
            document.getElementById('random-fossil-image').src = response.data.image;
            document.getElementById('random-fossil-name').textContent = response.data.name;
        })
        .catch(function (error) {
            console.error('Error fetching data from /random-fossil.json:', error);
        });
});