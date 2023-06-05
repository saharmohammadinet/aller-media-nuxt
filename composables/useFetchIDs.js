export default async(url) => {
    const {data, error} = await useFetch (url);

    if(error.value){
        console.log('Error')
    }
     return data
}