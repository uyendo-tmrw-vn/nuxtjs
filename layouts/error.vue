<template>
	<div>
		<h1 class="text-3xl uppercase" v-if="error.statusCode === 404">Page not found</h1>
		<h1 v-else>An error occurred</h1>
	</div>
</template>

<script>
export default {
	props: ['error'],
	layout: 'error' // you can set a custom layout for the error page //use "default" layouts
}
</script>