<template>
    <div class="row">
        <div class="page-title col-md-12 columns">
            <slot name="orders-title"></slot>
        </div>
        <div class="row col-md-12 columns">
            <slot name="orders"></slot>
        </div>
    </div>
</template>

<script>
export default {
    // props: {
    //     userOrders: {
    //         type: Array
    //     }
    // }
    
}
</script>