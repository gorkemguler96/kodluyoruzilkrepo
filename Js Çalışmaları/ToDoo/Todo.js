let listDOM = document.querySelector("#list")

function deleteTask(element) {
        element.parentElement.style.display ="none";
}

function newElement() {
    let val = "" + 1;
    if ( val < task.value){
    let liDOM = document.createElement("li")
        liDOM.innerHTML =
            `${task.value}
        ${`<button id="carpi" 
        type="button"
        class="close carpim mt-3 mr-3"
        aria-label="Close"
        onclick="deleteTask(this)"
        > 
        <span aria-hidden="true">&times;</span>
        </button>`}`
        listDOM.append(liDOM)
        task.value = ""

        $(document).ready(function(){
            $('#liveToastEkle').toast('show');
            $("#liveToastBtn").on("hidden.bs.toast", function () {
                $('#liveToastEkle').toast('dispose');
            })
        });

    } else {
        task.value = ""
        $(document).ready(function(){
            $('#liveToastCikar').toast('show');
            $("#liveToastBtn").on("hidden.bs.toast", function () {
                $('#liveToastCikar').toast('dispose');
            })
        });
    }
    }


listDOM.addEventListener('click',function (item){
    item.target.classList.toggle("checked");


})
let sil = document.getElementById('carpi')
sil.onclick =function (){
    this.parentElement.style.display="none";
    console.log(this.parentElement)

}
let sill = document.getElementsByClassName("carpim")

for(let i = 0; i < sill.length; i++) {
 sill[i].onclick = function (){
        this.parentElement.style.display ="none";
}}





