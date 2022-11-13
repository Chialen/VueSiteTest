<template>
    <v-footer dark padless>
      <v-card flat tile width="100%" class="primary text-center">
        <v-card-text>
          <v-btn v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            :href="icon.iconlink"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon.iconname }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </template>

<script>
export default {
  data: () => ({
    icons: [
        {
            iconname: 'mdi-facebook',
            iconlink: 'https://www.facebook.com/',
        },
        {
            iconname: 'mdi-twitter',
            iconlink: 'https://twitter.com',
        },
        {
            iconname:'mdi-linkedin',
            iconlink: 'https://www.linkedin.com',
        },
        {
            iconname: 'mdi-instagram',
            iconlink: 'https://www.instagram.com'
        },
    ],
  }),
};
</script>