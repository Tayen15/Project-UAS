document.getElementById('menu-button').addEventListener('click', function () {
     var menu = document.getElementById('menu');
     var menuIcon = document.getElementById('menu-icon');
     var closeIcon = document.getElementById('close-icon');
     menu.classList.toggle('hidden');
     menu.classList.toggle('flex');
     menuIcon.classList.toggle('hidden');
     closeIcon.classList.toggle('hidden');
});

function nextStep(step) {
     document.querySelectorAll('.step').forEach(stepDiv => stepDiv.classList.add('hidden'));
     document.getElementById(`step-${step}`).classList.remove('hidden');
}

function prevStep(step) {
     document.querySelectorAll('.step').forEach(stepDiv => stepDiv.classList.add('hidden'));
     document.getElementById(`step-${step}`).classList.remove('hidden');
}

document.getElementById('serviceForm').addEventListener('submit', function (event) {
     event.preventDefault();
     alert('Booking berhasil! Terima kasih telah menggunakan layanan kami.');
});

