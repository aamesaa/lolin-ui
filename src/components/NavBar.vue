<template>
  <nav class="navbar-default nav-home" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#home">Lolin</a>
      </div>

      <div class="collapse navbar-collapse navbar-right navbar-ex1-collapse">
        <ul class="nav navbar-nav">

          <li class="menuItem"><a href="/index#whatis">What is?</a></li>
          <li class="menuItem"><a href="#useit">Use It</a></li>
          <li class="menuItem"><a href="#screen">Screenshot</a></li>
          <li class="menuItem"><a href="#credits">Credits</a></li>
          <li class="menuItem"><a href="#contact">Contact</a></li>
          <li class="menuItem"><a href="#"  data-toggle="modal" data-target="#myModal">Contact</a></li>
        </ul>
      </div>

    </div>
    <!-- Trigger the modal with a button -->
    <!-- Modal -->

  </nav>
</template>
<style lang="scss">
  .nav-home{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .navbar-brand{
    font-family: 'Fredoka One', cursive !important;
    font-size: 28px !important;
  }
  .menuItem{
    font-size:14px !important;
  }
</style>
