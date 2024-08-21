const mainDiv=document.getElementById('main')
const symbols=[
    {
    image:"https://5.imimg.com/data5/SELLER/Default/2023/6/320145536/UJ/BL/QH/810622/indian-national-flag-1000x1000.webp",
    name:"National Flag(Tiranga)",
},
{
    image:"https://qph.cf2.quoracdn.net/main-qimg-3c85d60015e8ebd3afddf1e4ffadb19d-pjlq",
    name:"National Emblem",
},
{
    image:"https://qph.cf2.quoracdn.net/main-qimg-37dd0fd0b52db350661c07c998fa891b-lq",
    name:"National Fruit(mango)",
},
{
    image:"https://www.india-a2z.com/images/xLotus-flower1.jpg.pagespeed.ic.wArzipZ3wS.webp",
    name:"National Flower(Lotus)",
},
{
    image:"https://infinitylearn.com/surge/wp-content/uploads/2023/12/MicrosoftTeams-image-26-1024x641.jpg.webp",
    name:"National Animal(Tiger)",
},
{
    image:"https://infinitylearn.com/surge/wp-content/uploads/2023/12/Indian-Peacock.jpg.webp",
    name:"National Bird(Peacock)",
},
{
    image:"https://www.thesportsmirror.com/wp-content/uploads/2011/03/Hockey-India1.jpg",
    name:"National Game(Hockey)",
},
{
    image:"https://www.careerpower.in/2020/National-Tree-of-india.jpg",
    name:"National Tree(Banyan)"
},
{
    image:"https://knowindia.india.gov.in/assets/images/national_currency_inner.jpg",
    name:"National Currency(Rupee)"
},]

symbols.forEach(function(c)
{
    const divv=document.createElement('div')
    divv.classList.add('symbols')
    const photo=document.createElement('img')
    photo.src=c.image
    photo.alt=c.name
    const title=document.createElement('h2')
    title.textContent=c.name
    divv.append(photo,title)
    mainDiv.appendChild(divv)
})