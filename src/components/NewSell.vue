<template>
  <div class="container">
    <h3 class="sell-title">New Sell</h3>
    <router-link to="buy" class="pull-left">back</router-link>
    <br/>
    <div class="row">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="control-label col-sm-2" for="cat">Category:</label>
          <div class="col-sm-8">
            <select class="form-control" id="cat" v-model="selectedCat">
              <option v-for="opts in Object.keys(category)">{{opts}}</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Harga/kg:</label>
          <div class="col-sm-8">
            <input readonly class="form-control" id="pwd" :value="category[selectedCat].price">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Quntity:</label>
          <div class="col-sm-8">
            <input type="number" class="form-control" id="qty" v-model="qty" min="0">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Delivery Method:</label>
          <div class="col-sm-8">
            <label class="radio-inline pull-left"><input type="radio" name="optradio" value="pickup" v-model="delivery">Pick Up</label>
            <label class="radio-inline pull-left"><input type="radio" name="optradio" value="pickup" v-model="delivery">Deliver to Buyer</label>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Address:</label>
          <div class="col-sm-8">
            <textarea class="form-control" rows="3" id="comment"></textarea>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-1 col-sm-10">
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        category: {
          kertas: {name: 'kertas', price: 1500},
          koran: {name: 'koran', price: 2000},
          hvs: {name: 'hvs', price: 1000},
          semen: {name: 'semen', price: 5000},
          buku: {name: 'buku', price: 8000},
        },
        selectedCat: 'kertas',
        qty: 0,
        delivery: ''
      }
    },
    methods: {
      getCat: function () {

      }
    }
  }

</script>
<style lang="scss">
  .sell {
    &-title {
      text-align: left;
    }
  }

  .radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"] {
    margin-top: 12px;
  }
</style>
