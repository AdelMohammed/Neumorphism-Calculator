var numbers_Operations = document.getElementsByClassName('.number');
var clear_button = document.getElementById('clear');
function n_O(btn_val){
    document.getElementById('result-box').innerHTML += btn_val.innerHTML;
}
function clearInput(){
    document.getElementById('result-box').innerHTML = "";
}
function CE(){
    document.getElementById('result-box').innerHTML = document.getElementById('result-box').innerText.slice(0,-1)
}
function ev(){
    document.getElementById('result-box').textContent = eval(document.getElementById('result-box').textContent);
}