let fullname;
document.getElementById('submit').onclick = function() {
    fullname = Number(document.getElementById('un').value) + Number(document.getElementById('ln').value);
    document.getElementById('pat').textContent = `Welcome, ${fullname}`;
}