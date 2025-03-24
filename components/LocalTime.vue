<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  utcTime: {
    type: String,
    required: true
  },
  format: {
    type: String,
    default: 'HH:mm' // Default time format
  }
})

const localTime = ref('')

onMounted(() => {
  // Convert UTC time string to local time
  try {
    const date = new Date(props.utcTime)
    
    // Format options based on the requested format
    if (props.format === 'HH:mm') {
      localTime.value = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
    } else if (props.format === '12h') {
      // 12-hour format with AM/PM
      localTime.value = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
    }
    else if (props.format === 'full') {
      localTime.value = date.toLocaleString()
    } else {
      localTime.value = date.toLocaleString()
    }
  } catch (e) {
    console.error('Error converting time:', e)
    localTime.value = props.utcTime // Fallback to original time
  }
})
</script>

<template>
  <span>{{ localTime }}</span>
</template>