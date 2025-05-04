async function hello({params}) {
    const {slug} = await params
    return ( <>hello {slug.length}</> );
}

export default hello;