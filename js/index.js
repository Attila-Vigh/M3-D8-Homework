displayTable = (productList) => {
    const container = document.querySelector(".products")

    const table = `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">_id    </th>
                        <th scope="col">name</th>
                        <th scope="col">description   </th>
                        <th scope="col">brand </th>
                        <th scope="col">imageUrl </th>
                        <th scope="col">price   </th>
                        <th scope="col">userId </th>
                        <th scope="col">createdAt </th>
                        <th scope="col">updatedAt </th>
                    </tr>
                </thead>
                <tbody>
                    ${ productList.map(({ _id, name, description, brand, imageUrl, price, userId, createdAt, updatedAt, }) =>

        `<tr>
                                <th scope="row">${ _id }</th>
                                <td>            ${ name }</td>
                                <td>            ${ description }</td>
                                <td>            ${ brand }</td>
                                <td>            ${ imageUrl }</td>
                                <td>            ${ price }</td>
                                <td>            ${ userId }</td>
                                <td>            ${ createdAt }</td>
                                <td>            ${ updatedAt }</td>
                            </tr>`
    ).join("")
        }
                </tbody>
            </table>`
    container.innerHTML = table
}

window.onload = async () => {

    const url = "https://striveschool-api.herokuapp.com/api/product/"
    const requestObj = {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNTQ3M2IzNTgxNzAwMTVjMjI2ZjUiLCJpYXQiOjE2MjUwNTUzMzYsImV4cCI6MTYyNjI2NDkzNn0.dV6m_EkwKvI1_pBI4tVDG5FlQHL4OE0Diny1DGoXGO0",
            "Content-Type": "application/json",
        }
    }

    try
    {
        const response = await fetch(url, requestObj)

        if (response.ok)
        {
            const productList = await response.json()
            displayTable(productList)
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