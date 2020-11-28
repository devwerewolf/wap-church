<script>
  import { Collection } from "sveltefire";
import Purchase from "../components/Purchase.svelte";
</script>

<Collection path="purchases" let:data={purchases}>
  {#each purchases as purchase}
    <Purchase {purchase}/>
  {/each}
</Collection>