<template>
    <div>
        <table class="table table-responsive" id="table-cotacao-frete">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UF</th>
                    <th>Percentual Frete</th>
                    <th>Valor Taxa</th>
                    <th>Transportadora</th>
                </tr>
                
            </thead>

            <tbody>
                <tr v-for="cotacao in cotacoes_frete" :key="cotacao.id">
                    <td>{{ cotacao.id }}</td>
                    <td>{{ cotacao.uf }}</td>
                    <td>{{ cotacao.percentual_cotacao }}</td>
                    <td>{{ cotacao.valor_extra }}</td>
                    <td>{{ cotacao.transportadora_id }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'TableCotacoesFrete',
    props:['cotacoes_frete'],
}
</script>