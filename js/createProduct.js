const handleAddProduct = async (event) => {
    event.preventDefault()

    const url = "https://striveschool-api.herokuapp.com/api/product/"
    
    const createEvent = {
        name        : document.querySelector(  "#name"        ).value,
        description : document.querySelector(  "#description" ).value,
        brand       : document.querySelector(  "#brand"       ).value,
        imageUrl    : document.querySelector(  "#img-src"     ).value,
        price       : document.querySelector(  "#price"       ).value,
    }

    const requestObj = {
        method: "POST",
        body: JSON.stringify(createEvent),
        headers: {
            "Authorization": AUTHORIZATION_PRODUCTS,
            "Content-Type": "application/json",
        }
    }

    try{
        const response = await fetch(url, requestObj)
        
        if (response.ok){
            const newEvent = await response.json()
            alert("Product created successfully with an id of " + newEvent._id)
        } 
        else {
            if (response.status >= 400 && response.status < 500)
                throw new Error("User generated error, verify the data that it is sent from your computer!")
            else if (response.status >= 500 && response.status < 600)
                throw new Error("Server generated error, contact the admin to fix this")
        }
        console.log("You see me? then no exeption was thrown")
    } 
    catch {
        err => console.lor(err, err.message)
    }
    finally {
        console.log("I am the forever curse! You will never get rid of me!")
    }
}