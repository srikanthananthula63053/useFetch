import UseFetch from ".";


export default function TextUseFetchHook() {

    const { data, loading, error } = UseFetch("https://dummyjson.com/products", {});


    return (
        <div>
            <h1> Use Fetch data
            </h1>
            {
                loading ? <h1>loading the data Please wait</h1> : null
            }
            {
                data && data.products && data.products.length ?
                    data.products.map(productsItems => (<p key={productsItems}>{productsItems.title}</p>)) : null
            }
            {
                error ? { error } : null
            }
        </div>
    )
}