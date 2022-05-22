var form=document.getElementById("myform")

form.addEventListener('submit',function(e){
  e.preventDefault()
  var search=document.getElementById("search").value
  var originalName=search.split(' ').join('')

  fetch("https://api.github.com/users/"+originalName)
  .then((result) =>result.json())
  .then((data) =>{
    console.log(data)
    var repo=  data.public_repos
    var star=data.public_gists
    document.getElementById("result").innerHTML=
    "the total repositories are "+repo+"  for the entered username"
    document.getElementById("end").innerHTML=
    "the total stars are "+star+"  for the entered username"

  })
})
