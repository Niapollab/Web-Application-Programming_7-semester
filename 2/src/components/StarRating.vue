<template>
    <div class="rating">
        <StarRatingItem v-for="i in starsCount" :key="i" :id="starsCount - i + 1" ref="items" @click="itemClicked">
        </StarRatingItem>
    </div>
</template>

<script>
import StarRatingItem from './StarRatingItem.vue'

export default {
    name: "StarRating",
    props: {
        starsCount: {
            type: Number,
            default: 5
        }
    },
    emits: [
        "rating-changed"
    ],
    components: {
        StarRatingItem
    },
    methods: {
        itemClicked(event) {
            const stars = this.$refs.items;
            this.ratingValue = event.target.id;

            stars.forEach(
                element => element.isMarked = element.$attrs.id <= this.ratingValue
            );

            this.$emit("rating-changed", this);
        }
    },
    data() {
        return {
            ratingValue: 0
        }
    }
}
</script>

<style scoped>
.rating {
    display: inline-flex;
    flex-direction: row-reverse;
}

.rating__item--not_marked:hover,
.rating__item--not_marked:hover~.rating__item--not_marked {
    color: #989898;
}
</style>