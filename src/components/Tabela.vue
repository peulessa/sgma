<template>
  <div>
    <q-table :rows="tableData" :columns="columns" style="margin: 1.5em">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-icon
            :name="iconName"
            v-on:click="editRow(props.name)"
            style="cursor: pointer"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <q-icon
            name="delete"
            v-on:click="confirmDelete(props.row.id)"
            style="cursor: pointer; color: red"
          />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  tableData: {
    typeof: [],
  },
  columns: {
    typeof: [],
  },
  route: {
    typeof: [],
  },
  iconName: {
    typeof: String,
  },
  parametroDelete: {
    typeof: String,
  }
});

function editRow() {
  router.push(props.route);
}

function confirmDelete(row) {
  
  if(props.tableData.length > 1){
    props.tableData.splice(row, 1)
  }else{
    props.tableData.splice(0, 1)
  }
  
}
</script>
