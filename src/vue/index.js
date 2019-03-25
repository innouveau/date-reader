import Vue from 'vue';
import store from './store';
import app from './app';




new Vue({
    el: '#datereader',
    store,
    components: {
        app
    },
    template: '<app/>',
    beforeMount: function () {
        store.commit('init');

        for (let event of window.datereaderEvents) {
            store.commit('addEvent', event);
        }
    }
});