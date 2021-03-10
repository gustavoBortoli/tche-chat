<template>
  	<v-container class="navigation-container">
		<v-list-item class="list-header">
			<v-list-item-avatar>
				<v-icon class="grey lighten-1" dark> mdi-account </v-icon>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title>Gustavineo</v-list-item-title>
			</v-list-item-content>
		</v-list-item>

		<v-divider />
		<v-list two-line style="padding: 0">
			<v-list-item-group v-model="selected" active-class="blue--text">
				<template v-for="(contact, i) in contacts">
					<v-list-item :key="i">
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{ contact.name }}</v-list-item-title>
							<v-list-item-subtitle>{{ contact.status }}</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-divider v-if="i < 3" :key="i"/>
				</template>
			</v-list-item-group>
		</v-list>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			selected: 0,
            contacts: [
                {
                    name: "Contato 1",
                    status: "Status contato 1"
                },
                {
                    name: "Contato 2",
                    status: "Status contato 2"
                },
                {
                    name: "Contato 2",
                    status: "Status contato 2"
                },
            ]
		}
	}
};
</script>

<style>
.navigation-container {
  width: 100%;
  height: 80vh;
  padding: 0 !important;
}
.list-header {
  padding: 10px !important;
  background-color: #f0f0f0;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent; 
}
::-webkit-scrollbar-thumb {
  background: #888; 
}
::-webkit-scrollbar-thumb:hover {
  background: #666; 
}
</style>