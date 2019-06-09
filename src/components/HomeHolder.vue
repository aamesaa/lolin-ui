<template>
  <div class="container-fluid">

    <div class="row home">
      <div class="col-md-2"><br/><br/>
        <ul>
          <li class="left-sidebar">On Going</li>
          <li class="left-sidebar">History</li>
        </ul>
      </div>
      <div class="col-md-9">
        <router-link to="/sell" class="btn btn-success pull-right">Sell Now</router-link>
        <br/> <br/>
        <div class="container-fluid">
          <div class="row">
            <div class="row-item row" v-for="item in listItem">
              <div class="col-md-1">

                <img src="../../static/img/book.png" class="img-responsive" ></div>
              <div class="col-md-9">
                <p class="row-item-s">{{item.idItem}}</p>
                <p class="row-item-s">{{item.jnsBarang}}</p>
                <p class="row-item-s">{{item.qty}}</p>
                <p class="row-item-s">{{item.jnsPengiriman}}</p>
              </div>
              <div class="col-md-1">
                <p class="pull-right">See Bid Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return {
        listItem: [
          {
            idItem: '111',
            jnsBarang: 'Koran',
            qty: '1',
            jnsPengiriman: 'a',
            hargaPengiriman: 'adad'
          },
          {
            idItem: '112',
            jnsBarang: 'Sampah',
            qty: '1',
            jnsPengiriman: 'a',
            hargaPengiriman: 'adad'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .row-item {
    text-align: left;
   // background-color: red;
    border-bottom: 1px solid black;
    margin-bottom:25px;
    &:hover{
      cursor: pointer;
    }
    &-s {
      margin: 0;
      padding: 0;
      line-height: 1.25;
    }
  }

  .home {
    margin-top: 65px;
  }

  .left-sidebar {
    border-bottom: 2px solid green;
    box-shadow: black;
    padding: 5px;
    text-align: left;
    &:hover {
      cursor: pointer;
      background-color: seagreen;
      border-radius: 5px;
    }
  }
</style>
