
function createUser(element){
    return document.createElement(element);
}
function append(parent, element){
    return document.appendChild(element);
}

function then(param) {
    
}

fetch("https://randomuser.me/")
.then(function(data){
    .then((resp) =>resp.json())
    .then(function (data){
        
    })
})

.catch(function (error){

})