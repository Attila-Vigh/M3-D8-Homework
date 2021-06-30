const handleSubmit = async (event) => {
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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNTQ3M2IzNTgxNzAwMTVjMjI2ZjUiLCJpYXQiOjE2MjUwNTUzMzYsImV4cCI6MTYyNjI2NDkzNn0.dV6m_EkwKvI1_pBI4tVDG5FlQHL4OE0Diny1DGoXGO0",
            "Content-Type": "application/json",
        }
    }

    try{
        const response = await fetch(url, requestObj)
        
        if (response.ok){
            const respEvent = await response.json()
            alert("Product created successfully with an id of " + respEvent._id)
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