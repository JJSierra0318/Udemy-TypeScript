//Set of named constants

//If not specified, they're assigned numbers in order of declaration
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

const enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

//Use const enum to reduce code in JS