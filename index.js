document.getElementById('submitbutton').addEventListener('click', function () {
    const form = document.querySelector('form');

    let nama = document.getElementById('nama').value;
    let role = document.getElementById('role').value;
    let availability = document.getElementById('availability').value;
    let usia = document.getElementById('usia').value;
    let lokasi = document.getElementById('lokasi').value;
    let yoa = document.getElementById('yoa').value;
    let email = document.getElementById('email').value;
    
    if (form.checkValidity()) {
        document.getElementById("my_nama").innerHTML = nama;
        document.getElementById("my_role").innerHTML = role;
        document.getElementById("my_availability").innerHTML = availability;
        document.getElementById("my_usia").innerHTML = usia;
        document.getElementById("my_lokasi").innerHTML = lokasi;
        document.getElementById("my_yoa").innerHTML = yoa;
        document.getElementById("my_email").innerHTML = email;

        document.getElementById("input_data_form").remove();
    }
});