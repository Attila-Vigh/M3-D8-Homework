displayProductTable = (productList) => {
    const container = document.querySelector(".product-list-table tbody")

    const table = productList.map(
        ({ _id, name, description, brand, imageUrl, price, userId, createdAt, updatedAt, }) => `
            <tr>
                <th scope="row">${ _id          }</th>
                <td>            ${ name         }</td>
                <td>            ${ description  }</td>
                <td>            ${ brand        }</td>
                <td>   <img src=${ imageUrl     }></td>
                <td>            ${ price        }</td>
                <td>            ${ userId       }</td>
                <td>            ${ createdAt    }</td>
                <td>            ${ updatedAt    }</td>
            </tr>`

    ).join("")

    container.innerHTML = table
}

const getProductList = async (displayProductTable ) => {
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    const requestObj = {
        method: "GET",
        headers: {
            "Authorization": AUTHORIZATION_PRODUCTS,
            "Content-Type": "application/json",
        }
    }

    try
    {
        const response = await fetch(url, requestObj)

        if (response.ok)
        {
            const productList = await response.json()
            displayProductTable(productList)
        }
        else
        {
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
    finally
    {
        console.log("index.js, I am the forever curse! You will never get rid of me!")
    }
}

window.onload = () => {

    getProductList( displayProductTable )
}

