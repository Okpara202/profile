export default async function getProfile(user){
    let res = await fetch(`https://api.github.com/users/${user}`);
    if(!res.ok){
        throw{
            message : res.message,
            status : res.status
        }
    }
    const data = await res.json();
    return data;   
}