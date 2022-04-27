function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRadomQuote] = React.useState([]);
    const [color, setColor] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data)
            let randIndex = Math.floor(Math.random() * data.length)
            setRadomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            setColor(color)
        }
        getRandomColor();

        let randIndex = Math.floor(Math.random() * quotes.length)
        setRadomQuote(quotes[randIndex])
    }

    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5">
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">Inspirational Quotes</div>
                        <div className="card-body">
                            {randomQuote ? ( 
                                <>
                                    <h5 className="card-title">- {randomQuote.author || "No author"} </h5>
                                    <p className="card-text">"{randomQuote.text}"</p>
                                </>
                            ) : (
                                <h2>Loading...</h2>
                            )}
                            <div className="row">
                                <button onClick={getNewQuote} className="col-md-3 col-sm-3 btn btn-primary">New Quote</button>
                                <a href="#" className="col-md-1 col-sm-1 btn btn-success" target="_blank">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="#" className="col-md-1 col-sm-1 btn btn-success" target="_blank">
                                <i className="fab fa-tumblr"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
