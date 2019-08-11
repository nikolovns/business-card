<template>
    <div class="row">
        <div class="page-title col-md-12 columns">
            <h2>Choose business card type</h2>
        </div>

        <div class="col-md-3 columns left-sidebar">
            <select name="" id=""
                v-model="selectedType"
            >
                <option :value="type"
                    v-for="(type, index) in productTypes"
                    :key="index"
                >
                    {{ type | upper-case }}
                </option>
            </select>
        </div>

        <div class="col-md-9 columns row right-sidebar">
            <div class="row">

                <div v-for="product in filterProductObj" 
                    :key="product.id"
                    class="col-md-4 columns product-grid"
                >
                    <router-link :to="'/products/' + prityUrl(product.type) + '/' + product.id">
                        <img :src="product.imgPath" alt="">
                        <div class="cart-content">
                            <p>Name</p>
                            <p>Job Title</p>
                            <p>Company</p>
                            <p>Web</p>
                            <p>E-mail</p>
                            <p>Phone number</p>
                            <p>Address</p>
                        </div>
                    </router-link>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {id: '1', imgPath: '../../src/assets/images/bc1.png', type: 'business'},
                {id: '2', imgPath: '../../src/assets/images/bc2.png', type: 'business'},
                {id: '3', imgPath: '../../src/assets/images/bc3.png', type: 'low'},
                {id: '4', imgPath: '../../src/assets/images/bc4.png', type: 'fun and game'},
                {id: '5', imgPath: '../../src/assets/images/bc5.png', type: 'fun and game'},
            ],
            selectedType: 'all',
            productTypes: ['all']
        }
    },
    methods: {
        prityUrl(url) {
            return url.split(' ').join('-')
        }
    },
    computed: {
        filterProductObj() {
            if (this.selectedType.length < 1 || this.selectedType == 'all') {
                return this.products
            }

            return this.products.filter((element)=>{
                return this.selectedType.includes(element.type)
            })
        }
    },
    created() {
        this.products.forEach(e => {
            if (this.productTypes.indexOf(e.type) === -1) {
                this.productTypes.push(e.type)
            }
        })
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
}
.product-grid {
    margin-bottom: 30px;
    position: relative;
}
.cart-content {
    position: absolute;
    top: 50%;
    left: 30px;
    font-size: 12px;
    transform: translateY(-50%);
}
.cart-content p {
    margin: 0;
    line-height: 1.3;
    color: #222;
}
</style>


