<style lang="scss">
  .navbar {
    a {
      color: #fff;
      font-weight: bold;
    }
  }
</style>

<nav class="navbar mt-3 mb-0 navbar-expand-lg navbar-light" style="background-color: var(--wap-blue);">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pets">Our Pets</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/cart">Your cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/checkout">Checkout</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
