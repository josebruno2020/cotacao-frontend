<template>
    <div class="card">
        <div class="card-header">
            <h1 class="card-title h3">Cotar Frete</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="cotarFrete" action="" class="form">

                <div class="form-group">
                    <label for="" class="label">UF</label>
                    <select required type="select" class="form-control" v-model="model.uf">
                        <option v-for="(uf, index) in ufs" :key="index" :value="uf">{{ uf }}</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="" class="label">Valor Pedido (R$)</label>
                    <input required type="text" name="" id="" class="form-control" v-model="model.valor_pedido">
                </div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Enviar">
                </div>  
            </form>
            <hr>
            <div v-if="result" >
                <h5>Melhores resultados:</h5>
                <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Transportadora</th>
                            <th>Valor Cotação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cotacao, index) in cotacoes" :key="index">
                            <td>{{ parseInt(index)+1  }}</td>
                            <td>{{ cotacao.transportadora_id }}</td>
                            <td>{{ cotacao.valor_cotacao }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
</template>

<script>
import apiRoutes from '../core/services/apiRoutes';
import http from '../core/services/http';
import CotarFrete from '../core/models/CotarFrete';
import uf from '../core/helpers/uf';
export default {
    name:'CotarFrete',
    data() {
        return {
            result:false,
            cotacoes:[],
            model: new CotarFrete(),
            ufs:uf,
        }
    },
    methods: {
        cotarFrete() {
            console.log("MODEL: "+this.model);
            http.put(apiRoutes.cotacao, this.model).then((res) => {
                this.result = true;
                this.cotacoes = res.data;
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

}
</script>

<style scoped>

</style>