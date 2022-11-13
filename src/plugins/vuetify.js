import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light: {
                primary: colors.teal,
                secondary:colors.teal.lighten4,
                accent: colors.cyan,
                warn: colors.pink.lighten3,
                info: colors.purple.lighten3,
            },
        },
    }
});
