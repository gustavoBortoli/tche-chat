<template>
  	<v-container class="navigation-container">
		<div class="list-header">
			<v-list-item>
            <v-list-item-avatar>
                <v-icon class="grey lighten-1" dark>
                    mdi-account
                </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>Gustavineo</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
		</div>
		
		<v-divider />
		<div class="list-contact-wrapper">
            <div class="list-contact-content">
				<v-list two-line style="padding: 0; width: 100%">
					<v-list-item-group v-model="selected" active-class="blue--text" mandatory>
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
							<v-divider v-if="i < 3" :key="`div${i}`"/>
						</template>
					</v-list-item-group>
				</v-list>
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	computed: {
		selected: {
			get() {
				return this.$store.state.contactSelected
			},
			set(value) {
				this.$store.state.contactSelected = value
			}
		},
		contacts: {
			get() {
				return this.$store.state.contacts
			}
		}
	}
};
</script>

<style>
.navigation-container {
	display: flex;
    flex-direction: column;
    height: 90vh;
	width: 100%;
	padding: 0 !important;
	height: 90vh;
}
.list-header {
    font-size: 1.5em;
    font-weight: 500;
	padding: 10px !important;
	background-color: #f0f0f0;
}

.list-contact-wrapper {
    flex: 1;
    position: relative;
}

.list-contact-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    display: flex;
	align-items: flex-start;
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