import React ,{useState} from "react";



function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    function pulldata() {
        fetch("http://192.168.1.248:8080/api/search/author/name/sanderson")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result.items);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }

    let header = new Headers({
        'Access-Control-Allow-Origin':'',
        'Content-Type': 'multipart/form-data'
    });

    return (
        <div>
        <div>{data}</div>
            <button onClick={pulldata}>pull</button>
        </div>
    )


}



export default MyComponent;