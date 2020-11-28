<script>
  import { Collection } from "sveltefire";
  import Shoutout from "../components/Shoutout.svelte";
</script>

<Collection path="purchases" let:data={purchases}>
  {#each purchases as purchase}
    <Shoutout {purchase}/>
  {/each}
</Collection>