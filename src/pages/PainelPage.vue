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
import { api } from "../boot/axios";

fetchData();
function fetchData() {
  api
    .get("alunos")
    .then((response) => {
      tableData.value = response.data;
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const tableData = ref([]);

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
</script>
