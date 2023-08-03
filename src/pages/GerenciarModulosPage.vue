<template>
<Tabela :tableData="tableData"
        :columns="columns"
        iconName="edit"/>
</template>

<script setup>
import Tabela from 'components/Tabela.vue';
import { ref } from "vue";

const columns = ref([
  {
    name: "materia",
    required: true,
    label: "Matéria",
    align: "left",
    field: "materia",
  },
  {
    name: "nota",
    align: "center",
    label: "Nota",
    field: "nota",
    sortable: true,
  },
  {
    name: "actions",
    label: "Editar Nota",
    field: "actions",
    align: "center",
  },
]);

const tableData = ref([
  { id: 0 , materia: "Fabinho Popó", nota: 6, cpf: "000.000.000-00" },
  { id: 1 , materia: "Jack Wick", nota: 6, cpf: "000.000.000-00" },
  { id: 2 , materia: "Samba da Polly", nota: 6, cpf: "000.000.000-00" },
  { id: 3 , materia: "Luiz Molejo", nota: 6, cpf: "000.000.000-00" },
  { id: 4 , materia: "Matheuzão", nota: 6, cpf: "000.000.000-00" },
  { id: 5 , materia: "Pedrinho Gogó", nota: 6, cpf: "000.000.000-00" },
]);

</script>
