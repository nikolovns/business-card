<template>
    <div class="row">
        <form 
            class="row col-md-12 columns" action=""
            @submit="makeOrder"
        >
            <slot name="user-products"></slot>
            <slot name="submit-order"></slot>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        makeOrder() {
            this.$router.push('/1/shopping-cart');
        }
    }
}
</script>

<style>

</style>

