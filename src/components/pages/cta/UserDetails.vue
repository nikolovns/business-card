<template>
    <div class="row">
        <form class="row col-md-12 columns" action="" @submit.prevent="saveChanges">
            <slot name="personal-data"></slot>
            <slot name="delivery-data"></slot>
            <slot name="submit-details"></slot>
        </form>
    </div>
    
</template>

<script>
export default {
    props: {
        userData: {
            type: Array,
            require: true
        }
    },
    methods: {
        showData() {
            console.log(this.userData)
        },
        saveChanges() {
            this.$router.push('/')
        }
    }
}
</script>

