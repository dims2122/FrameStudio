/* ========================================
   CONTACT SERVICE
   ======================================== */

const Contact = {

    save(message) {

        const messages =
            JSON.parse(
                localStorage.getItem(
                    "contactMessages"
                )
            ) || [];

        messages.push({
            ...message,
            id: Date.now(),
            createdAt:
                new Date().toISOString()
        });

        localStorage.setItem(
            "contactMessages",
            JSON.stringify(messages)
        );

    },


    getAll() {

        return JSON.parse(
            localStorage.getItem(
                "contactMessages"
            )
        ) || [];

    }

};