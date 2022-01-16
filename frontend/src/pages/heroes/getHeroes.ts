
 const GetHeroes = () => {
    //  let reqHeaders: any = {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Authorization': sessionStorage.getItem('Authorization')
    //  }
    //  return fetch('http://localhost:3000/heroes',{
    //      method: "GET",
    //      headers: reqHeaders
    //  })
    //  .then((res) => res.json())
    //  .then((result) => {
    //      return result.myHeroes;
    //  })
    //  .catch((e) => {
    //      console.log(e)
    //  })
    let reqHeaders: any = {
        'Authorization': sessionStorage.getItem('Authorization')
     }
     return fetch('http://localhost:3000/heroes',{
         method: "GET",
         headers: reqHeaders
     })
     .then((res) => res.json())
     .then((result) => {
         console.log(result.myHeroes)
         return result.myHeroes;
     })
     .catch((e) => {
         console.log(e)
     })
    }


export default GetHeroes;