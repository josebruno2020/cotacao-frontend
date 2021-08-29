<template>
  <main class="main-container mt-2">
      <section class="cadastro-container">
          <cadastro-cotacao @submitCotacao="preencherNovaCotacao"></cadastro-cotacao>
          <cotar-frete></cotar-frete>
      </section>
      <section class="table-cotacao-frete">
          <table-cotacoes-frete :cotacoes_frete="cotacoes_frete_paginate" ></table-cotacoes-frete>
          <b-pagination
            v-model="currentPage"
            :total-rows="total"
            :per-page="perPage"
            aria-controls="table-cotacao-frete"
          ></b-pagination>
      </section>
  </main>
</template>

<script>
import apiRoutes from '../src/core/services/apiRoutes';
import http from '../src/core/services/http';
import TableCotacoesFreteVue from './components/TableCotacoesFrete.vue';
import CadastroCotacao from './components/CadastroCotacao.vue';
import CotarFrete from './components/CotarFrete.vue';
export default {
  name: 'App',
  data() {
      return {
          cotacoes_frete:[],
          total:null,
          currentPage:1,
          perPage:5
      }
  },
  components: {
      'table-cotacoes-frete':TableCotacoesFreteVue,
      'cadastro-cotacao':CadastroCotacao,
      'cotar-frete':CotarFrete
  },
  mounted() {
      this.getCotacaoFretes();
  },
  methods: {
      getCotacaoFretes() {
          http.get(apiRoutes.cotacao).then(res => {
              this.cotacoes_frete = res.data;
              this.total = this.cotacoes_frete.length;
          })
          .catch(err => {
              console.log(err)
          })
      },
      preencherNovaCotacao(data) {
          this.cotacoes_frete.push(data);
      }
  },
  computed: {
      cotacoes_frete_paginate: function() {
        return this.cotacoes_frete.slice(
            (this.currentPage - 1) * this.perPage,
            this.currentPage * this.perPage,
        );
      }
  }
}
</script>

<style>
.main-container {
    width: 95vw;
    display:flex;
    flex-direction: column;
    align-items: center;
}

.cadastro-container {
    width: 80%;
    display:flex;
    justify-content: space-between;
}
.table-cotacao-frete {
    width:80%;
    margin-top:50px;
}
</style>
