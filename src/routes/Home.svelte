<script lang="ts">
  import { API_KEY } from "../env/pixabay";
  import Navigation from "../components/Navigation.svelte";

  async function getInitialAnimals() {
    const endpoint = `https://pixabay.com/api/?key=${API_KEY}&category=animals&orientation=horizontal&image_type=photo`
    
    const animalsResponse = await fetch(endpoint)
    const animalsData = await animalsResponse.json();
    return animalsData.hits as Array<any>;
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</svelte:head>

<style lang="scss">
  :global(html, body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --wap-blue: #3F88B1;
    --wap-darkblue: #102430;
    --wap-orange: #EF8C17;
    --wap-darkorange: #ad6813;
    --wap-white: #fff;
  }
  h1,h2,h3 {
    font-weight: bold;
    color: var(--wap-blue);
  }
  img {
    max-width: 100%;
  }
  .btn-wap {
    background: var(--wap-orange);
    color: var(--wap-white);
    font-weight: bold;
    padding: 6px 20px 8px;
    border-radius: 50px;
    &:hover {
      background: var(--wap-darkorange);
    }
  }
  .wap-site-header {
    background: var(--wap-blue);
    color: var(--wap-white);
    padding: 2em 2em 0;
  }
  .site-logo {
    background: #fff;
    width: 80px;
    text-align: center;
    height: 80px;
    border-radius: 100%;
  }
  .site-name {
    h1 {
      font-weight: bold;
      font-size: 32px;
      color: var(--wap-white);
    }
  }

  .welcome-hero {
    margin: 0 20px;
    &--bgimg {
      min-height: 600px;
      background: url(https://jasper.monster/sharex/Y74EHxw2YQ.png) center top no-repeat;
    }
    &--text {
      background: rgba(255,255,255,.8);
      margin-left: -20px;
      h2 {
        font-weight: bold;
        color: var(--wap-blue);
        font-size: 40px;
      }
      h3 {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: normal;
        color: var(--wap-blue);
      }
    }
  }
  
  @media (max-width: 768px) {
    .site-name {
      h1 {
        font-size: 24px;
      }
    }
  }

  // .pet {
  //   position: relative;
  //   &-image {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     z-index: 0;
  //   }
  //   &-text {
  //     position: absolute;
  //     z-index: 1;
      
  //     & .pet-title {
  //       color: var(--wap-blue);
  //     }
  //     & .pet-price {
  //       color: var(--wap-blue);
  //     }
  //   }
  // }

  
</style>

<header class="wap-site-header">
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-4 col-md-5 col-lg-2">
        <div class="site-logo d-flex justify-content-center align-items-center">
          <a href="/">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4042 21.5831C17.5626 21.5831 10.5177 32.3519 9.04637 38.1517C7.91151 42.6208 10.5177 46.2953 14.3899 46.2953C17.3611 46.2953 20.99 43.5598 23.4916 43.5142H23.5277C25.6644 43.5142 30.2114 46.1736 32.888 46.1736C36.6708 46.1736 38.8835 42.501 37.9159 38.1517C36.8229 33.2225 29.7362 21.5831 23.4042 21.5831V21.5831ZM3.99747 14.0706C3.27892 14.0706 2.64781 14.234 2.15356 14.5781C1.17648 15.2624 0.672729 16.6539 0.672729 18.3933C0.672729 20.1878 1.20689 22.351 2.30944 24.4915C3.75795 27.303 5.8813 29.1868 8.2955 29.1868C9.34101 29.1868 10.4436 28.8313 11.567 28.0463C14.7929 25.7955 14.4279 21.5222 11.4111 18.1348C9.13001 15.5723 6.17025 14.0706 3.99747 14.0706V14.0706ZM42.7329 12.9946C40.4423 12.9946 37.3019 15.1826 35.2641 18.5511C32.8594 22.5278 33.2929 26.9038 36.9636 28.5709C37.8931 28.991 38.7695 29.1868 39.5831 29.1868C42.4706 29.1868 44.5844 26.727 45.6262 23.2559C47.0347 18.5739 46.2915 12.9946 42.7329 12.9946V12.9946ZM31.4052 0.672729C28.9568 0.672729 25.8735 3.8492 24.52 8.15483C23.081 12.7266 24.5808 17.0037 28.6679 17.7774C35.7964 19.1232 36.0359 10.5728 36.0473 10.339C36.4104 3.51844 33.3309 0.672729 31.4052 0.672729V0.672729ZM13.276 0.672729C9.95122 0.672729 8.65287 5.97445 9.70409 10.972C10.5139 14.8157 12.6296 17.6139 15.8536 17.6139C16.5646 17.6139 17.3269 17.477 18.1424 17.1881C22.0602 15.7966 22.8852 11.3389 20.76 7.04278C18.8856 3.2504 15.6654 0.672729 13.276 0.672729V0.672729ZM23.4042 23.484C28.3105 23.484 34.9866 33.7263 36.0606 38.5642C36.686 41.3947 35.5797 45.073 31.7493 44.1225C29.7913 43.6416 25.6625 41.6133 23.4593 41.6133H23.4574C21.2048 41.6551 18.3743 43.2994 16.0494 44.0978C12.3768 45.3638 9.93601 42.3831 10.8903 38.6193C12.2989 33.059 19.0149 23.484 23.4042 23.484V23.484ZM9.99114 19.3989C11.3617 20.9386 12.0784 22.7255 11.9073 24.1778C11.6697 26.1928 9.56913 27.2859 8.2955 27.2859C6.76524 27.2859 5.20077 25.9514 3.99937 23.6209C2.00909 19.7525 2.44821 16.6919 3.2428 16.1369C3.54505 15.9259 6.46299 15.4392 9.99114 19.3989V19.3989ZM42.7329 14.8956L43.1416 14.9678C44.0598 15.3841 45.0958 18.4104 43.8031 22.7084C43.3925 24.0847 42.1512 27.2859 39.5831 27.2859C38.2581 27.2859 36.3952 26.5046 35.8515 24.7481C35.3972 23.2806 35.7755 21.3797 36.8913 19.5358C38.6497 16.6311 41.2407 14.8956 42.7329 14.8956V14.8956ZM31.4052 2.57367C31.8748 2.57367 34.4657 4.26931 34.1502 10.2383C33.962 13.7626 32.5401 16.5779 29.0214 15.9107C25.3507 15.213 25.6454 10.9131 26.3354 8.72511C27.5311 4.91373 30.0955 2.57367 31.4052 2.57367V2.57367ZM13.276 2.57367C14.791 2.57367 17.4333 4.60387 19.0548 7.88489C20.049 9.89419 20.2733 11.8978 19.6726 13.3824C18.9294 15.2111 16.9676 15.713 15.8536 15.713C12.9566 15.713 11.8902 12.124 11.5651 10.5804C10.6584 6.2729 11.8312 2.57367 13.276 2.57367Z" fill="#3F88B1"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="45.6226" height="45.6226" fill="white" transform="translate(0.672729 0.672729)"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div> <!-- end .site-logo -->
      </div>
      <div class="col-8 col-md-6 col-lg-5">
        <div class="site-name">
          <h1 class="mb-0">Werewolfdev's Amazing Pets</h1>
        </div>
      </div>
      <div class="col-12">

        <Navigation />
        
      </div>
    </div>
  </div>
</header>

<main>
  <div class="welcome-hero">
    <div class="container">
      <div class="row">
        <div class="col-md-12 welcome-hero--bgimg d-flex align-items-center">
          <div class="welcome-hero--text p-5">
            <h2>Do you want a pet sheep?</h2>
            <h3 class="mb-3">Have one delivered!</h3>
            <p><a href="/pets" class="btn btn-wap">View our pet collection &raquo;</a></p>
          </div>
        </div>
      </div>
    </div>
  </div> <!-- end .welcome-hero -->

  <div class="recent-pets">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5 mb-5">
          <h2>Recently added pets</h2>
        </div>
      </div>
      <div class="row">


        <!-- start loop here -->
        {#await getInitialAnimals()}
          Loading...
        {:then animals}
          {#each animals.slice(0, 3) as animal}
            <div class="col-md-4">
              <div class="pet">
                <div class="pet-image">
                  <img alt="Pet" src={animal.webformatURL}>
                </div>
                <div class="pet-text">
                  <div class="pet-title">Name Pet</div>
                  <div class="pet-price">$4</div>
                  <div class="pet-button"><a href="/pet/123" class="btn btn-wap">View &raquo;</a></div>
                  <!-- <div>{animal.description}</div> -->
                </div>
              </div> <!-- end .pet-->
            </div>
          {/each}
        {/await}

        

        <!-- end loop here -->

      </div>
    </div>
  </div> <!-- end .recent-pets -->

</main>
<footer class="wap-site-footer">

</footer>