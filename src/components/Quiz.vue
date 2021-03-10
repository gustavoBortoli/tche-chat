<template>
  <v-card
    class="mx-auto mt-5"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Blabla</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
        <div>Questão 1</div>
        <p class="display-1 text--secondary">
            Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        </p>
        </v-card-text>
        <v-divider/>
        <v-container class="fdc">
            <v-radio-group v-model="radioGroup">
                <v-radio
                    v-for="n in questao"
                    :key="n"
                    :label="`${n}`"
                    :value="n"
                ></v-radio>
            </v-radio-group>
        </v-container>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
    data() {
        return {
            questao: ["Alternativa 1", "Alternativa 2", "Alternativa 3", "Alternativa 4"]
        }
    }
}
</script>

<style scoped>
    .fdc {
        margin: 15px 0;
    }
</style>
