<script>
	import { user } from '../stores/user';
	import { userObject } from '../stores/user';
	import { userArray } from '../stores/user';
</script>

<h1>Home</h1>
<h2>{JSON.stringify($user)}</h2>
<input type="text" bind:value={$user} />
<h2>{JSON.stringify($userObject)}</h2>
<h2>{JSON.stringify($userArray)}</h2>
