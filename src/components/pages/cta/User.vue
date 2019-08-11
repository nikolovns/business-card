<template>
    <div class="user-container row">
        <div class="page-title col-md-12">
            <h1>User profile</h1>
        </div>
        <div class="col-md-12">
            <ul class="nav nav-tabs">
                <li 
                    class="nav-item"
                    v-for="(category, index) in categories"
                    :key="index"
                    @click="selectedCategory = category"
                    >
                    <a :class="{ 'active': selectedCategory == category }" class="nav-link">{{ category }}</a>
                </li>
            </ul>
            <div class="tab-content">
                <template v-if="showSelectedTab('Details')">
                    <div id="details">
                        <app-details>
                            <h1 slot="details-title">User Details</h1>
                            <div slot="personal-data" class="col-sm-12 col-md-6 columns">
                                <h2>Double click to change your data</h2>
                                <p>Personal Data</p>
                                
                                <div>
                                    <label for="">User name</label>
                                    <input type="text" v-model="userData[0].name" />
                                </div>

                                <div>
                                    <label for="">E-mail</label>
                                    <input type="text" v-model="userData[0].email" />
                                </div>

                                <div>
                                    <label for="">Web page</label>
                                    <input type="text" v-model="userData[0].web" />
                                </div>
                            </div>
                            <div slot="delivery-data" class="col-sm-12 col-md-6 columns">
                                <h2>Fill the data if you want to order some of your products</h2>
                                <p>Delivery address</p>
                                <div>
                                    <label for="">Phone number</label>
                                    <input type="text" v-model="userData[0].phone" />
                                </div>

                                <div>
                                    <label for="">Delivery address</label>
                                    <input type="text" v-model="userData[0].address" />
                                </div>
                            </div>
                            <div slot="submit-details" class="col-md-12 columns">
                                <button class="btn btn-primary" type="submit">Save</button>
                            </div>
                        </app-details>
                    </div>
                </template>

                <template v-if="showSelectedTab('Products')">
                    <div id="products">
                        <app-products>
                            <div slot="user-products" class="business col-md-12 columns">
                                <h2>Business Cards</h2>
                                <div v-for="product in userProducts" :key="product.id">
                                    <!-- <div v-if="product.type == 1"> -->
                                        <p>{{product.image}}</p>
                                    <!-- </div> -->
                                </div>
                            </div>
                            <div slot="submit-order" class="col-md-12 columns">
                                <input class="btn btn-primary" type="submit" value="Make Order">
                            </div>
                        </app-products>
                    </div>
                </template>

                <template v-if="showSelectedTab('Cart')">
                    <div id="cart">
                        <app-shopping-cart>
                            <h2>Cart</h2>
                            <!-- <div slot="cart" class="business col-md-12 columns">
                                <h2>Business Cards</h2>
                                <div v-for="product in userProducts" :key="product.id">
                                    <!-- <div v-if="product.type == 1"> -->
                                        <!-- <p>{{product.image}}</p> -->
                                    <!-- </div> -->
                                <!-- </div>
                            </div> -->
                            <!-- <div slot="submit-order" class="col-md-12 columns">
                                <input class="btn btn-primary" type="submit" value="Make Order">
                            </div> -->
                        </app-shopping-cart>
                    </div>
                </template>

                <template v-if="showSelectedTab('Orders')">
                    <app-orders>
                        <h2 slot="orders-title">Orders</h2>
                        <div slot="orders" class="col-sm-12 col-md-6 columns" v-for="order in userOrders" :key="order.id">
                            <p><span>Order number: </span>{{order.id}}</p>
                            <p><span>Product name: </span>{{order.productName}}</p>
                            <p><span>Your name: </span>{{order.userName}}</p>
                            <p><span>Phone number: </span>{{order.phone}}</p>
                            <p><span>Delivery address: </span>{{order.address}}</p>
                            <p><span>Order quantity: </span>{{order.quantity}}</p>
                        </div>
                    </app-orders>
                </template>

            </div>
        </div>
        
    </div>
</template>

<script>
// import UserLogin from './UserLogin'
// import UserRegister from './UserRegister'
import ShoppingCart from '../../commerce/ShoppingCard'
import UserDetails from './UserDetails'
import Orders from '../../commerce/Orders'
import UserProducts from './UserProducts'

export default {
    data() {
        return {
            selectedCategory: 'Details',
            categories: ['Details', 'Products', 'Orders', 'Cart'],
            userData: [
                {'name': 'John Doe', 'email': 'john@mail.com', 'web': 'the-best.com', 'phone': '8888 888 888', 'address': "John's city" },
            ],
            userProducts: [
                {"id":"1", 
                "type":"1", 
                "name":"John Doe", 
                "position":"Mnager", 
                "company":"John's Company", 
                "phone":"0888 888 888", 
                "address":"John's street", 
                "email":"john@gmail.com", 
                "web":"www.the-best.com",
                "logo":"logo",
                "background":"#ccc",
                "image":"image"
                },
                {"id":"3", 
                "type":"1", 
                "name":"John Doe", 
                "position":"Mnager", 
                "company":"John's Company", 
                "phone":"0888 888 888", 
                "address":"John's street", 
                "email":"john@gmail.com", 
                "web":"www.the-best.com",
                "logo":"logo",
                "background":"#ccc",
                "image":"image 2"
                },
                {"id":"2", 
                "type":"2", 
                "name":"John Doe", 
                "position":"Mnager", 
                "company":"John's Company", 
                "phone":"0888 888 888", 
                "address":"John's street", 
                "email":"john@gmail.com", 
                "web":"www.the-best.com",
                "logo":"logo 2",
                "background":"#ddd",
                "image":"image 2"
                }
            ],
            userOrders: [
                {"userId": "1",
                "id":"1",
                "productId":"1",
                "productName":"Name 1",
                "image": "Image 1",
                "userName": "John Doe",
                "phone":"0888 888 888",
                "address":"Jhon's street",
                'quantity': 100
                },
                {"userId": "1",
                "id":"2",
                "productId":"3",
                "productName":"Name 3",
                "image": "Image 3",
                "userName": "John Doe",
                "phone":"0888 888 888",
                "address":"Jhon's street",
                'quantity': 500
                }
            ]
        }
    },
    methods: {
        showSelectedTab(category) {
            // this.$router.replace({ name: "user-view", params: {id:"123"}, query: {q1: "q1"} })
            return this.selectedCategory == category;
        }
    },
    components: {
        'app-details': UserDetails,
        'app-products': UserProducts,
        'app-orders': Orders,
        'app-shopping-cart': ShoppingCart
    }
}
</script>

