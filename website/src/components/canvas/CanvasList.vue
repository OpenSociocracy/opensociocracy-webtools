<template>
  <div>
    <div class="row q-pa-lg justify-center">
      <div class="col-12 q-pa-md">
        <q-card class="q-pa-md">
          <q-card-section>
            <p class="text-h5"><a href="https://sociocracy30.org/">Sociocracy 3.0</a> Canvases</p>
            <ul>
              <li><p class="text-h6">{{ $t("canvas.features.download") }}</p></li>
              <li><p class="text-h6">{{ $t("canvas.features.upload") }}</p></li>
              <li><p class="text-h6">Inspired by the <a href="https://s3canvas.sociocracy30.org/index.html">S3 Canvas series</a></p></li>
            </ul>
          </q-card-section>
        </q-card>
      </div>

      <!-- S3 Organization Card -->
      <div class="col-6 q-pa-md">
        <q-card class="q-pa-md">
          <q-card-section>
            <p class="text-h6">{{ $t("canvas.s3.organization.description") }}</p>
            <span class="text-italic text-orange q-pl-md"
              ><q-icon name="mdi-star" color="orange" />{{
                $t("canvas.active")
              }}</span
            >
          </q-card-section>
          <q-card-actions class="justify-center">
            <q-btn
              :to="{ name: toRoute, params: { canvasName: 's3organization' } }"
              color="primary"
              >{{ $t("canvas.s3.organization.name") }}</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <!-- S3 Delegation Card -->
      <div class="col-6 q-pa-md">
        <q-card class="q-pa-md">
          <q-card-section>
            <p class="text-h6">{{ $t("canvas.s3.delegation.description") }}</p>
            <span class="text-italic text-orange q-pl-md"
              ><q-icon name="mdi-star" color="orange" />{{
                $t("canvas.active")
              }}</span
            >
          </q-card-section>
          <q-card-actions class="justify-center">
            <q-btn
              :to="{ name: toRoute, params: { canvasName: 's3delegation' } }"
              color="primary"
              >{{ $t("canvas.s3.delegation.name") }}</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <!-- S3 Team Card -->
      <div class="col-6 q-pa-md">
        <q-card class="q-pa-md">
          <q-card-section>
            <p class="text-h6">{{ $t("canvas.s3.team.description") }}</p>
          </q-card-section>
          <q-card-actions class="justify-center">
            <q-btn
              :to="{ name: toRoute, params: { canvasName: 's3team' } }"
              color="primary"
              >{{ $t("canvas.s3.team.name") }}</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const orgUid = route.params.orgUid;

const toRoute = ref("canvasPage");

if (orgUid) {
  toRoute.value = "orgCanvasPage";
}
</script>
