let newdiv = document.createElement("div");
let newdiv1B = document.createElement("div");

document.body.append(newdiv);
newdiv.append(newdiv1B);

let promise = new Promise((resolve, reject) => {
  let button = document.getElementById("display");
  button.addEventListener("click", () => {
    let req = new XMLHttpRequest();
    req.open("GET", "https://biriyani.anoram.com/get");
    req.send();
    req.onload = function () {
      if (req.status == 200) {
        let data = JSON.parse(req.response);
        resolve(data);
        console.log(data);
      } else {
        reject("Enter the correct word");
      }
    };
  });
});
promise.then((res) => {
  console.log(res);
  newdiv1B.innerHTML = `
<div>
<img src=${res.image}>
</div>
`;
});
