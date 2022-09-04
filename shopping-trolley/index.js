var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                isChoose: false,
                category: "电子产品"
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1,
                isChoose: false,
                category: "电子产品"
            },
            {
                id: 3,
                name: '肥皂',
                price: 20,
                count: 1,
                isChoose: false,
                category: "生活用品"
            },
            {
                id: 4,
                name: '青菜',
                price: 10,
                count: 1,
                isChoose: false,
                category: "果蔬"
            },
            {
                id: 5,
                name: '牙刷',
                price: 10,
                count: 1,
                isChoose: false,
                category: "生活用品"
            },
            {
                id: 6,
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                isChoose: false,
                category: "电子产品"
            },
            {
                id: 7,
                name: '苹果',
                price: 10,
                count: 1,
                isChoose: false,
                category: "果蔬"
            },
            {
                id: 8,
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                isChoose: false,
                category: "电子产品"
            },
            {
                id: 9,
                name: '牙膏',
                price: 10,
                count: 1,
                isChoose: false,
                category: "生活用品"
            },
            {
                id: 10,
                name: '香蕉',
                price: 10,
                count: 1,
                isChoose: false,
                category: "果蔬"
            },
        ]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i =0; i < this.list.length; i++) {
                var item = this.list[i]
                if (item.isChoose === true) {
                    total += item.price * item.count; 
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
        }
    },
    methods: {
        handleChooseAll: function () {
            for (const item of this.list) {
                item.isChoose = true;
            }
        },
        handleChoose: function (index) {
            this.list[index].isChoose = !this.list[index].isChoose;
        },
        handleReduce: function (index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        }
    },
})