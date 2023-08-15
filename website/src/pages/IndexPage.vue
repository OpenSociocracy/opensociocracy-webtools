<template>
  <q-page class="flex flex-center">
    <div class="row justify-center text-center text-h2 full-width">
      Free and open source tools for sociocracy.
    </div>
    <div class="row full-width" style="max-width: 1200px">
      <div :class="Screen.gt.sm ? ' q-pa-md col-4 ' : ' q-pa-md col-12 '">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h5">Circles</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <p class="text-body1">
              Circles define the groups in an organization. Circles allow you to
              visualize the connections and flow of authority in your
              organization in different ways. These four sociocratic roles are
              available: leader, delegate, facilitator and record keeper.
            </p>
            <p class="text-body1">
              You can download your data when you are done, and upload it later to
              edit.
            </p>
          </q-card-section>
          <q-card-actions class="justify-center text-center q-pb-lg">
            <q-btn label="Circles" to="/circles" color="primary"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div :class="Screen.gt.sm ? ' q-pa-md col-4 ' : ' q-pa-md col-12 '">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h5">Canvas</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <p class="text-body1">
              Business canvas are useful when planning, and coming to consensus
              on the key aspects of the business. These canvas were originally
              created by the
              <a href="https://sociocracy30.org/">Sociocracy 3.0</a> group,
              we've web-enabled them.
            </p>
            <p class="text-body1">
              You can download your data when you are done, and upload it later to
              edit.
            </p>
          </q-card-section>
          <q-card-actions class="justify-center text-center q-pb-lg">
            <q-btn label="Canvas" to="/canvas" color="primary"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div :class="Screen.gt.sm ? ' q-pa-md col-4 ' : ' q-pa-md col-12 '">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h5">Handbook</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <p class="text-body1">
              We are creating a handbook to help organizations kickoff sociocratic efforts. It will help you understand the tools, when to apply them and how to maximixe acceptance in a new organization.
            </p>
            <p class="text-body1">
              The handbook is available as an <a href="https://github.com/OpenSociocracy/documentation-website">open source repository</a> if you would like to contribute or customize.
            </p>
          </q-card-section>
          <q-card-actions class="justify-center text-center q-pb-lg">
            <q-btn
              label="Handbook"
              href="https://handbook.opensociocracy.org"
              color="primary"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div
      v-if="Screen.gt.sm"
      class="row justify-center text-center text-h3 full-width"
    >
      An open approach to sociocracy
    </div>
  </q-page>
</template>

<script setup>
import { Screen } from "quasar";
</script>
