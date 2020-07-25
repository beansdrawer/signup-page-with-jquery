
let userData = []

function handleData(){

    const id = $('form')[0].id.value
    const password = $('form')[0].pw.value
    const name = $('form')[0].name.value
    const tel = $('form')[0].phone.value
    const addr = $('form')[0].addr.value + " " + $('form')[0].addrdetail.value
    const birth = $('form')[0].birth.value
    const job = $('form')[0].job.value
    const gender = $('form')[0].gender.value
    const email = $('form')[0].email.value
    const intro = $('form')[0].intro.value

    const userObj = {
      id: id,
      password: password,
      name : name,
      tel : tel,
      addr : addr,
      birth : birth,
      job:job,
      gender: gender,
      email:email,
      intro:intro
    }
    userData.push(userObj)

    console.log(userData)
    localStorage.setItem("userData", JSON.stringify(userData));


}