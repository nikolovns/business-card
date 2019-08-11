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
    // props: {
    //     userProducts: {
    //         type: Array,
    //         require: true
    //     }
    // },
    methods: {
        makeOrder() {
            this.$router.push('/shopping-card');
        }
    }
}
</script>

<style>

</style>

