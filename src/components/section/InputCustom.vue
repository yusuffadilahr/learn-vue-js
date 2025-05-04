<template>
    <div class="space-y-2">
      <label :for="name">
        {{ caption }} <span class="text-red-500">*</span>
      </label>
      <input
        :type="type"
        :id="name"
        :name="name"
        class="border px-4 rounded-lg w-full py-2"
        v-bind="$attrs" 
        v-model="modelValue"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    caption: string
    type: string
    name: string
  }>()
  
  defineOptions({
    inheritAttrs: false
  })
  
  const modelValue = defineModel<string>()
  </script>
  