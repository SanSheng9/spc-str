<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',
        props: {
            show: {
                type: Boolean,
                defalut: false
            }
        },
        methods: {
            hideDialog() {
                $emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
.dialog{
    top: 0;bottom: 0;right: 0;left: 0;
    background: rgba(0, 0, 0, 0.555);
    position: fixed;
    display: flex;
    z-index: 10;
}
.dialog__content{
    margin: auto;
    background: black;
    border: 1px solid grey;
    min-height: 10em;
    min-width: 10em;
    padding: 20px;
}
</style>