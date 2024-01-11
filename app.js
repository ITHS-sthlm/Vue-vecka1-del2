/* Del2 */

const message = Vue.createApp({
    data() {
        return {
            message: 'Vue vecka 1 del 2'
        };
    }
});
message.mount('#message');

/* Part 1, events handler */
const handler = Vue.createApp({
    data() {
        return {
            counter: 2,
            name: ''
        };
    },
    methods: {
        add() {
            this.counter++;
        },
        reduce() {
            this.counter--;
        },
        setName(event) {
            this.name = event.target.value;
        }
    }
});
handler.mount('#handler');

/* Part 2 - Computed vs not Computed */
const computed = Vue.createApp({
    data() {
        return {
            counter: 2,
            firstName: ''
        };
    },
    methods: {
        add() {
            this.counter++;
        },
        reduce() {
            this.counter--;
        }
    },
    computed: {
        giveFullName() {
            console.log('funktionen är igång');
        }
    }
});
computed.mount('#computed');

/* Part 3 -Watch- check if there is any changes in a certain variable */
const watcher = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            fullName: ''
        };
    },
    watch: {
        firstName(value) {
            if (value === 'Richard') {
                this.fullName = value + ' ' + 'Carlssson';
            } else {
                this.fullName = value;
            }
        },
        lastName(value) {
            if (value !== '') {
                this.fullName = this.firstName + ' ' + value;
            } else if (value === '') {
                this.fullName = this.firstName + ' ' + 'Carlsson';
            }
        }
    }
});
watcher.mount('#watcher');
