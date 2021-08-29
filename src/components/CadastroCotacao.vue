<template>
    <div class="card">
        <div class="card-header">
            <h1 class="card-title h3">Cadastro Cotação Frete</h1>
        </div>
        <div class="card-body">
            <div :class="`alert alert-${alertType}`" v-if="alertMessage">{{ alertMessage }}</div>
            <form @submit.prevent="cadastrarCotacao" action="" class="form">
                <div class="form-group">
                    <label for="" class="label">Transportadora</label>
                    <select required type="select" class="form-control" v-model="model.transportadora_id">
                        <option v-for="transportadora in transportadoras" :key="transportadora.id" :value="transportadora.id">{{ transportadora.nome }}</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="" class="label">UF</label>
                    <select required type="select" class="form-control" v-model="model.uf">
                        <option v-for="(uf, index) in ufs" :key="index" :value="uf">{{ uf }}</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="" class="label">Porcentagem Cotação (%)</label>
                    <input required type="text" name="" id="" class="form-control" v-model="model.percentual_cotacao">
                </div>

                <div class="form-group">
                    <label for="" class="label">Valor Extra (R$)</label>
                    <input required type="text" name="" id="" class="form-control" v-model="model.valor_extra">
                </div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Enviar">
                </div>
            </form>
        </div>
            
    </div>
</template>

<script>
import http from '../core/services/http';
import apiRoutes from '../core/services/apiRoutes';
import CotacaoFrete from '../core/models/CotacaoFrete';
import uf from '../core/helpers/uf';
export default {
    name:'CadastroCotacao',
    data() {
        return {
            transportadoras:[],
            model: new CotacaoFrete(),
            ufs: uf,
            alertType:'success',
            alertMessage:'',
        }
    },
    mounted() {
        this.getTransportadoras();
    },
    methods: {
        getTransportadoras() {
            http.get(apiRoutes.transportadora).then(res => {
                this.transportadoras = res.data;
            })
            .catch(error =>{
                console.log(error);
            })
        },
        cadastrarCotacao() {
            console.log(this.model);
            http.post(apiRoutes.cotacao, this.model).then(res => {
                this.model = new CotacaoFrete();
                this.alertType = 'success';
                this.alertMessage = 'Cotação Salva com sucesso!';

                setTimeout(() => {
                    this.alertMessage = '';
                }, 2000)

                this.$emit('submitCotacao', res.data);
                console.log(res.data);
            })
            .catch(() => {
                this.alertType = 'danger';
                this.alertMessage = 'A transportadora já possui uma cotação para esse UF';

                setTimeout(() => {
                    this.alertMessage = '';
                }, 2000)
            })


     
        }
    }
}
</script>

<style >
.card {
    width: 45%;
}
.form-group {
    margin-top: 10px;
}
</style>