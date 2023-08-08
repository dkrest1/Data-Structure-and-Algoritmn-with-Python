// ////////////////////// Reverse a LinkedList (easy) ////////////////////////
// Problem Statement #
// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    print_list() {
        let temp = this
        while (temp !== null) {
            process.stdout.write(`${temp.value} `)
            temp = temp.next
        }
        console.log()
    }

}

function reverseLinkedList(head) {
    let current = head
    let previous = null
    while (current !== null) {
        next = current.next
        current.next = previous
        previous = current
        current = next
    }

    return previous
}

// ///////////////////////////////////////// / Reverse a Sub-list (medium)////////////////
// Problem Statement #
// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

function reverseSubList(head, node1, node2) {
    if (node1 === node2) {
        return head
    }

    let previous = null
    let current = head
    let i = 0
    while (current !== null && i < node1 - 1) {
        previous = current
        current = current.next
        i += 1
    }

    i = 0
    let last_node_of_the_first_part = previous
    let last_node_of_the_sub_list = current
    let next = null


    while (current !== null && i < node2 - node1 + 1) {
        next = current.next
        current.next = previous
        previous = current
        current = next
        i += 1
    }

    if (last_node_of_the_first_part !== null) {
        last_node_of_the_first_part.next = previous
    } else {
        previous = head
    }

    last_node_of_the_sub_list.next = current
    return head

}


function main() {
    const head = new Node(1)
    head.next = new Node(2)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)
    head.next.next.next.next = new Node(5)

    process.stdout.write("Node of the original LinkedList are: ")
    head.print_list()
    let result = reverseSubList(head, 2, 4)
    process.stdout.write("Node of the reversed LinkedList are: ")
    result.print_list()


}

main()