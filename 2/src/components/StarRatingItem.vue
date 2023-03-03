<template>
    <div :class="['rating__item', getStatus]">★</div>
</template>

<script>
export default {
    name: "StarRatingItem",
    computed: {
        getStatus() {
            return {
                'rating__item--not_marked': !this.isMarked,
                'rating__item--marked': this.isMarked
            }
        }
    },
    data() {
        return {
            isMarked: false
        }
    }
}
</script>

<style scoped>
.rating__item {
    font-size: 100px;
    cursor: pointer;
    transition: .2s;
}

.rating__item--not_marked {
    color: #dcdcdc;
}

.rating__item--marked {
    color: orange;
}
</style>