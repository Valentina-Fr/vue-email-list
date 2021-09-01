Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        addresses: []
    },
    method:{

    },
    created() {
        for(let i = 0; i < 10; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                const address = res.data.response;
                this.addresses.push(address);
            })
        }
    },
})