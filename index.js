//  fetch all pages 
const baseUrl ="https://www.swapi.tech/api/people";
const peopleContainer = document.getElementById('people-container');
async function fetchRecords() {
    try {
        const response = await fetch('https://www.swapi.tech/api/people');
        if (!response.ok) {
            throw new Error('Request failed' );
        }

        let record = await response.json();
        console.log("record:", record);
        const recordLength = record.total_pages;
        console.log('Data fetched successfully:', recordLength);

        const pageUrl = baseUrl + "?page=";
        const urls = [];
        for (let i = 0; i < recordLength; i++) {
            urls.push(pageUrl +(i+1 ));
        }
        console.log(urls);
        getallPages(urls);
    } catch (error) {
        console.error('An error occurred:',error);
    }
}
fetchRecords();

async function getallPages(urls) {
    const promisesList = urls.map(Text=> fetch(Text)).then(r=> r.json().catch(err => console.log(err)));
    const finalResult = await Promise.all(promisesList).then(result  =>{
    let finalList = []
    result.forEach(res => {
     finalList= finalList.concat(res.results);
    });

console.log("finalList:", finalList);
for(let person of finalList){
    let personElt =document.createElement("div");
    let personUrl=person.url;
    personElt.className = 'person';

    // add a header 
    personHeader.document.createElement("h2");
    personHeader.innerText=person.name;
    personElt.appendChild(personHeader);
    peopleContainer.appendChild(personElt);

        personElt.addEventListener("click",()=>{
})
return finalList;
    });
}

