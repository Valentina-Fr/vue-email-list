Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        addresses: []
    },
    method:{

    },
    created() {
        for(i = 0; i < 11; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                const address = res.data.response;
                this.addresses.push(address);
            })
        }
    },
})