/* ========================================
   ORDER SERVICE
   ======================================== */

const Order = {

    save(order) {

        const orders =
            JSON.parse(
                localStorage.getItem(
                    "orders"
                )
            ) || [];

        orders.push({
            ...order,
            id: Date.now(),
            createdAt:
                new Date().toISOString()
        });

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

    },


    getAll() {

        return JSON.parse(
            localStorage.getItem(
                "orders"
            )
        ) || [];

    }

};