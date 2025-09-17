var products = [
    {
        id:1,//id is unique
        title:"ipear 14 pro",
        price:999,
        image:"/images/smartphone.png",
        category:"smartphones"
    },
    {
        id:2,//id is unique
        title:"samsung smart tv",
        price:600,
        image:"/images/television.png",
        category:"smart tv"
    },
    {
        id:3,//id is unique
        title:"lenovo laptop",
        price:500,
        image:"/images/laptopp.png",
        category:"computer"
    },
]

class DataService {
    getProducts() {
        return products;
    }
}
export default DataService;