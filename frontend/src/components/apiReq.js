const API_BASE = "http://localhost:8081/products"


async function getProduct(endpoint){
    try{
        const response = await fetch(endpoint)
        const data = await response.json()
        return data

    }catch(error){
        console.log("erro")
    }
}
export default{
    getproductList: async () =>{
        return {list: await getProduct(API_BASE)}
    }
}
