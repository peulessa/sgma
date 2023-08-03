<template>
  <q-page padding>
    <Tabela
      :tableData="tableData"
      :columns="columns"
      route="/modulos"
      iconName="visibility"
      parametroDelete="name"
    />
    <div class="flex justify-center">
      <q-btn to="/adicionar-aluno">Adicionar Aluno</q-btn>
    </div>
  </q-page>
</template>

<script setup>
import Tabela from "components/Tabela.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';

fetchData();
function fetchData() {
      axios.get('http://10.4.22.30:3000/alunos')
        .then(response => {
          // O servidor respondeu com sucesso
          console.log(response.data);
        })
        .catch(error => {
          // Ocorreu um erro ao fazer a requisição
          console.error(error);
        });
      }

const router = useRouter();

const columns = ref([
  {
    name: "name",
    required: true,
    label: "Aluno",
    align: "left",
    field: "name",
  },
  {
    name: "media",
    align: "center",
    label: "Média Geral",
    field: "media",
    sortable: true,
  },
  {
    name: "cpf",
    align: "center",
    label: "CPF",
    field: "cpf",
    sortable: true,
  },
  {
    name: "actions",
    label: "Módulos",
    field: "actions",
    align: "center",
  },
  {
    name: "delete",
    label: "Deletar Aluno",
    field: "delete",
    align: "center",
  },
]);

const tableData = ref([
  { id: 0 , name: "Fabinho Popó", media: 6, cpf: "000.000.000-00" },
  { id: 1 , name: "Jack Wick", media: 6, cpf: "000.000.000-00" },
  { id: 2 , name: "Samba da Polly", media: 6, cpf: "000.000.000-00" },
  { id: 3 , name: "Luiz Molejo", media: 6, cpf: "000.000.000-00" },
  { id: 4 , name: "Matheuzão", media: 6, cpf: "000.000.000-00" },
  { id: 5 , name: "Pedrinho Gogó", media: 6, cpf: "000.000.000-00" },
]);
</script>
