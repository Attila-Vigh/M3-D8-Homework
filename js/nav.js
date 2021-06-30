const nav = 
    `<ul class="nav nav-tabs m-5">
        <li class="nav-item">
            <a class="nav-link ${ pageLink === "Product List" ? "active" : '' }" href="index.html">Product List</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ${ pageLink === "Create Product" ? "active" : '' }" href="createProduct.html">Create Product</a>
        </li>
    </ul>

    <h1 class="text-center">M3-D8-Homework</h1>
    `
document.body.insertAdjacentHTML( "afterbegin", nav)