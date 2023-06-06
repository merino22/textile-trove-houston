<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
    <Box v-for="listing in listings" :key="listing.id">
      <div>
        <Link :href="route('listing.show', {listing: listing.id})">
          <Price :price="listing.price" class="text-2xl font-bold" />
          <ListingSpace :listing="listing" class="text-lg" />
          <ListingAddress :listing="listing" class="text-gray-500" />
        </Link>
      </div>
      <div>
        <Link :href="route('listing.edit', {listing: listing.id})">EDIT</Link>
        <div>
          <Link :href="route('listing.destroy', {listing: listing.id})" method="DELETE" as="button">DELETE</Link>
        </div>
      </div>
    </Box>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
import ListingSpace from '@/Components/ListingSpace.vue'
import Price from '@/Components/Price.vue'
import Box from '@/Components/UI/Box.vue'

defineProps({
  listings: Array,
})
</script>
