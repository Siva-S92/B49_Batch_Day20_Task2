function displaytableContents(){
    const url = 'https://picsum.photos/v2/list?page=2&limit=100';
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        data.forEach((element)=>{
            console.log(element.download_url);

            const div_col = document.createElement("div");
            div_col.setAttribute("class", "col-lg-4 col-md-6 col-sm-12 d-flex flex-wrap justify-content-center align-items-center align-self-stretch my-2");
            const row = document.getElementById("main_row");
            row.append(div_col);

            let atag = document.createElement("a");
            atag.setAttribute("class", "open-newtab text-decoration-none");
            atag.href = `${element.download_url}`;
            div_col.append(atag);


            const div_card = document.createElement("div");
            div_card.setAttribute("class", "card1");
            div_card.style.width = "25rem";
            div_card.style.height = "18rem";
            atag.append(div_card);
            

            const image = document.createElement("img");
            image.setAttribute("class", "card-img-top");
            image.src = `${element.download_url}`;
            image.alt = "...";
            image.style.width = "100%";
            image.style.height = "100%";
            div_card.append(image);

            const cardbody = document.createElement("div");
            cardbody.setAttribute("class", "text-center bg-secondary m-0 p-0")
            atag.append(cardbody);

            const smalltag = document.createElement("small");
            smalltag.setAttribute("class", "smalltxt m-0 p-0 text-light")
            smalltag.style.fontSize = "10px"
            smalltag.innerHTML = `Author:  ${element.author}`
            cardbody.append(smalltag);
            
        })
    })
    .catch((err)=>{
        console.log(`ERROR: ${err}`);
    })
}
displaytableContents();



