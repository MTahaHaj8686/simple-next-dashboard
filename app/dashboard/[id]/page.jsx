async function user({params}) {
    const {id} = await params
    return (<h1>userID : {id}</h1> );
}

export default user;