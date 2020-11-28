<script>
  import History from "../routes/History.svelte";
  import Home from "../routes/Home.svelte";

  const routes = {
    "/": Home,
    "/history": History
  }
  
  $: routePath = window.location.pathname;
  $: routeComponent = routes[routePath];
</script>

<svelte:component this={routeComponent} />